import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellAuthComponent } from './sell-auth.component';

const routes: Routes = [{ path: '', component: SellAuthComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellAuthRoutingModule { }
