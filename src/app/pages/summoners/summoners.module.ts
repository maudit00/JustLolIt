import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummonersRoutingModule } from './summoners-routing.module';
import { SummonersComponent } from './summoners.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SummonersComponent
  ],
  imports: [
    CommonModule,
    SummonersRoutingModule,
    HttpClientModule
  ]
})
export class SummonersModule { }
