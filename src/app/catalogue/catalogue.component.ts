import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-catalogue-dashboard',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
 
  constructor(private titleName: Title, public router: Router) {
   
  }
  ngOnInit() { }
 
 
 
}
