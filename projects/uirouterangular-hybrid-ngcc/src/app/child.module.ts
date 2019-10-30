import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { ChildComponent } from './child.component';

@NgModule({
  declarations: [
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UpgradeModule,
    UIRouterUpgradeModule.forChild({ states: [{
        name: 'home.child',
        url: '/child',
        component: ChildComponent,
      }]
    }),
  ]
})
export class ChildModule {  }
