import {Component, OnInit} from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits: any;
  public size = 5;
  public currentPage = 0;
  public totalPages: number;
  public pages: Array<number>;

  constructor(private catService: CatalogueService) {
  }

  ngOnInit() {
  }

  onGetProducts() {
    this.catService.getProducts(this.currentPage, this.size).subscribe(data => {
      this.produits = data;
      this.totalPages = data['page'].totalPages;

      this.pages = new Array<number>(this.totalPages);

    }, err => {

      console.log(err);
    });
  }
}
