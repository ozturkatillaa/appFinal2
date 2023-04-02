import { Component, Injector, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, ProductService, } from '../../services/product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})

export class ProductComponent {

  dataSource: any;
  productName: any;
  stock: any;
  price: any;
  currencyType: any;
  jsonValue:any;
  currency: any;
  formGroup: FormGroup;
  formData: any = {};


  constructor(private service: ProductService, private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      productName: ['', Validators.required],
      stock: [''],
      price: [''],
      currencyType: [''],

    })

    this.dataSource = service.getProducts().subscribe(pro=>{this.dataSource=pro})

  }

  addProduct(){

    debugger
    let newData = new Product();


    newData.ProductName = this.productName;
    newData.Stock = this.stock;
    newData.Price = this.price;
    newData.CurrencyType = this.currencyType;

    this.dataSource= this.service.addProducts(newData).subscribe(pro=>{this.dataSource=pro})
    this.dataSource.push(newData);
  }

  jsonData(){
    this.jsonValue = JSON.stringify(this.dataSource);
  }
}

