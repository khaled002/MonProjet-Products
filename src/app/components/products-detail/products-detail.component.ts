import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/Router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  code: string;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    /**
     * Snapchot way
     */
    // this.code = this._route.snapshot.params['id'];
    /**
     * Subscribe way
     */
    this._route.params.subscribe(parametres => this.code = parametres['id']);
  }

}
