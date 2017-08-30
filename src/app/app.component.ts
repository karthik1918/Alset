import {Component, ViewChild} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar';

import {App, MenuController, Nav, Platform} from 'ionic-angular';
import {OAuthProvidersListPage} from '../pages/oauth/list/oauth-providers.list.page';

@Component({
  templateUrl:'app.html'
})
export class MyApp {
  pages;
  rootPage;
  
  private app;
  private platform;
  private menu: MenuController;
  
  @ViewChild(Nav) nav: Nav;
  
  constructor(app: App, platform: Platform, menu: MenuController, private statusBar: StatusBar) {
    this.menu = menu;
    this.app = app;
    this.platform = platform;
    this.initializeApp();
    
    // set our app's pages
    this.pages = [
      {title:'OAuth', component:OAuthProvidersListPage, icon:'log-in'}
    ];
    
    this.rootPage = OAuthProvidersListPage;
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }
  
  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
