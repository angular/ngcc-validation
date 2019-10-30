import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lazy1Component } from './lazy1/lazy1.component';
import { Lazy2Component } from './lazy2/lazy2.component';
import { UIRouterModule, UIView } from '@uirouter/angular';

@NgModule({
  declarations: [Lazy1Component, Lazy2Component],
  imports: [
    CommonModule,
    UIRouterModule.forChild({
      states: [
        { name: 'lazy', component: UIView, url: '/lazy' },
        { name: 'lazy.lazy1', component: Lazy1Component, url: '/lazy1' },
        { name: 'lazy.lazy2', component: Lazy2Component, url: '/lazy2' },
      ],
    }),
  ],
})
export class LazyModule {}
