import { observable, computed, action } from 'mobx-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Store {
  @observable value = 0;

  @computed
  get computedValue() {
    return this.value + 10;
  }

  @action
  action() {
    this.value++;
  }
}
