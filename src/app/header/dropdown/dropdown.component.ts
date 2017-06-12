import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
@Output() OnMenuChange = new EventEmitter();
  constructor() { }
  @Input() menulist: Array<Menu>;
  menuClicked(menuId){
    this.OnMenuChange.emit({'menuId':menuId});
  }
}
