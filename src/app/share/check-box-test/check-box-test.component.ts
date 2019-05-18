import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box-test',
  templateUrl: './check-box-test.component.html',
  styleUrls: ['./check-box-test.component.scss']
})
export class CheckBoxTestComponent implements OnInit {
  checked = false;
  indeterminate = true;

  constructor() { }

  ngOnInit() {
  }

}
