import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

import { states } from './states';

@NgModule({
  declarations: [AppComponent, Component1Component, Component2Component],
  imports: [BrowserModule, UIRouterModule.forRoot({ states, useHash: true })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
