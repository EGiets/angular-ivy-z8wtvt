import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { newArray } from '@angular/compiler/src/util';
import { ShrekComponent } from './shrek/shrek.component';
import { EmotesComponent } from './emotes/emotes.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, ShrekComponent, EmotesComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

