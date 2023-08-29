import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const STORE_BASE_URL ='https://fakestoreapi.com'
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient:HttpClient) { }

  getAllProducts(limit='12',sort='desc'):Observable <Array<Product>>{
    return this.httpClient.get<Array<Product>>(`${STORE_BASE_URL}/products?sort=${sort}&limit=${limit}`)
  }
}
