import {Injectable} from '@angular/core';

@Injectable()
export class Config {
  public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
  public facebook = {
    apiUrl: 'https://graph.facebook.com/v2.10/',
    appId: '114716779230085',
    scope: ['email']
  };
  public google = {
    apiUrl:'https://www.googleapis.com/oauth2/v3/',
    appId:'441289135311-9mtm3n1jqhvsc8c828bk34vbohaajpv4.apps.googleusercontent.com',
    scope:['email']
  };
}
