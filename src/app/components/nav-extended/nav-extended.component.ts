import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-extended',
  templateUrl: './nav-extended.component.html',
  styleUrls: ['./nav-extended.component.scss']
})
export class NavExtendedComponent implements OnInit {

  navExtendedOverlayEl;

  constructor() { }

  ngOnInit() {
  }

  menuIconToggle(thisEl) {
    thisEl.classList.toggle('change');
    this.navExtendedOverlayEl = document.getElementById('overlay-extended-wrapper');
    this.navExtendedOverlayEl.classList.toggle('overlay-toggle');
  }


}
