import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meni',
  templateUrl: './meni.component.html',
  styleUrls: ['./meni.component.css']
})
export class MeniComponent implements OnInit {
  @Input() receiveFamilyName: string = '';
  @Input() familyDetails: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
