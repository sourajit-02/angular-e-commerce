import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-slider',
  templateUrl: './small-slider.component.html',
  styleUrls: ['./small-slider.component.scss'],
})
export class SmallSliderComponent implements OnInit {
  public displayedColumns: Object = {
    image: 'Image',
    title: 'Title',
    link: 'Link',
    position: 'Position',
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
