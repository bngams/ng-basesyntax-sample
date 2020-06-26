import { Component, OnInit, Input } from '@angular/core';


interface Options {
  text: string;
  value: number;
}

@Component({
  selector: 'app-py-chart',
  templateUrl: './py-chart.component.html',
  styleUrls: ['./py-chart.component.scss']
})
export class PyChartComponent implements OnInit {

  @Input()
  options: Options;

  chartUrl: string;

  constructor() { }

  ngOnInit(): void {
    this.loadChart(this.options.text);
  }

  loadChart(text: string) {
    this.chartUrl = 'https://via.placeholder.com/728x120.png?text=' + text;
  }

}
