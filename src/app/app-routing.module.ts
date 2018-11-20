import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectCityComponent } from './select-city/select-city.component';
import { RestaurentDetailsComponent } from './select-city/restaurent-details/restaurent-details.component';
import { RestaurentComponent } from './select-city/restaurent/restaurent.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SelectCityComponent },
  { path: 'city/:id', component: RestaurentComponent },
  { path: 'restaurant/:id', component: RestaurentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
