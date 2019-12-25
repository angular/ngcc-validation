import * as angular from 'angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule, setAngularJSGlobal } from '@angular/upgrade/static';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { sampleAppModuleAngularJS } from './angularjs.module';
import { AppComponent } from './app.component';
import { ChildModule } from './child.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    UIRouterUpgradeModule.forRoot({
      states: [{
        name: 'home',
        url: '',
        component: AppComponent,
      }]
    }),
    ChildModule
  ],
  providers: []
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    setAngularJSGlobal(angular);
    this.upgrade.bootstrap(document.body, [sampleAppModuleAngularJS.name], { strictDi: true });
  }
}
