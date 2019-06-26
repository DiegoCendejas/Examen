import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BASEComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';
import { RESTComponent } from './rest/rest.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'base', component: BASEComponent },
  { path: 'rest', component: RESTComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
