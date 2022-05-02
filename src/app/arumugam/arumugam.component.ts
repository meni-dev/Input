import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arumugam',
  templateUrl: './arumugam.component.html',
  styleUrls: ['./arumugam.component.css']
})
export class ArumugamComponent implements OnInit {

  familyName: string = 'Visala';

  familyDetails: any = {
    color: 'white',
    char: 'good'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
