import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummonersRoutingModule } from './summoners-routing.module';
import { SummonersComponent } from './summoners.component';


@NgModule({
  declarations: [
    SummonersComponent
  ],
  imports: [
    CommonModule,
    SummonersRoutingModule
  ]
})
export class SummonersModule { }
