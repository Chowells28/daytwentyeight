import { BrillianceService } from './../../services/brilliance.service';
import { Brilliance } from './../../models/brilliance';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor(private brillianceService: BrillianceService) { }

  ngOnInit() {
  }

}
