import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navOverlayEl;

  constructor() {}

  ngOnInit() {
  }

  menuIconToggle(thisEl) {
    thisEl.classList.toggle('change');
    this.navOverlayEl = document.getElementById('overlay-wrapper');
    this.navOverlayEl.classList.toggle('overlay-toggle');
  }

}
