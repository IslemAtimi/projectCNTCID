import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { PostServiceService } from '../services/post-service.service';
import { ProductsDto, postDto } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: ProductService,
    private servicePost:PostServiceService
  ) { }

  Products:ProductsDto[]=[]
  Posts:postDto[]=[]
  ngOnInit(): void {
   // this.products= this.service.getProducts();
  

    this.servicePost.getPosts().subscribe(postsList=>{
      this.Posts=postsList
    })

    this.servicePost.getProducts().subscribe(productsList=>{
      console.log(productsList.products)
      this.Products=productsList.products.slice(0,3)
      //this.Products=productsList
    })
  }



}
