import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ProductService) { }

  products:any[]=[]
  ngOnInit(): void {
    this.products= this.service.getProducts();
    console.log(this.products);
  }

}
