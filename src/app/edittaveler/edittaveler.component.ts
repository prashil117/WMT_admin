import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Traveler } from './../traveler/travelerc';
import { TravelerserviceService } from '../traveler/travelerservice.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-edittaveler',
  templateUrl: './edittaveler.component.html',
  styleUrls: ['./edittaveler.component.css']
})
export class EdittavelerComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  selectedFile: File = null;
  public _subscription:Subscription;
  id:any;
  name1:string="";
  address1:string="";
  img1:string="";
  email1:string="";
  city1:string="";
  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:TravelerserviceService,public ngProgress: NgProgress) { }

  ngOnInit() {
    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
          this.id=para["id"];
         
      }
  );

  this._data.gettravellerById(this.id).subscribe(
    (data:Traveler[])=>{
      this.name1=data[0].traveller_name;
      this.address1=data[0].traveller_address;
      this.img1=data[0].traveller_img;
      this.city1=data[0].city;
      this.email1=data[0].traveller_email;
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

  onUpdate(){
   /* let traveler=new Traveler(this.name1,'','',this.address1,this.img1,this.city1);
    this._data.editTraveler(this.id,traveler).subscribe(
      ()=>{
        this._router.navigate(['/traveler']);
      }
    );*/
    this.ngProgress.start();
    if (this.selectedFile == null) {
      let traveler=new Traveler(this.name1,'','',this.address1,this.img1,this.city1);
      this._data.editTraveler(this.id, traveler).subscribe(
        () => {
          this._router.navigate(['/traveler']);
          this.ngProgress.done();
        }
      );
    }
    else {
      const fd=new FormData();
          fd.append('traveller_id',this.id);
          fd.append('traveller_name',this.name1);
          fd.append('traveller_email',this.email1);
          fd.append('traveller_address',this.address1);
          fd.append('city',this.city1);
          fd.append('image',this.selectedFile,this.selectedFile.name);
  
      console.log(fd);
  
      this._data.editTravellerimg(fd).subscribe(
        (data: any) => {
          console.log(data);
          this._router.navigate(['/traveler']);
          this.ngProgress.done();
        }
      );
    }
  }
  
  
}
