import {
  Component,
  OnInit
} from '@angular/core';
import {
  Value
} from './../../models/brilliance-value';
import {
  BrillianceValue
} from './../../models/brilliance-award-value';
import {
  BrillianceValuesService
} from './../../services/brilliance-values.service';

@Component({
  selector: 'app-testimonials-value',
  templateUrl: './testimonials-value.component.html',
  styleUrls: ['./testimonials-value.component.scss']
})
export class TestimonialsValueComponent implements OnInit {
  value: {};
  customerValue: {};
  energiseValue: Value[];
  spiritValue: Value[];
  teamworkValue: Value[];

  constructor(private brillianceService: BrillianceValuesService) {}

  ngOnInit() {
    this.brillianceService.getCustomerValue().subscribe(data => {
      this.customerValue = data;
      console.log(this.customerValue);
    });

    this.brillianceService.getEnergiseValue().subscribe(data => {
      this.energiseValue = data;
      console.log(this.energiseValue);
    });

    this.brillianceService.getSpiritValue().subscribe(data => {
      this.spiritValue = data;
      console.log(this.spiritValue);
    });

    this.brillianceService.getTeamworkValue().subscribe(data => {
      this.teamworkValue = data;
      console.log(this.teamworkValue);
    });

  }

}
