import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  data: Product[];
  constructor() {
    this.data = [
      { code: 'P1000', nom: 'café', prixUnitaire: 1500 },
      { code: 'P2000', nom: 'Thé' , prixUnitaire: 1500 },
      { code: 'P3000', nom: 'Coca Cola' , prixUnitaire: 2500 },

    ];
  }

  ngOnInit() {}
}
