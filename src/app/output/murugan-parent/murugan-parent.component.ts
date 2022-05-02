import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-murugan-parent',
  templateUrl: './murugan-parent.component.html',
  styleUrls: ['./murugan-parent.component.css']
})
export class MuruganParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  receiveChildValue(name: any) {
    console.log('parent called ' + name);
  }

}
