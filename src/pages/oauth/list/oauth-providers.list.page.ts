import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
 
	constructor(oauthService: OAuthService, nav: NavController, private _sanitizer: DomSanitizer) {
    this.callbackurl = this._sanitizer.bypassSecurityTrustResourceUrl("http://localhost/callback");
		this.oauthService = oauthService;
		this.nav = nav;
	}

	public login(source: string) {
		this.oauthService.login(source)
			.then(
				() => this.nav.setRoot(OAuthProfilePage),
				error => alert(error)
			);
	}
}
