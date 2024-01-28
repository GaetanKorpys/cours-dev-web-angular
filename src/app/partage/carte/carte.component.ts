import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/model/Person';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  constructor() { }

  @Input() employe: Person | undefined;

  ngOnInit(): void {
  }

}
