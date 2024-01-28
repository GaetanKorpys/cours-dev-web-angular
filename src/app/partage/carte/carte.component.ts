import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/Person';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  constructor() { }

  employe: Person | undefined = {
    id: "1",
    nom: "Grey",
    prenom: "Meredith",
    photo: "assets/meredith-grey.jpg",
    age: "32",
    sexe: "F",
    telephone: "0611510957",
    email: "meredith.grey@gmail.com",
    titres: [
      "interne",
    ],
    chefId: "2"
  };

  ngOnInit(): void {
  }

}
