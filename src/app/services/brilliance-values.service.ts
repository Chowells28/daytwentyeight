import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Value } from '../models/brilliance-value';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BrillianceValuesService {
  url = 'http://localhost:3000/';
  valuesRoute = 'values/';
  cusomterId = '5bf66ccaafcfb4fae4bd74f3';
  energiseId = '5bf66ce7afcfb4fae4bd74fc';
  spiritId = '5bf66d0bafcfb4fae4bd750a';
  teamworkId = '5bf66d63afcfb4fae4bd7523';


  value: {};

  constructor(private http: HttpClient) { }

  getCustomerValue(): Observable<Value[]> {
    return this.http.get<Value[]>(this.url + this.valuesRoute + this.cusomterId);
  }

  getEnergiseValue(): Observable<Value[]> {
    return this.http.get<Value[]>(this.url + this.valuesRoute + this.energiseId);
  }

  getSpiritValue(): Observable<Value[]> {
    return this.http.get<Value[]>(this.url + this.valuesRoute + this.spiritId);
  }

  getTeamworkValue(): Observable<Value[]> {
    return this.http.get<Value[]>(this.url + this.valuesRoute + this.teamworkId);
  }

}
