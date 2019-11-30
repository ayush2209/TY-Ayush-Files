import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent implements OnInit {
  constructor() { }
  highcharts = Highcharts;

  ngOnInit() {
  }

}
