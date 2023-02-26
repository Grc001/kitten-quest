import { Component, Output, EventEmitter } from '@angular/core';
import { Cat } from '../models/Cat.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {
newCat : Cat = {
name : '',
race  :'',
birth : new Date(),
imgcat : 'http://placekitten.com/200/150',
}
@Output() sendNewCatToParent : EventEmitter<Cat> = new EventEmitter();

createNewCat(){
this.sendNewCatToParent.emit(this.newCat);
this.newCat = {
  name : '',
  race  :'',
  birth : new Date(),
  imgcat : 'http://placekitten.com/200/150',
  }
}
}
