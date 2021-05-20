import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}
  public titleImg: string;
  public titleText: string;

  ngOnInit(): void {
    this.titleImg = './assets/about/heading-pages-06.jpg';
    this.titleText = 'contact';
  }
}
