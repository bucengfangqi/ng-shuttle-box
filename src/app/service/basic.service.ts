import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor() { }

  item = {
    children: [{
      title: "车",
      open:true,
      children: [{
        title: "汽车",
        open:true,
        children: [{
          title: "奔驰",
        }, {
          title: "宝马",
        }]
      }, {
        title: "火车",
      }, {
        title: "自行车",
      }, {
        title: "手推车",
      }]
    }]
  }
}
