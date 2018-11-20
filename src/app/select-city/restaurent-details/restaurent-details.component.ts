import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurants.service';
import { Restaurant } from '../restaurent/restaurent';
import { Reviews, ReviewList } from '../../models/review.model';


@Component({
  selector: 'app-restaurents',
  templateUrl: './restaurent-details.component.html',
  styleUrls: ['./restaurent-details.component.less']
})
export class RestaurentDetailsComponent implements OnInit {
  restaurantDetail: Restaurant[];
  reviewList: ReviewList[];
  review: Reviews[];
  isClicked = false;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    const restaurantId = +this.route.snapshot.paramMap.get('id');
    this.restaurantService.getRestaurant(restaurantId).subscribe(data =>{
      console.log(data);
      this.restaurantDetail = data;
    });
    this.getReviews(restaurantId);
      
  }
  public doLike(id: number): void {
    this.isClicked = !this.isClicked;
  }
  public getReviews(restaurantId: number): void {
    this.restaurantService.getReviews(restaurantId).subscribe(data => {
      this.reviewList = data;
      this.review = data.user_reviews;
    })
  }

}
