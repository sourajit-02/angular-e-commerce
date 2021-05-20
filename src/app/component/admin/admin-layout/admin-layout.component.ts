import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/admin/services/admin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  constructor(private admin: AdminService, private router: Router) {}
  public Scripts: string[] = [
    // Bootstrap
    // './assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js',

    // AdminLTE
    './assets/admin/dist/js/adminlte.js',

    // OPTIONAL SCRIPTS
    './assets/admin/plugins/chart.js/Chart.min.js',

    // AdminLTE for demo purposes
    './assets/admin/dist/js/demo.js',

    // AdminLTE dashboard demo (This is only for demo purposes)
    './assets/admin/dist/js/pages/dashboard3.js',
  ];
  public Styles: string[] = [
    // Google Font: Source Sans Pro
    'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback',

    // Font Awesome Icons
    './assets/admin/plugins/fontawesome-free/css/all.min.css',

    // IonIcons
    'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',

    // Theme style
    './assets/admin/dist/css/adminlte.css',
  ];

  ngOnInit() {
    document.body.className = 'hold-transition sidebar-mini sidebar-collapse';
    this.loadScripts();
    this.loadStyles();
    if (this.router.url !== '/admin/dashboard') {
      // document.body.removeChild(document.body.lastChild);
    }
  }
  ngOnDestroy() {
    document.body.className = '';
  }
  loadScripts() {
    for (const script of this.Scripts) {
      this.admin.loadScript(script);
    }
  }
  loadStyles() {
    for (const style of this.Styles) {
      this.admin.loadStyle(style);
    }
  }
}
