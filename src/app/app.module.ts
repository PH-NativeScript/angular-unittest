import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DiceService } from './services/dice.service';
import { UnittestMeComponent } from './unittest-me/unittest-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnittestMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ DiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
