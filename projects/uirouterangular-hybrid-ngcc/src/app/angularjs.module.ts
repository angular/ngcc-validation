import * as angular from 'angular';
import { UrlService } from '@uirouter/core';

export const sampleAppModuleAngularJS = angular
    .module('sampleapp', [
      'ui.router',
      'ui.router.upgrade',
    ])
    .config([
      '$urlServiceProvider',
      ($urlService: UrlService) => $urlService.deferIntercept(),
    ]);
