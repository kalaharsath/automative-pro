import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { catchError, retry } from 'rxjs/operators';

import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';



@Injectable()
export class DashboardService {

public url: string;
constructor(private http: HttpClient) {
    this.url = environment.url;

    console.log('url::',this.url);
}
public handleError = (error: Response) => {
    return Observable.throw(error)
}   
// getReturnitemscounts() { 
//     console.log('server side');
//     return this.http.get(this.url + 'v1/dashboard/returnitemscounts').pipe(
//             map(responce=>responce),           
//         )}

httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  getItemscounts() {
    return this
            .http
            .get(this.url + 'v1/dashboard/itemcounts');
  }

   getUsercounts() {
    return this
            .http
            .get(this.url + 'v1/dashboard/usercounts');
  }
     getSolditemscounts() {
    return this
            .http
            .get(this.url + 'v1/dashboard/solditemscounts');
  }

  
    //  getSubCategory(post){
    //    var obj={"countryCode":post.countryCode,"categoryName":post.categoryName}
    //     let httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});  
    //     let options = {headers: httpHeaders};  
    // return this.http.post(this.url+'v1/dashboard/subcategories',
    // obj,options).pipe(map(responce=>responce),catchError(this.handleError))   
    // }


      getSubCategory(data) {
     var obj={"countryCode":data.countryCode,"categoryName":data.categoryName}
    return this.http.post(this.url+'v1/dashboard/subcategories', JSON.stringify(obj), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  } 



     getBrand(data){
      var obj={"countryCode":data.countryCode,"categoryName":data.categoryName}
    return this.http.post(this.url+'v1/dashboard/brand',
    JSON.stringify(obj), this.httpOptions).pipe(
        map(responce=>responce), retry(1),
        catchError(this.errorHandl)
    )}

    getSolditems(data){
       var obj={"countryCode":data.countryCode,"categoryName":data.categoryName,"subcategory":"","brand":""}
    return this.http.post(this.url+'v1/dashboard/solditems',
    JSON.stringify(obj), this.httpOptions).pipe(
        map(responce=>responce), retry(1),
        catchError(this.errorHandl)
    )
    }

        getMisseditems(data){
       var obj={"countryCode":data.countryCode,"categoryName":data.categoryName,"subcategory":"","brand":""}
    return this.http.post(this.url+'v1/dashboard/misseditems',
    JSON.stringify(obj), this.httpOptions).pipe(
        map(responce=>responce), retry(1),
        catchError(this.errorHandl)
    )
    }


   getCancelleditems(data){
       var obj={"countryCode":data.countryCode,"categoryName":data.categoryName,"subcategory":"","brand":""}
    return this.http.post(this.url+'v1/dashboard/cancelleditems',
    JSON.stringify(obj), this.httpOptions).pipe(
        map(responce=>responce), retry(1),
        catchError(this.errorHandl)
    )
   }



     getWishlistitems(data){
     var obj={"countryCode":data.countryCode,"categoryName":data.categoryName,"subcategory":"","brand":""}
    return this.http.post(this.url+'v1/dashboard/wishlistitems',
    JSON.stringify(obj), this.httpOptions).pipe(
        map(responce=>responce), retry(1),
        catchError(this.errorHandl)
    )}

     getReturneditems(data){
     var obj={"countryCode":data.countryCode,"categoryName":data.categoryName,"subcategory":"","brand":""}
    return this.http.post(this.url+'v1/dashboard/returneditems',
    JSON.stringify(obj), this.httpOptions).pipe(
        map(responce=>responce), retry(1),
        catchError(this.errorHandl)
    )}

  getProductDetails(data) {
     var obj={
     "countryCode":data.countryCode,
     "categoryName":data.categoryName,
     "subCategoryName" : "Speakers",    
     "pageTo" : 0
   };
    return this.http.post(this.url+'v1/products/electronics', JSON.stringify(obj), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  } 

      dealsAdd(data) {
     var obj={
     "countryCode":data.countryCode,
     "categoryName":data.category,
     "subCategoryName" : data.subcategory,
     "item_id" : data.item_id,
     "brand" : data.brand_name,
     "dealtype" : data.dealtype,
     "discount"  : "10",
     "item_price" : data.price,
     "discount_price" : "",
     "dealhours" : 4
   };
    return this.http.post(this.url+'v1/dashboard/deals/add', JSON.stringify(obj), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  } 

 errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

}