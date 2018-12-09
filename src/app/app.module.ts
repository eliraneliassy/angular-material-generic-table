import { AllegroTableModule } from './../../projects/allegro-table/src/lib/allegro-table.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AllegroTableModule,
    BrowserAnimationsModule
  ],
  entryComponents: [TestComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
