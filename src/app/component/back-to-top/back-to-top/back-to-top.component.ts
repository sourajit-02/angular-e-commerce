import { Component, HostListener, OnInit } from '@angular/core';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss'],
})
export class BackToTopComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  faAngleDoubleUp = faAngleDoubleUp;
  @HostListener('window:scroll', []) onWindowScroll() {
    this.scrollFunction();
  }
  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      document.getElementById('back-to-top-button').style.display = 'block';
    } else {
      document.getElementById('back-to-top-button').style.display = 'none';
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
