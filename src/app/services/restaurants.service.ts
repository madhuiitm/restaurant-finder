import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RestaurantService {
    constructor(private http: HttpClient) { }

    getNearbyRestaurants(lat: number, lon: number): Observable<any> {
        const url: string = 'https://developers.zomato.com/api/v2.1/geocode?lat=' +lat+ '&lon=' +lon;
        return this.http.get<any>(url);
    }

    getRestaurant(restaurantId: number): Observable<any> {
        const url: string = 'https://developers.zomato.com/api/v2.1/restaurant?res_id=' + restaurantId;
        return this.http.get<any>(url)
    }

    getReviews(restaurantId: number): Observable<any> {
        const url: string = 'https://developers.zomato.com/api/v2.1/reviews?res_id=' + restaurantId;
        return this.http.get<any>(url);
    }

}
