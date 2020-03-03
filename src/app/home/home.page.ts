import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public storage: Storage) {}

  user = {input: ' '};
  Submit() {
    this.storage.set("Input", this.user.input);
    this.storage.get('Input').then((inputs)=> {
      console.log(inputs);
    });
  }

}
