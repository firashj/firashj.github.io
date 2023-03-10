import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  table: any = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.table = this.productService.productTable;
  }
  tunisia = true;
  algeria = false;
  brazil = false;

  changeCountry() {
    this.tunisia = false;
    this.algeria = true;
    this.brazil = false;
  }
}
