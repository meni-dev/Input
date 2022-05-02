import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArumugamComponent } from './arumugam/arumugam.component';
import { MeniComponent } from './meni/meni.component';

@NgModule({
  declarations: [
    AppComponent,
    ArumugamComponent,
    MeniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
