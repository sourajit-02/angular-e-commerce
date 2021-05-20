import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  public list: any[] = [];
  ngOnInit(): void {
    this.list = this.getHomeData('blog');
  }
  getHomeData(key: string): any[] {
    return this.homeService.getHomeData(key);
  }
}
