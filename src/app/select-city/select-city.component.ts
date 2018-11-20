import { Component, OnInit } from '@angular/core';
import { City } from '../models/city.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.less'],
  providers: []
})
export class SelectCityComponent implements OnInit {
  cities: City[];

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit() {
  }
  getRestaurents(id: number) {
     this.router.navigate(['/city/' + id]);
  }


}
