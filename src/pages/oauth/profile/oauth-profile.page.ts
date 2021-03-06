import { Component } from '@angular/core';

import { IOAuthProfile } from '../models/oauth-profile.model';
import { OAuthService } from '../oauth.service';

@Component({
	templateUrl: 'oauth-profile.html',
	providers: [OAuthService]
})
export class OAuthProfilePage {
	private oauthService: OAuthService;
	profile: IOAuthProfile;

	constructor(oauthService: OAuthService) {
		this.oauthService = oauthService;
		oauthService.getProfile()
			.then(profile => this.profile = profile);
	}
}
