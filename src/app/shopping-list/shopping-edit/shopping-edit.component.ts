import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInput:ElementRef
 @ViewChild('amountInput') amountInput:ElementRef
 @Output() ingredientAdded=new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName=this.nameInput.nativeElement.value
    const ingamount=this.amountInput.nativeElement.value
    const newIngredient=new Ingredient(ingName,ingamount)
    this.ingredientAdded.emit(newIngredient)
  }

}
