import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return [
      {id: 1, name: 'Product 1', description: 'Product 1 description'},
      {id: 2, name: 'Product 2', description: 'Product 2 description'},
      {id: 3, name: 'Product 3', description: 'Product 3 description'}
    ];
  }

  addProduct(product: any) {
    console.log(product);
  }
}
