import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadFeatures="Recipe"
  onSelectFeatures(features:string){    
    this.loadFeatures=features
  }

}
