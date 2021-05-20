import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/core/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private aboutService: AboutService) {}
  public titleImg: string;
  public titleText: string;
  public aboutPageImage: string;
  ngOnInit(): void {
    this.titleImg = this.aboutService.getTitleImg();
    this.aboutPageImage = this.aboutService.getAboutPageImg();
    this.titleText = this.aboutService.getTitleText();
  }
}
