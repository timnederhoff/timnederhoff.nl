import { Component, Input, OnInit } from '@angular/core';
import { Personalia } from '../model/Personalia';
import { PersonaldataService } from '../personaldata.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(private personaldataService: PersonaldataService) { }

  personalia: Personalia;

  getPersonalia() {
    this.personaldataService.getPersonalia().subscribe(data => this.personalia = data);
  }
  ngOnInit() {
    this.getPersonalia();
  }

}
