import { observable, computed, action } from 'mobx-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Store {
  @observable value;

  @computed
  get computedValue() {
    return this.value + 1;
  }

  @action
  action() {
    this.value++;
  }
}
