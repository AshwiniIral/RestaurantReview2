import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../../services/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private restaurantDetails: any;
  private showList: boolean;

  constructor(private restaurantService: RestaurantService) {
    this.showList = true;
  }

  ngOnInit() {
    this.getRestaurantDeatils();
  }

  getRestaurantDeatils(): void {
    this.restaurantService.getDetails()
      .subscribe(restaurantDetails => this.restaurantDetails = restaurantDetails);
    console.log(this.restaurantDetails);
  }
}
