import {Component, OnInit} from '@angular/core';
import { Person } from '../model/Person';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {


  employe!: Person;
  constructor(private readonly httpClient: HttpClient) {
    this.httpClient.get<Array<Person>>("http://localhost:3000/api/employe").subscribe((listDuPersonnel:Array<Person>) => {
      this.employe = listDuPersonnel[0];
    })
  }

  random() {
    this.httpClient.get<Person>("http://localhost:3000/api/employe/random").subscribe((personneRandom:Person) => {
      this.employe = personneRandom;
    })
  }

  ngOnInit(): void {
  }

  /*

  delete(person: Person) {
    this.listPersonnelService.delete(person.id!).subscribe(personnel => {
      this.random();
    });
  }

   */
}
