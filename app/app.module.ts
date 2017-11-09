import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TextComponent } from './text.component';

@NgModule({
declarations: [
AppComponent, TextComponent
],
imports: [
BrowserModule,
//HttpClientModule
],
bootstrap : [AppComponent,TextComponent]

})
export class AppModule{ } 