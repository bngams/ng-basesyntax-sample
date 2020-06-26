import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D3ChartComponent } from './components/d3-chart/d3-chart.component';
import { PyChartComponent } from './components/py-chart/py-chart.component';



@NgModule({
  declarations: [D3ChartComponent, PyChartComponent],
  imports: [
    CommonModule
  ],
  exports: [
    D3ChartComponent, PyChartComponent
  ]
})
export class DatavizModule { }
