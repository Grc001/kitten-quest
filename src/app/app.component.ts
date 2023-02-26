import { Component, } from '@angular/core';
import { catsToAdopt } from './cats';
import { Cat } from './models/Cat.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  catsToAdoptList : Cat[] = catsToAdopt;
  catsAdopted : Cat[] = [];

  addNewCat(event : Cat){
    this.catsToAdoptList.push(event);
  }
  recieveCatToAdopt( event : Cat){
    this.catsAdopted.push(event);
    this.catsToAdoptList.splice(this.catsToAdoptList.indexOf(event) , 1);
  }
}
