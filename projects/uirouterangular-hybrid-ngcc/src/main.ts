import * as angular from "angular";
import 'zone.js';
import { enableProdMode } from '@angular/core';
import { NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UIRouter, UrlService } from '@uirouter/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  // Initialize the Angular Module
  // get() the UIRouter instance from DI to initialize the router
  const urlService: UrlService = platformRef.injector.get(UIRouter).urlService;

  // Instruct UIRouter to listen to URL changes
  function startUIRouter() {
    urlService.listen();
    urlService.sync();
  }

  platformRef.injector.get<NgZone>(NgZone).run(startUIRouter);
}).catch(err => console.error(err));