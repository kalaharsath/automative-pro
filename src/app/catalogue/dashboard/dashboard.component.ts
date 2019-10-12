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

 public radio1 : boolean;
 public radio2 : boolean;
 public radio3 : boolean;
 public dealtypeVal : any;
 public perpage = 2;
 public p = 1;
 public total_items : number;
 
 constructor( private dashboardservice : DashboardService) {
  this.model['suplier'] = 'Doba';
  this.model['countryCode']='us';
  this.model['categoryName']='electronics';   
 
  this.dealtype = [{name:'Flash Deals',type:'F'},{name:'Hot Deals',type:'H'},{name:'Today Deals',type:'T'}]
  
  this.getItemscounts();
  this.getUsercounts();
  this.getSolditemscounts(); 
  this.getReturnitemscounts();
  this.getProductDetails(1);
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
getReturnitemscounts(){
   this.dashboardservice.getReturnitemscounts().subscribe(data =>{   
      if(data){
          this.returnitemscount = data['count'];  
       }
    },err =>{
       setTimeout(() => {              
              }, 3000);
    }) 
}

getSubCategory(){
	  this.dashboardservice.getSubCategory(this.model).subscribe(data =>{   
	  	console.log('subcategory::',data);
      if(data['status']=='Accepted'){
         this.subCategory = data['responseObjects']; 
       }else {
          this.subCategory = [];
       }
    },err =>{
       setTimeout(() => {
              
              }, 3000);
    }) 
}
getBrand(){
    this.dashboardservice.getBrand(this.model).subscribe(data =>{   
      console.log('brand::',data);
      if(data['status']=='Accepted'){
         this.brand = data['responseObjects']; 
       }
    },err =>{
       setTimeout(() => {
              
              }, 3000);
    }) 
}


getProductDetails(p){
  console.log('pageno:',p);
   console.log('model data:',JSON.stringify(this.model));
  

   this.dashboardservice.getProductDetails(this.model).subscribe(data =>{
      if(data['status']=='Accepted'){
           this.productDetails = data['responseObjects'];
           this.total_items = this.productDetails.length;
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
   console.log('client prod::',prod);
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
