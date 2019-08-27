import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppinglitstService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInput:ElementRef
 @ViewChild('amountInput') amountInput:ElementRef
//  @Output() ingredientAdded=new EventEmitter<Ingredient>()
  constructor(private slService:ShoppinglitstService) { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName=this.nameInput.nativeElement.value
    const ingamount=this.amountInput.nativeElement.value
    const newIngredient=new Ingredient(ingName,ingamount)
    // this.ingredientAdded.emit(newIngredient)
    this.slService.adddIngredient(newIngredient)
  }

}
