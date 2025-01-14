import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  shopProducts: Product[] = [];

  constructor(private productService: ProductService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.shopProducts = this.productService.getShopProducts();
  }

}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  imageSource: string;
  availability:string;
}
