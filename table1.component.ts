import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {

  @Input() character: any;
  @Input() columns: string[];

  constructor() { }

  ngOnInit() {
  }

}