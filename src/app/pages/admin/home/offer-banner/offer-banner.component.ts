import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-banner',
  templateUrl: './offer-banner.component.html',
  styleUrls: ['./offer-banner.component.scss'],
})
export class OfferBannerComponent implements OnInit {
  public displayedColumns: Object = {
    image: 'Image',
    bannerLocation: 'Banner Location',
    title: 'Title',
    link: 'Link',
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
