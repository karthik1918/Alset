import { Injectable } from '@angular/core';
declare var window: any;
@Injectable()
export class InAppBrowserService {
	public open(url: string): boolean {
        window.cordova.InAppBrowser.open(url, '_system', 'location=yes');
		return false;
	}
}