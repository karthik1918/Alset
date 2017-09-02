import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { OAuthService } from '../oauth.service';
import { OAuthProfilePage } from '../profile/oauth-profile.page';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
	templateUrl: 'oauth-providers.list.html',
	providers: [OAuthService]
})
export class OAuthProvidersListPage {
	private oauthService: OAuthService;
	private nav: NavController;

private callbackurl:any;
 
	constructor(oauthService: OAuthService, nav: NavController, private _sanitizer: DomSanitizer,private platform: Platform) {
    this.callbackurl = this._sanitizer.bypassSecurityTrustResourceUrl("http://localhost/callback");
		this.oauthService = oauthService;
		this.nav = nav;
	}

	public login(source: string) {
        this.platform.ready().then(() => {
            this.oauthService.login(source)
                .then(
                    () => this.nav.setRoot(OAuthProfilePage),
                    error => alert(error)
                );
        })
	}
    public login1() {

        this.platform.ready().then(() => {

            this.facebookLogin().then(success => {
                this.nav.setRoot(OAuthProfilePage)
            }, (error) => {
                alert(error);
            });
        });
    }
    public facebookLogin(): Promise<any> {
        return new Promise(function(resolve, reject) {



            var browserRef = window.open("https://www.facebook.com/v2.0/dialog/oauth?client_id=" + "1669133426439341" + "&redirect_uri=https://www.facebook.com/connect/login_success.html&response_type=token&scope=email", "_self");
            browserRef.addEventListener("loadstart", function(event){
                alert(event.url);

                if ((event.url).indexOf("https://www.facebook.com/connect/login_success.html") === 0) {
                    browserRef.removeEventListener("exit", (event) => {});
                    browserRef.close();
                    var responseParameters = ((event.url).split("#")[1]).split("&");
                    var parsedResponse = {};
                    for (var i = 0; i < responseParameters.length; i++) {
                        parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                    }
                    if (parsedResponse["access_token"] !== undefined && parsedResponse["access_token"] !== null) {
                        resolve(parsedResponse);

                    } else {
                        reject("Problem authenticating with Facebook");
                    }
                }
            });
            browserRef.addEventListener("exit", function(event) {
                reject("The Facebook sign in flow was canceled");
            });
        });
    }
}
