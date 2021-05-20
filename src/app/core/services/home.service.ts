import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private app: AppService) {}
  getHomeData(key: string): any[] {
    switch (key) {
      case 'slider':
        return [
          '../../../assets/master-slide/master-slide-04.jpg',
          '../../../assets/master-slide/master-slide-02.jpg',
          '../../../assets/master-slide/master-slide-01.jpg',
        ];
      case 'banner':
        return [
          {
            image1: '../../../assets/bannerp/banner-01.jpg',
            text1: 'DRESSES',
            image2: '../../../assets/bannerp/banner-04.jpg',
            text2: 'SUNGLASSES',
          },
          {
            image1: '../../../assets/bannerp/banner-05.jpg',
            text1: 'WATCHES',
            image2: '../../../assets/bannerp/banner-03.jpg',
            text2: 'FOOTERWEAR',
          },
          {
            image1: '../../../assets/bannerp/banner-02.jpg',
            text1: 'BAGS',
            image2: '../../../assets/bannerp/banner-06.jpg',
            text2: 'ACCESSORIES',
          },
        ];
      case 'bg-banner':
        return [
          '../../../assets/bg-banner/banner-01.jpg',
          '../../../assets/bg-banner/banner-02.jpg',
        ];
      case 'blog':
        return [
          {
            image: '../../../assets/blog/blog-01.jpg',
            title: 'Black Friday Guide: Best Sales & Discount Codes',
            info: {
              text1: 'by',
              text2: 'fashe-theme Admin',
              text3: 'on',
            },
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...',
          },
          {
            image: '../../../assets/blog/blog-02.jpg',
            title: 'The White Sneakers Nearly Every Fashion Girls wn',
            info: {
              text1: 'by',
              text2: 'fashe-theme Admin',
              text3: 'on',
            },
            content:
              'Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et...',
          },
          {
            image: '../../../assets/blog/blog-03.jpg',
            title: 'New York SS 2018 Street Style: By Annina Mislin',
            info: {
              text1: 'by',
              text2: 'fashe-theme Admin',
              text3: 'on',
            },
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...',
          },
        ];
      case 'footer':
        return [
          {
            text1: 'Free Delivery Worldwide',
            text2: 'Mirum est notare quam littera gothica',
          },
          {
            text1: '30 Days Return',
            text2: 'Simply return it within 30 days for an exchange.',
          },
          {
            text1: 'Store Opening',
            text2: 'Shop open from Monday to Sunday',
          },
        ];
      default:
        return [];
    }
  }
}
