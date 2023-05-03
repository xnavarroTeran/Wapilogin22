import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {PageHome01Component} from "./components/page-home01/page-home01.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: "home-01", component: PageHome01Component },
  { path: '', redirectTo: '/home-01', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }