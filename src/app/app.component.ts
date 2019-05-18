import { Component } from '@angular/core';
import { BasicService } from '@basic';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public basicService:BasicService
  ){}



}
