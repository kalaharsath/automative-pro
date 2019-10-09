import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
// { path: '', component: LoginComponent },
// { path: 'login', component: LoginComponent },
// { path: 'home', component: HomeComponent }
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', loadChildren: './login/login.module#LoginModule'},
{ path: '', loadChildren: './catalogue/catalogue.module#CatalogueModule'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
