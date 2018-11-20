import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectCityComponent } from './select-city/select-city.component';
import { RestaurentDetailsComponent } from './select-city/restaurent-details/restaurent-details.component';
import { RestaurentComponent } from './select-city/restaurent/restaurent.component';
import { AppInterceptor } from './services/app.interceptor';
import { RestaurantService } from './services/restaurants.service';
import {DataTableModule} from "angular-6-datatable";

@NgModule({
  declarations: [
    AppComponent,
    SelectCityComponent,
    RestaurentDetailsComponent,
    RestaurentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
}, RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
