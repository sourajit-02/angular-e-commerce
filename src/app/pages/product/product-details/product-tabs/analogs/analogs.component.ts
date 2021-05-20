import { Component, OnInit } from '@angular/core';
import { AnalogsTable } from 'src/app/core/models/AnalogsTable';

const ELEMENT_DATA: AnalogsTable[] = [
  {
    name: {
      productName: 'Sunset Brake Kit',
      sku: 'SSX-780B390-S',
    },
    rating: {
      filledStars: [1, 2, 3, 4],
      outlinedStars: [1],
      reviews: 7,
    },
    brand: {
      brandName: 'Sunset',
      location: 'Germany',
    },
    price: 1259,
  },
  {
    name: {
      productName: 'Specter Brake Kit',
      sku: 'SCT-123A380-S',
    },
    rating: {
      filledStars: [1, 2, 3, 4, 5],
      reviews: 3,
    },
    brand: {
      brandName: 'Specter',
      location: 'China',
    },
    price: 799,
  },
  {
    name: {
      productName: 'Brake Kit',
      sku: 'NNO-120K643-S',
    },
    rating: {
      filledStars: [1, 2, 3],
      outlinedStars: [1, 2],
      reviews: 9,
    },
    brand: {
      brandName: 'No Name',
      location: 'China',
    },
    price: 569,
  },
];
@Component({
  selector: 'app-analogs',
  templateUrl: './analogs.component.html',
  styleUrls: ['./analogs.component.scss'],
})
export class AnalogsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  displayedColumns: string[] = ['Name', 'Rating', 'Brand', 'Price'];
  dataSource = ELEMENT_DATA;
}
