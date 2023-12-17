import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummonersRoutingModule } from './summoners-routing.module';
import { SummonersComponent } from './summoners.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SummonersComponent
  ],
  imports: [
    CommonModule,
    SummonersRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class SummonersModule { }
