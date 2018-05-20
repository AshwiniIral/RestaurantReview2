import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppMaterialModule} from './app-material.module';

import {RestaurantService} from '../services/restaurant.service';

import {AppComponent} from '../components/root/app.component';
import {ReviewComponent} from '../components/review/review.component';
import {HomeComponent} from '../components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    AppMaterialModule
  ],
  providers: [
    RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
