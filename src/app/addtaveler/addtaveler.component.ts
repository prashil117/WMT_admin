import { Router } from '@angular/router';
import { Traveler } from './../traveler/travelerc';
import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { TravelerserviceService } from "../traveler/travelerservice.service";
import { NgProgress } from 'ngx-progressbar';


@Component({
  selector: 'app-addtaveler',
  templateUrl: './addtaveler.component.html',
  styleUrls: ['./addtaveler.component.css']
})
export class AddtavelerComponent implements OnInit {
  name:string="";
  email_id:string="";
  address:string="";
  traveller_img:string="";
  city:string="";
  password:string="";
  public file_srcs:string[]=[];
  public debug_size_before:string[]=[];
  public debug_size_after:string[]=[];
  selectedFile:File=null;

  constructor(public _data:TravelerserviceService,public _router:Router,public changeDetectorRef:ChangeDetectorRef,public ngProgress: NgProgress) { }

  ngOnInit() {
  }

  /*fileChange(input){
    console.log("done");
    this.readFiles(input.files);

  }
  readFile(file, reader, callback){
    reader.onload = () => {
      callback(reader.result);
      this.traveller_img=reader.result;
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
  }*/

  onFileSelected(value){
    this.selectedFile=<File>value.target.files[0];
    
    console.log(value);
      }

  onAdd(addform){

    this.ngProgress.start();
    this.email_id=addform.value.email_id;
    this.password=addform.value.password;
    this.name=addform.value.name;
    this.address=addform.value.address;
    this.city=addform.value.city;
    console.log(name);
    const fd=new FormData();

    fd.append('traveller_name',this.name);
    fd.append('traveller_email',this.email_id);
    fd.append('traveller_address',this.address);
    fd.append('traveller_password',this.password);
    fd.append('city',this.city);
    fd.append('image',this.selectedFile,this.selectedFile.name);

   // let item=new Traveler(this.name,this.email_id,this.password,this.address,this.traveller_img,this.city);
  //  this._data.addTraveler(item).subscribe(
    this._data.addTraveler(fd).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/traveler']);
        this.ngProgress.done();
      }
    );
  }


}
