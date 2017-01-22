import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MultipleInstanceServiceComponent } from './multiple-instance-service/multiple-instance-service.component';
import { HeroBioComponent } from './multiple-instance-service/hero-bio/hero-bio.component';
import { HeroCacheComponent } from './multiple-instance-service/hero-cache/hero-cache.component';

@NgModule({
  declarations: [
    AppComponent,
    MultipleInstanceServiceComponent,
    HeroBioComponent,
    HeroCacheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
