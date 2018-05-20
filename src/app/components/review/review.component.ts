import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {RestaurantService} from '../../services/restaurant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit {

  // public userComments: string;

  public userName: string;
  public contact: number;
  public email: number;
  public address: string;

  review: boolean;
  restaurantDetails: any;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  minDate = new Date();
  maxDate = new Date();

  fileToUpload: File = null;

  constructor(private _formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private restaurantService: RestaurantService,
              private router: Router) {
    this.restaurantDetails = {};
    this.review = false;
    this.maxDate = new Date(this.minDate.getTime() + (24 * 60 * 60 * 1000));
  }

  ngOnInit() {
    // this.userComments = ' ';
    this.userName = '';

    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      contactCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required],
      addressCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      reviewCtrl: [' ', Validators.required],
      // guestCtrl: ['', Validators.required],
      // dateCtrl: ['', Validators.required]
    });
    this.getRestaurant();
  }

  getRestaurant(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.restaurantService.getRestaurantDeatils(id)
      .subscribe(restaurantDetails => this.restaurantDetails = restaurantDetails);
    console.log(this.restaurantDetails);
  }

  backHome() {
    this.router.navigate(['./home']);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    // this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
    //   // do something, if upload success
    // }, error => {
    //   console.log(error);
    // });
  }

}
