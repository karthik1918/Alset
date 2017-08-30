import { IOAuthProfile } from './models/oauth-profile.model';

export interface IOathProvider {
	login(): Promise<string>;
	getProfile(accessToken: string): Promise<IOAuthProfile>;
}
