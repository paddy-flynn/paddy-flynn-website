import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortingVisualiserComponent } from './sorting-visualiser/sorting-visualiser.component';
import { ArrayBarComponent } from './array-bar/array-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SortingVisualiserComponent,
    ArrayBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
