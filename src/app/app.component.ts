import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnStyle: string = "btn btn-primary";
  candles: any[] = [];
  candleCollection: any[] = [
{ name: "Yankee Candle",  scent: "Vanilla",      color: "White" },
{ name: "Harlem Candles", scent: "SugarCookie",  color: "Pink" },
{ name: "Pretty Honest",  scent: "Spring",       color: "Green" },
{ name: "La Botica",      scent: "Pine",         color: "Dark Green" },
{ name: "Mecca Candle",   scent: "Peach",        color: "Orange" },
{ name: "Chesapeke Bay",  scent: "Christmas",    color: "Red" },
{ name: "White Barn",     scent: "Midnight",     color: "Black" },
{ name: "Lenox Luxury",   scent: "Rose",         color: "Pink" },
{ name: "PF Candle Co",   scent: "Lavender",     color: "Purple" },
  ];
  title = 'candle-list';
  
  getCandles(): void{
    this.candles = this.candleCollection;
  }

ngOnInit(): void{

}

}

