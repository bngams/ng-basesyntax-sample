import { Component, OnInit, AfterContentInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-chart',
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.scss']
})
export class D3ChartComponent implements OnInit, AfterContentInit {

  // DI hostElement
  constructor(private hostElement: ElementRef) { }

  ngOnInit(): void {
  }

  // wait all children components and html are ok
  ngAfterContentInit(): void {
    // select current component
    d3.select(this.hostElement.nativeElement).select('p').style('color', 'red');
  }

  drawCircle(event: any) {
    const svgContainer = d3.select(this.hostElement.nativeElement).select('svg');
    svgContainer.append('circle')
      .attr('cx', event.x)
      .attr('cy', event.y)
      .attr('r', 10)
      .attr('fill', 'red');
  }

}
