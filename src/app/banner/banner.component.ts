import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goToContact() {
    this.route.navigate(['/contact', 1]);
  }
}
