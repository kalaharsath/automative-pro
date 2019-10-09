import { Component, OnInit,ViewContainerRef,AfterViewInit } from '@angular/core';
import{ FormGroup ,FormBuilder , FormControlName} from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Title } from '@angular/platform-browser';
import { DashboardService } from '../../shared/services/dashboard.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
declare var $ :any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit  {
 public itemCount : any;
 public userCount : any;
 public solditemscounts = 0; 
 public returnitemscount = 0;
 public model: any = {};
 public subCategory : Array<any>;
 public brand : Array<any>;
 public suplier : any;
 public startDate = new Date();
 public endDate = new Date();
 public productDetails : Array<any>;
public dealtype : Array<any>;
public selecteddealtype : any;
 
 minDate : any;
 public demo1_radio : boolean;
 public radio1 : boolean;
 public radio2 : boolean;
 public radio3 : boolean;
 public dealtypeVal : any;
 
 constructor( private dashboardservice : DashboardService) {
  this.model['suplier'] = 'Doba';
  this.model['countryCode']='us';
  this.model['categoryName']='electronics';  
  this.model['radio1'] = true;
  this.demo1_radio = true;
  this.dealtype = [{name:'Flash Deals',type:'F'},{name:'Hot Deals',type:'H'},{name:'Today Deals',type:'T'}]
  
  this.getItemscounts();
  this.getUsercounts();
  this.getSolditemscounts(); 
  this.getProductDetails();
 }


 ngAfterViewInit(): void {
   
  }
radioCheck(val,dealval){
  console.log('val::',val);
  console.log('dealval::',dealval);
}
getType(val){
  console.log('val::',val);
 // this.dealtype = val
  // if(val == 'F'){
  //    this.radio1 = true;
  //  } else if(val == 'H'){
  //     this.radio2 = true;
  //  } else {
  //     this.radio3 = true;
  //  }
    
 
  
}
getCountryCode(code){
	  this.model['countryCode'] = code;

}
getCategoryName(catname){
    this.model['categoryName'] = catname;
    this.getSubCategory();
    this.getBrand();
}  
getItemscounts(){ 
   this.dashboardservice.getItemscounts().subscribe(data =>{   
      if(data){
           this.itemCount = data['count'];
       }
    },err =>{
       setTimeout(() => {              
              }, 3000);
    }) }

getUsercounts(){
   this.dashboardservice.getUsercounts().subscribe(data =>{   
      if(data){
          this.userCount = data['count'];  
       }
    },err =>{
       setTimeout(() => {
              
              }, 3000);
    }) 
}
getSolditemscounts(){
	 this.dashboardservice.getSolditemscounts().subscribe(data =>{   
      if(data){
          this.solditemscounts = data['count'];  
       }
    },err =>{
       setTimeout(() => {              
              }, 3000);
    }) 
}
getSubCategory(){
	  this.dashboardservice.getSubCategory(this.model).subscribe(data =>{   
	  	console.log('subcategory::',data);
      if(data){
         
       }
    },err =>{
       setTimeout(() => {
              
              }, 3000);
    }) 
}
getBrand(){
    this.dashboardservice.getBrand(this.model).subscribe(data =>{   
      console.log('brand::',data);
      if(data){
         
       }
    },err =>{
       setTimeout(() => {
              
              }, 3000);
    }) 
}


getProductDetails(){
   this.dashboardservice.getProductDetails(this.model).subscribe(data =>{   
      console.log('getProductDetails::',data);
      if(data['status']=='Accepted'){
           this.productDetails = data['responseObjects'];
       }
    },err =>{
       setTimeout(() => {
              
              }, 3000);
    }) 
}




getWishlistitems(){
   this.dashboardservice.getWishlistitems(this.model).subscribe(data =>{   
      console.log('getWishlistitems::',data);
      if(data){
         
       }
    },err =>{
       setTimeout(() => {
              
              }, 3000);
    }) 

}
submitProductDetails(prod){

  this.dashboardservice.dealsAdd(prod).subscribe(data =>{   
      console.log('dealsAdd::',data);
      if(data){
         
       }
    },err =>{
       setTimeout(() => {
              
              }, 3000);
    }) 

  
}

}
