import { Component, OnInit, Input } from '@angular/core';

interface Options {
  text: string;
  ext: string;
  x: number;
  y: number;
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
    this.loadChart(this.options);
  }

  loadChart(options: Options) {
    this.chartUrl = `https://via.placeholder.com/${options.x}x${options.y}.${options.ext}?text=${options.text}`;
  }

}
