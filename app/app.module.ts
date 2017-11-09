import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
//import { TextComponent } from './text.component';
import {ProductComponent} from './product-list.component'

@NgModule({
declarations: [
AppComponent,  ProductComponent
],
imports: [
BrowserModule,
//HttpClientModule
],
bootstrap : [AppComponent, ProductComponent]

})
export class AppModule{ } 