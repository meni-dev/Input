import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-saran-child',
  templateUrl: './saran-child.component.html',
  styleUrls: ['./saran-child.component.css']
})
export class SaranChildComponent implements OnInit {
  @Output() emitValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick() {
    console.log('button clicked')
    this.emitValue.emit('Menaga');
  }

}
