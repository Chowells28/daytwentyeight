import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-overlay-extended',
  templateUrl: './nav-overlay-extended.component.html',
  styleUrls: ['./nav-overlay-extended.component.scss']
})
export class NavOverlayExtendedComponent implements OnInit {

  navOverlayExtendedEl;
  navMenuIconExtendedEl;

  constructor() { }

  ngOnInit() {
  }

  menuLinks() {
    this.navOverlayExtendedEl = document.getElementById('overlay-extended-wrapper');
    this.navOverlayExtendedEl.classList.toggle('overlay-toggle');
    // remove menu icon 'change' class
    this.navMenuIconExtendedEl = document.getElementsByClassName('menu-container');
    this.navMenuIconExtendedEl[0].classList.remove('change');
  }

}
