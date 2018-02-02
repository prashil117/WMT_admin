import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { HotelDataService } from "../hotel-data.service";
import { Hotels } from "../hotel/hotelc";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

  hotel_name:string;
  hotel_address:string;
  hotel_img:string;
  hotel_feedback:string;
  hotel_city:string;
  hotel_rating:string;
  hotel_description:string;
  public file_srcs:string[]=[];
  public debug_size_before:string[]=[];
  public debug_size_after:string[]=[];
  constructor(public _data:HotelDataService,public _router:Router,public changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit() {
  }

  fileChange(input){
    console.log("done");
    this.readFiles(input.files);

  }
  readFile(file, reader, callback){
    reader.onload = () => {
      callback(reader.result);
      this.hotel_img=reader.result;
      console.log(reader.result);
    }
  
    reader.readAsDataURL(file);
  }
  readFiles(files, index=0){
    // Create the file reader
    let reader = new FileReader();
    
    // If there is a file
    if(index in files){
      // Start reading this file
      this.readFile(files[index], reader, (result) =>{
        // Create an img element and add the image file data to it
        var img = document.createElement("img");
        img.src = result;
    
        // Send this img to the resize function (and wait for callback)
        this.resize(img, 250, 250, (resized_jpeg, before, after)=>{
          // For debugging (size in bytes before and after)
          this.debug_size_before.push(before);
          this.debug_size_after.push(after);
    
          // Add the resized jpeg img source to a list for preview
          // This is also the file you want to upload. (either as a
          // base64 string or img.src = resized_jpeg if you prefer a file). 
          this.file_srcs.push(resized_jpeg);
    
          // Read the next file;
          this.readFiles(files, index+1);
        });
      });
    }else{
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
    }
  }
  resize(img, MAX_WIDTH:number, MAX_HEIGHT:number, callback){
    // This will wait until the img is loaded before calling this function
    return img.onload = () => {
  
      // Get the images current width and height
      var width = img.width;
      var height = img.height;
  
      // Set the WxH to fit the Max values (but maintain proportions)
      if (width > height) {
          if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
          }
      } else {
          if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
          }
      }
  
      // create a canvas object
      var canvas = document.createElement("canvas");
  
      // Set the canvas to the new calculated dimensions
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext("2d");  
  
      ctx.drawImage(img, 0, 0,  width, height); 
  
      // Get this encoded as a jpeg
      // IMPORTANT: 'jpeg' NOT 'jpg'
      var dataUrl = canvas.toDataURL('image/jpeg');
  
      // callback with the results
      callback(dataUrl, img.src.length, dataUrl.length);
    };
  }

  onAdd()
  {
    let item=new Hotels(this.hotel_name,this.hotel_address,this.hotel_img,this.hotel_feedback,this.hotel_city,this.hotel_rating,this.hotel_description);
    this._data.addHotel(item).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/hotels']);
      }
    );
  }

}
