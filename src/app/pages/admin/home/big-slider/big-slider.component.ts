import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-slider',
  templateUrl: './big-slider.component.html',
  styleUrls: ['./big-slider.component.scss'],
})
export class BigSliderComponent implements OnInit {
  public displayedColumns: Object = {
    image: 'Image',
    title: 'Title',
    link: 'Link',
    sequence: 'Sequence',
    status: 'Status',
    actions: 'Actions',
  };
  public paginationData: Object = {
    length: 10,
    pageSize: 5,
    pageSizeOptions: [2, 3, 5, 7, 10],
  };
  public dataSource: any;
  constructor() {}

  ngOnInit() {}
}
