import {Component, OnInit} from '@angular/core';
import { Person } from '../model/Person';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {


  employeAccueil!: Person;
  constructor(private readonly httpClient: HttpClient) {
    this.httpClient.get<Array<Person>>("http://localhost:3000/api/employe").subscribe((listDuPersonnel:Array<Person>) => {
      this.employeAccueil = listDuPersonnel[0];
    })
  }

  random() {
    this.httpClient.get<Person>("http://localhost:3000/api/employe/random").subscribe((personneRandom:Person) => {
      this.employeAccueil = personneRandom;
    })
  }

  deleteAccueil(person: Person){
    this.httpClient.delete("http://localhost:3000/api/employe/:id".replace(':id', person.id!)).subscribe(() => {
      this.random();
    });
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
