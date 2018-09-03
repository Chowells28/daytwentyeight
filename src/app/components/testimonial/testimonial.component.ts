import { Brilliance } from './../../models/brilliance';
import { Component, OnInit } from '@angular/core';
import { BrillianceService } from './../../services/brilliance.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  brillianceData: Brilliance[];

  constructor(private brillianceService: BrillianceService) { }

  ngOnInit() {
    this.brillianceData = this.brillianceService.getBrillianceData();
    console.log('from the Testimonial component', this.brillianceData);
  }

}
