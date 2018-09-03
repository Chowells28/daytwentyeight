import { Injectable } from '@angular/core';
import { Brilliance } from './../models/brilliance';

@Injectable({
  providedIn: 'root'
})
export class BrillianceService {
  brillinaceAwards: Brilliance[];

  constructor() {
    this.brillinaceAwards = [{
      is_active: true,
      person_nominated: 'Christopher Howells',
      person_nominated_by: 'Jess Nolan',
      core_value_demonstrated: 'Spirit',
      // tslint:disable-next-line:max-line-length
      reason_for_nomination: 'Just a thanks for all your work with the LTA. The Davis Cup was a great success over the weekend and your hard work and commitment to create the branded site to meet the specific requirements of the client and within the tight deadlines given to us helped contribute to the success of the event. You have also continued this work with the new LTA tournaments, often staying late to ensure all deadlines were met- which I appreciate were very tight at times. You have been a great support to me in getting these tournaments ready and it is has made a massive difference knowing that you were you keeping on top of all that needed doing in terms of the online pages and customer journey.'
    },
    {
      person_nominated: 'Christopher Howells',
      person_nominated_by: 'Event Organiser / Promoter',
      core_value_demonstrated: 'Customer',
      // tslint:disable-next-line:max-line-length
      reason_for_nomination: 'I wanted to personally thank you for all your hard work this week on Upper Streets Gaming event set up. I know this week has been challenging with Body Power and Chelsea but you guys really pulled it off for me, and the client is so happy with everything we have done for them. This client has been a tough nut to crack so pulling everything out the bag and getting this live for Monday has been amazing and will hopefully mean other events for us, as the feedback has been great so far for them, the proof is in the ticket sales next week so will get marketing on to this. To give you some perspective on this if we sell all the tickets available we will earn roughly over £50k and will deliver the new business team around 35,000 tickets.'
    },
    {
      person_nominated: 'Christopher Howells',
      person_nominated_by: 'Jess Nolan',
      core_value_demonstrated: 'Customer',
      // tslint:disable-next-line:max-line-length
      reason_for_nomination: 'I just wanted to thank you for you all your support over the last few weeks in getting the LTA pages built and ready for on sale. Your hard work, commitment and extreme patience (with not just me but the client) has been amazing. Your willingness to pick up constant changes from the client and improve the site has made my role as account manager a lot easier and has greatly contributed to the client being extremely happy with the work we have done. The time and effort you have put in has not gone unnoticed. The LTA are midway through their contract and with TTF currently pitching for another one of their larger tournaments this is a very critical time for us so the work done will contribute to us securing new business and well as retaining the existing from this particular client.'
    },
    {
      person_nominated: 'Christopher Howells',
      person_nominated_by: 'Rob Williams',
      core_value_demonstrated: 'Teamwork',
      // tslint:disable-next-line:max-line-length
      reason_for_nomination: 'The last few months have been manic, and the workload has been incredible. Client pressure has been the highest I\'ve known, and you\'ve all pulled together and worked evenings and weekends to ensure we deliver some of our best work to date. We\'ve run site ops at events unlike any we\'ve done to date like insomnia, and the Festival of Quilts. We\'ve set up new dashboards, and complex reporting across multiple currencies for the first time. We\'ve even taken on venue reporting for our first venue client, Wolves Civic! We\'ve delivered out of band releases, and 3 or 4 of our biggest pieces of functionality to date, from the API, and SeatPicker, to Trade & Exhibitor Registration. And all whilst launching some of our best white labels and keeping the boat afloat! You are by far the best bunch of people I\'ve ever had the pleasure to work with. :)'
    },
    {
      person_nominated: 'Christopher Howells',
      person_nominated_by: '',
      core_value_demonstrated: 'Spirit',
      // tslint:disable-next-line:max-line-length
      reason_for_nomination: 'I want to thank Chris for the hard work and effort he puts into the creation of the white label sites. He goes above and beyond, sometimes staying late on many occasions for last minute changes and last minute work that comes in. And he does it all with a smile on his face :) Thank you for all your hard work and efforts Chris..it\'s greatly appreciated!'
    },
    {
      person_nominated: 'Christopher Howells',
      person_nominated_by: 'Matthew Breen, extra note from Ian Smedley',
      core_value_demonstrated: 'Customer',
      // tslint:disable-next-line:max-line-length
      reason_for_nomination: 'Chris has put in a significant amount of work this week, staying late into the evenings on multiple occasions, working with great humour, attention to detail and a positive and helpful attitude to make sure we get the Insomnia white label ready for next week. His efforts have improved our relationship with the client and made sure we continue to deliver great service. From my perspective your efforts over the past fortnight in particular, across our entire portfolio and a range of customers, go way beyond the normal call of duty, you have embodied all of our values; Teamwork - You\'re always calm, collected, and approachable willing to help the rest of the team, despite your own workloads. Spirit - your drive to deliver quality results are second to none. Energise - Your energy, fast, accurate work and turnaround is outstanding, staying late, making nimble decisions, all to deliver for the final value - *Customer* - Thanks Chris.'
    }];
   }
   getBrillianceData(): Brilliance[] {
    console.log('from the service: ', this.brillinaceAwards);
    return this.brillinaceAwards;
  }
}
