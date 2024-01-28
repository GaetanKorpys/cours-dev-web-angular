import {Component, OnInit} from '@angular/core';
import { Person } from '../model/Person';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent /**implements OnInit*/ {
  //employe: Person = {};
  employe!: Person;
  //constructor(private readonly listPersonnelService: ListPersonnelService) {}

  random() {}
    //Completez moi


  /**

  ngOnInit(): void {
    this.random();
  }

  random() {
    this.listPersonnelService.fetchRandom().subscribe(employe => {
      this.employe = employe;
    });
  }

  delete(person: Person) {
    this.listPersonnelService.delete(person.id!).subscribe(personnel => {
      this.random();
    });
  }

   */
}
