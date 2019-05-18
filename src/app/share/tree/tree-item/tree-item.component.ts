import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.scss']
})
export class TreeItemComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
