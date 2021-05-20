import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss'],
})
export class HomeFooterComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  public list = [];

  ngOnInit(): void {
    this.list = this.getHomeData('footer');
  }

  getHomeData(key: string): any[] {
    return this.homeService.getHomeData(key);
  }
}
