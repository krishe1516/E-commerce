import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellAuthRoutingModule } from './sell-auth-routing.module';
import { SellAuthComponent } from './sell-auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SellAuthComponent
  ],
  imports: [
    CommonModule,
    SellAuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SellAuthModule { }
