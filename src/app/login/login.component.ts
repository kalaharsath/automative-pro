
//import { HttpModule } from '@angular/http';
import { Router , RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';

//import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
loginForm: FormGroup;
loading = false;
submitted = false;
returnUrl: string;

constructor(
private formBuilder: FormBuilder,
//private route: ActivatedRoute,
private router: Router ,
//private authenticationService : AuthenticationService,
//private toastr: ToastrService
) { }
 
ngOnInit() {
this.loginForm = this.formBuilder.group({
email: ['', Validators.required],
password: ['', Validators.required]
});
 
}
 
//for accessing to form fields
get fval() { return this.loginForm.controls; }
 
onFormSubmit() {
  console.log("data",this.loginForm.value);
this.submitted = true;
if (this.loginForm.invalid) {
return;
}
 
this.loading = true;
//this.router.navigate(['/','home']);
this.router.navigate(['/','dashboard']);

// this.authenticationService.login(this.fval.email.value, this.fval.password.value)
// .subscribe(
// data => {
// this.router.navigate(['/']);
// },
// error => {
// this.toastr.error(error.error.message, 'Error');
// this.loading = false;
// });
}
}
