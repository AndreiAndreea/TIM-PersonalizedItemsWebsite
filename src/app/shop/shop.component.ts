import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product/product.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  durationInSeconds = 3;

  shopProducts: Product[] = [];
  constructor(private productService: ProductService, public dialog: MatDialog, private _snackBar: MatSnackBar) {
  }
  ngOnInit(): void {
    this.shopProducts = this.productService.getShopProducts();
  }
//   openDialog(item: Product): void {
//     const dialogRef = this.dialog.open(CustomDialogComponent, {
//       width: '750px',
//       backdropClass: 'custom-dialog-backdrop-class',
//       panelClass: 'custom-dialog-panel-class',
//       data: { title: item.title, state: item.state, description: item.description, price: item.price, imageSource: item.imageSource, id: item.id, availability: item.availability, readmore: item.readmore}
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed', result);
//       //this.price = result.data;
//     });
// }
// openSnackBar() {
//   this._snackBar.openFromComponent(PizzaPartyComponent, {
//     duration: this.durationInSeconds * 1000,
//   });
// }
}
