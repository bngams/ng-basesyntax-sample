import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-hello', // <= html tag name
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  @Input()
  inputValue: string;

  // output => permet d'acceder à l'event depuis un autre composant
  @Output()
  myCustomEvent = new EventEmitter<string>();

  // title: string = ''; => title = '' (type inferrence)
  title = 'Hello World!!';

  products = [
    { id: 1, name: 'Product1' },
    { id: 2, name: 'Product2' },
    { id: 3, name: 'Product3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick() {
    console.log('Button clicked');
    this.myCustomEvent.emit(this.title);
  }

  inputValueLengthMoreThan(value) {
    return (this.inputValue && this.inputValue.length > value) ? true : false;
  }

}
