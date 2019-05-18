import { Component, OnInit, Input, AfterViewChecked, AfterViewInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import { from } from 'rxjs';
import { BasicService } from '@basic';

import { ChangeDetectorRef } from '@angular/core';

interface TreeItem {
  // 0 是空
  // 1 是-
  // 2 是对号
  checked: 0 | 1 | 2; title: string; indeterminate: boolean; children: TreeItem[]
}
@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss']
})
export class TreeListComponent implements OnInit, AfterViewInit {
  _item: TreeItem;


  @Input()
  set item(item: TreeItem) {
    this._item = item;
  }
  get item(): TreeItem {
    // 2 x
    const allPass = this._item.children.every(item => item.checked === 2);
    // 1  --- 
    const allSome = this._item.children.some(item => item.checked === 2 || item.checked === 1)

    if (allPass) {
      this._item.checked = 2
    } else if (allSome) {
      this._item.checked = 1
    } else {
      this._item.checked = 0;
    }
    return this._item;
  }


  constructor(
    private basicService: BasicService,
    private changeDetectorRef: ChangeDetectorRef
  ) { 

    this.changeDetectorRef.detach()
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.changeDetectorRef.reattach()
  }
  check_state(item: TreeItem) {
    // this.parent_checked(item)

    // this.check_checked_state(this.basicService.item)

    // console.log(this.basicService.item);
    if (item.checked === 1) {
      // 全选
      item.children.map(child => child.checked = 2)
    }
    else if (item.checked === 2) {
      // 全不选
      item.children.map(child => child.checked = 0)
    }
    else {
      // 全选
      item.children.map(child => child.checked = 2)
    }
  }

  //选择父元素，遍历子元素
  parent_checked(item) {
    if (item.children) {
      item.children.forEach(element => {
        element.checked = item.checked;
        this.parent_checked(element)
      });
    } else {
      return false;
    }
  }

  //遍历子元素的父元素
  check_checked_state(item) {
    let children_length = item.children.length;
    let init_length = 0;
    item.children.forEach(element => {
      if (element.checked) {
        init_length += 1;
      }
      if (element.children) {
        this.check_checked_state(element);
      }
    });
    if (children_length === init_length || init_length === 0) {
      item.indeterminate = false;
      item.checked = true;
    } else {
      item.indeterminate = true;
    }
  }

}
