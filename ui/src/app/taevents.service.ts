import { Injectable } from '@angular/core';
import { TaEvent } from './model/TaEvent';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaeventsService {

  constructor() { }

  getEvents(): Observable<TaEvent[]> {
    return of(MOCKEVENTS);
  }

}

const MOCKEVENTS: TaEvent[] = [
  {
    name: 'Selenium Conf',
    description: 'description for the conf',
    fromDate: '2019-04-01',
    toDate: '2019-04-03',
    costs: {
      currency: '$',
      value: 700
    },
    organizer: {
      name: 'Unknown'
    },
    tags: ['Selenium', 'Workshops'],
    url: 'https://www.seleniumconf.ja',
    venue: {
      name: 'Mega Hotel',
      address: 'street 7, PC 2871, Tokyo',
      url: 'https://www.megahotel.ja'
    }
  }
];
