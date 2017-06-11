import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdventCalenderComponent } from './advent-calender/advent-calender.component';

@NgModule({
  declarations: [
    AppComponent,
    AdventCalenderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
