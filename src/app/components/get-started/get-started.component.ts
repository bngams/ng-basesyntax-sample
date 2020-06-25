import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
  title = 'my-ng-app';

  constructor() { }

  ngOnInit(): void {
  }

  handleMyCustomEvent(value) {
    console.log('Received value', value);
    this.title = value;
  }
}
