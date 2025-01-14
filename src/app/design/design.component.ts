import { Component, ViewChild, OnInit } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrl: './design.component.css',
})
export class DesignComponent implements OnInit {
  constructor(private service:SharedService) {}
  email: string = '';
  selectedProduct: string="";
  uploadFile:any;

  handleFileInput(event: any) {
    this.uploadFile = event.target.files[0];
  }

  submitChoice() {
    // Handle the form submission logic, including the selected product and uploaded file
    console.log('Selected Product:', this.selectedProduct);
    console.log('Uploaded File:', this.uploadFile);
  }

  addProduct() {
    var val={
      Username:this.email,
      Product:this.selectedProduct,
      PhotoFileName:this.uploadFile
    }
    this.service.addOrder(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  @ViewChild('nav', { read: DragScrollComponent })
  ds!: DragScrollComponent;
  ngOnInit(): void {}
}
