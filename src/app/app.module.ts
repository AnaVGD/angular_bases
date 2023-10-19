import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { HeroModule } from './heroes/hero.module';

import { CounterModule } from './counter/components/counter.modules';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
