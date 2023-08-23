import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
}

