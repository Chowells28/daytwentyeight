import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-overlay',
  templateUrl: './nav-overlay.component.html',
  styleUrls: ['./nav-overlay.component.scss']
})
export class NavOverlayComponent implements OnInit {

  navOverlayEl;
  navMenuIconEl;

  constructor() { }

  ngOnInit() {
  }

  menuLinks() {
    this.navOverlayEl = document.getElementById('overlay-wrapper');
    this.navOverlayEl.classList.toggle('overlay-toggle');
    // remove menu icon 'change' class
    this.navMenuIconEl = document.getElementsByClassName('menu-container');
    this.navMenuIconEl[0].classList.remove('change');
  }

}
