import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummonerCardComponent } from './summoner-card/summoner-card.component';




@NgModule({
  declarations: [
    SummonerCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports :[
    SummonerCardComponent
  ]
})
export class SharedModule { }
