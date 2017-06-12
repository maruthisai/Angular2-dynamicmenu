import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
@Output() subnavDataOnMenuChange = new EventEmitter();
  constructor() { }
  @Input() menudata: Object;
  menuChange(event){
    this.subnavDataOnMenuChange.emit({subnav:event})
  }
}
