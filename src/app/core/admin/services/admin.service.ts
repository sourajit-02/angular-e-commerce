import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  loadScript(scriptUrl: string) {
    let node: any = document.createElement('script');
    if (isPlatformBrowser(this.platformId)) {
      node.src = scriptUrl;
      node.type = 'text/javascript';
      node.async = true;
      document.getElementsByTagName('body')[0].appendChild(node);
    }
  }
  loadStyle(styleUrl: string) {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = styleUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  addScript(html: any) {
    let node: any = document.createElement('script');
    if (isPlatformBrowser(this.platformId)) {
      node.text = html;
      document.getElementsByTagName('body')[0].appendChild(node);
    }
  }
}
