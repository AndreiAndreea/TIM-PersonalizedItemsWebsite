import { Injectable } from '@angular/core';
import { Product } from './product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  shopProducts: Product[] = [
    {
      id:0,
      title: 'Cup',
      description: 'Small cup with cute design. Can be used for coffee or tea.',
      price: '35',
      imageSource:"assets/images/products/buy1.jpg",
      availability:"In Stock"
    },
    {
      id:0,
      title: 'Invitation Card',
      description: 'Wedding vintage invitation card with roses and antique decorative elements. Vector illustration.',
      price: '15/each',
      imageSource:"assets/images/products/buy2.jpg",
      availability:"In Stock"
    }
  ]
  getShopProducts() {
    return this.shopProducts;
}
}
