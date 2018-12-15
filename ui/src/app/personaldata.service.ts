import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Personalia } from './model/Personalia';

@Injectable({
  providedIn: 'root'
})
export class PersonaldataService {

  constructor() { }

  getPersonalia(): Observable<Personalia> {
    return of(MOCKPERSONALIA)
  }
}

const MOCKPERSONALIA: Personalia = {
  name: 'Tim Nederhoff',
  description: 'As a Test Automation Engineer I help people in the software testing and development field. Primarily by implementing automation in testing activities, but also by developing tooling for test management, test data management and reporting.',
  email: 'info@timnederhoff.nl',
  socialMedia: [
    {
      media: 'github',
      value: 'https://github.com/timnederhoff'
    }
  ],
  background: 'I am not the person who always knows everything, I am the guy that does make things work\n' +
    'The thing I like the most is to build stuff. Stuff that can be used to solve some sort of problem within an operation. Starting as a developer would be an obvious choice for me to start my career with. One might say. However, developing is just one aspect. Another cool aspect is to have to design stuff. Unfortunately, that’s not the job a developer is expected to do.\n' +
    'That’s why I like the role of Test Automation Engineer so much. Engineering starts with a certain question, or issue, that leads to the creative process of creating solutions. As a Test Automation Engineer I like to have both jobs: solving the big issues and designing and building the perfect solution for it.'
};
