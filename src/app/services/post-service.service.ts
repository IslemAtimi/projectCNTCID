import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsDto, postDto } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }

  baseUrl='https://jsonplaceholder.typicode.com/';
  baseUrl2='https://dummyjson.com/'
  getPosts():Observable<postDto[]>{
    return this.http.get<postDto[]>(this.baseUrl+'posts');
  }

  getProducts():Observable<any>{
    return this.http.get<any>(this.baseUrl2+'products');
  }


}

