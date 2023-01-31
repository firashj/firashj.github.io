import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productTable = [
    { productName: 'Orange', productPrice: 10, productQuantity: 2 },
    { productName: 'Banana', productPrice: 20, productQuantity: 4 },
    { productName: 'Fraise', productPrice: 30, productQuantity: 6 },
    { productName: 'Pomme', productPrice: 40, productQuantity: 8 }
  ]
  constructor() {}
}
