import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public restorants : Array<any>;
  search: string;
  constructor() {}
  
  searchInfo(){
    console.log(this.search);
  }

  ngOnInit() {
  }

}
