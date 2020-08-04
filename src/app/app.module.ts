import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'api', component: ListComponent},
];

@NgModule({
  imports:      [ RouterModule.forRoot(routes), BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, ListComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
