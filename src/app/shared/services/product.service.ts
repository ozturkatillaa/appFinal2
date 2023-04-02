import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Array<Product>
  baseUrl="http://localhost:5001/"

  constructor(private http:HttpClient){
  }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+'api/products');
  }

  addProducts(product:Product):Observable<Product[]>{
    return this.http.post<Product[]>(this.baseUrl+'api/products',product)
  }


}

export class Product{
  id: number;

  ProductName: string;

  Stock: number;

  Price: number;

  CurrencyType: string;


}
