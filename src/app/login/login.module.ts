//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { Http,HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule} from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
  //  BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    LoginRoutingModule
   // HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
