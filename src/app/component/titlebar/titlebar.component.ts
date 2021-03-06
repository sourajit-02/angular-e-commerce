import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss'],
})
export class TitlebarComponent implements OnInit {
  constructor() {}
  @Input() titleText: string;
  @Input() subTitleText: string;
  ngOnInit(): void {}
}
