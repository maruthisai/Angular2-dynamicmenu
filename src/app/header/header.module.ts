import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DropdownComponent, NavComponent],
  exports:[DropdownComponent, NavComponent]
})
export class HeaderModule { }
