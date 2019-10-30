import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

const component1State = {
  name: 'component1',
  url: '/component1',
  component: Component1Component,
};

const component2State = {
  name: 'component2',
  url: '/component2',
  component: Component2Component,
};

const lazyFutureStates = {
  name: 'lazy.**',
  url: '/lazy',
  loadChildren: () => import('./lazy/lazy.module').then(result => result.LazyModule),
};

export const states = [component1State, component2State, lazyFutureStates];
