import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { HotelDataService } from '../hotel-data.service';
import { Hotels } from "../hotel/hotelc";
import { NgProgress } from 'ngx-progressbar';
@Component({
  selector: 'app-edithotel',
  templateUrl: './edithotel.component.html',
  styleUrls: ['./edithotel.component.css']
})
export class EdithotelComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  public _subscription: Subscription;
  id: any;
  name1: string = "";
  address1: string = "";
  img: string = "";
  feedback1: string = "";
  city1: string = "";
  rating1: string = "";
  description1: string = "";
  selectedFile: File = null;

  constructor(public _router: Router, public _activatedRoute: ActivatedRoute, public _data: HotelDataService,public ngProgress: NgProgress) { }

  ngOnInit() {
    this._subscription = this._activatedRoute.params.subscribe(
      (para: any) => {
        this.id = para["id"];

      }
    );

    this._data.getHotelById(this.id).subscribe(
      (data: Hotels[]) => {
        this.name1 = data[0].hotel_name;
        this.address1 = data[0].hotel_address;
        this.img = data[0].hotel_img;
        this.feedback1 = data[0].hotel_feedback;
        this.city1 = data[0].hotel_city;
        this.rating1 = data[0].hotel_rating;
        this.description1 = data[0].hotel_description;
      }
    );
  }

  onFileSelected(value) {
    this.selectedFile = <File>value.target.files[0];

    console.log(value);
  }

  getPicture() {
    this.fileInput.nativeElement.click();
  }

  onUpdate() {
    this.ngProgress.start();
    if (this.selectedFile == null) {
      let hotel = new Hotels(this.name1, this.address1, '', this.feedback1, this.city1, this.rating1, this.description1);

      this._data.editHotel(this.id, hotel).subscribe(
        () => {
          this._router.navigate(['/hotels']);
          this.ngProgress.done();
        }
      );
    }
    else {
      const fd = new FormData();
      fd.append('hotel_id', this.id);
      fd.append('hotel_description', this.description1);
      fd.append('hotel_name', this.name1);
      fd.append('hotel_address', this.address1);
      fd.append('hotel_feedback', this.feedback1);
      fd.append('hotel_city', this.city1);
      fd.append('image', this.selectedFile, this.selectedFile.name);
      fd.append('hotel_rating', this.rating1);

      console.log(fd);

      this._data.editHotelimg(fd).subscribe(
        (data: any) => {
          console.log(data);
          this._router.navigate(['/hotels']);
          this.ngProgress.done();
        }
      );
    }

  }

}
