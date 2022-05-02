import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArumugamComponent } from './arumugam/arumugam.component';
import { MeniComponent } from './meni/meni.component';
import { MuruganParentComponent } from './output/murugan-parent/murugan-parent.component';
import { SaranChildComponent } from './output/saran-child/saran-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ArumugamComponent,
    MeniComponent,
    MuruganParentComponent,
    SaranChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
