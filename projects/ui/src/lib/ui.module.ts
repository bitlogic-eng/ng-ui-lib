import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    UiComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
