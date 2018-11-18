import { AllegroTableModule } from './../../projects/allegro-table/src/lib/allegro-table.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AllegroTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
