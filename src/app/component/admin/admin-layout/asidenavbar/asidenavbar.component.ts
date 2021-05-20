import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asidenavbar',
  templateUrl: './asidenavbar.component.html',
  styleUrls: ['./asidenavbar.component.scss'],
})
export class AsidenavbarComponent implements OnInit {
  public modules = [
    { url: 'modules/category', text: 'Category' },
    {
      url: 'modules/country',
      text: 'Country',
    },
    {
      url: 'modules/state',
      text: 'State',
    },
    {
      url: 'modules/city',
      text: 'City',
    },
    {
      url: 'modules/brand',
      text: 'Brand',
    },
    {
      url: 'modules/logistics',
      text: 'Logistics',
    },
    {
      url: 'modules/company-info',
      text: 'Company Info',
    },
  ];
  public product = {
    url: 'product/all-products',
    text: 'Product',
  };
  // {
  //   url: 'products/vendor',
  //   text: 'Vendor(Supplier)',
  // },
  // {
  //   url: 'products/all-products',
  //   text: 'All Products',
  // },
  // {
  //   url: 'products/product-reports',
  //   text: 'Product Reports',
  // },
  // {
  //   url: 'products/client-review-image',
  //   text: 'Client Review Image',
  // },
  // {
  //   url: 'products/low-stock-inventory',
  //   text: 'Low Stock Inventory',
  // },
  public reports = [
    {
      url: 'reports/product-view-reports',
      text: 'Product View Report',
    },
  ];
  public variant = [
    { url: 'variant/variant-master', text: 'Variant Master' },
    { url: 'variant/variant-data', text: 'Variant Data' },
    { url: 'variant/category-variant', text: 'Category Wise Variant' },
  ];
  public orders = [
    {
      url: 'order/view-order/new-order',
      text: 'New Order',
    },
    {
      url: 'order/track-order',
      text: 'Track Order',
    },
    {
      url: 'order/returned-order',
      text: 'Returned Order',
    },
    {
      url: 'order/view-order/cancelled-order',
      text: 'Cancelled Order',
    },
  ];
  public user = { url: 'user', text: 'User' };
  public cmsPages = { url: 'cms-pages', text: 'Cms Pages' };
  public manageSlider = [
    {
      url: 'manage-slider/big-slider',
      text: 'Home Big Slider',
    },
    {
      url: 'manage-slider/small-slider',
      text: 'Home Small Slider',
    },
    {
      url: 'manage-slider/offer-banner',
      text: 'Home Offer Banner',
    },
    {
      url: 'manage-slider/offer-products',
      text: 'Home Offer Products',
    },
  ];
  // public settings = [
  //   {
  //     url: 'settings/general',
  //     text: 'General',
  //   },
  //   {
  //     url: 'settings/staff-account',
  //     text: 'Staff Account',
  //   },
  //   {
  //     url: 'settings/payment',
  //     text: 'Payment',
  //   },
  //   {
  //     url: 'settings/shipping',
  //     text: 'Shipping',
  //   },
  //   {
  //     url: 'settings/billing',
  //     text: 'Billing',
  //   },
  //   {
  //     url: 'settings/store-apps',
  //     text: 'Store Apps',
  //   },
  //   {
  //     url: 'settings/logistics',
  //     text: 'Logistics',
  //   },
  //   {
  //     url: 'settings/pickup-address',
  //     text: 'Pickup Address',
  //   },
  // ];
  // public themes = [
  //   {
  //     url: 'themes/menu',
  //     text: 'Menu',
  //   },
  //   {
  //     url: 'themes/theme',
  //     text: 'Theme',
  //   },
  // ];
  constructor() {}

  ngOnInit() {}
}
