import * as angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { upgradeModule } from "@uirouter/angular-hybrid";

export const sampleAppModuleAngularJS = angular.module("sampleapp", [
  uiRouter,
  upgradeModule.name
]);

sampleAppModuleAngularJS.config([ '$urlServiceProvider', ($urlService) => $urlService.deferIntercept() ]);
