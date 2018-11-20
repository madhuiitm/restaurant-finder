import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurants.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Restaurants, Restaurant } from './restaurent';
import * as _ from "lodash";

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrls: ['./restaurent.component.less'],
  providers: []
})
export class RestaurentComponent implements OnInit {
  list : any[];
  restaurants: Restaurants[] = [];
  

  constructor(private restaurantService: RestaurantService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
        const latitude: number = position.coords.latitude;
        const longitude: number = position.coords.longitude;
        this.restaurantService.getNearbyRestaurants(latitude, longitude).subscribe(data => {
          this.list = data;
          console.log(data);
          this.restaurants = data.nearby_restaurants;
        });
      },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    };

  }

  getRestaurantDetails(restaurantId: number): void {
    this.router.navigate(['/restaurant/' + restaurantId])
  }
}


