import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

export interface SelectOption {
  id: number,
  value: string,
  meta?: any
};

export interface SelectButtons {
  selectAll: string,
  deselectAll: string
};

export interface OtherText {
  text1: string,
  text2: string
}

@Component({
  selector: 'bit-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SelectComponent implements OnInit {

  @Input()
  selectControl = new FormControl('');

  allSelected = false;
  selected: any;

  @ViewChild('select') select: MatSelect;

  @Input()
  label: string = 'label';

  @Input()
  options: SelectOption[] = [];

  @Input()
  isMultiple: boolean = false;

  @Input()
  selectButtons: SelectButtons = { selectAll: 'Select All', deselectAll: 'Deselect All' };

  @Input()
  otherText: OtherText = { text1: 'más', text2: 'más' };

  @Input()
  allText: string = 'Todos';

  @Input()
  disabled: boolean = false;


  @Output()
  selectChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {    
    // this.selectControl.valueChanges.subscribe(()=>{
    //   this.selectChange.emit(this.selectControl.value)
    // })
  }

  onSelectionChange($event: MatSelectChange) {
    this.selectChange.emit($event.value)
  }

  selectAll() {
    this.select.options.forEach((item: MatOption) => { 
      if(!item.disabled) {
        item.select();
      }
    });
    this.allSelected = true;
  }

  deselectAll() {
    this.select.options.forEach((item: MatOption) => item.deselect());
    this.allSelected = false;
  }

}
