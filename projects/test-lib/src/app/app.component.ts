import { Component } from '@angular/core';
import { SelectOption } from 'ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-lib';
  
  selectLabel = 'select';
  isMultiple= false;
  selectOptions: SelectOption[] = [
    {id:1, value: 'PRESENCIAL HOME'},
    {id:2, value: 'PRESENCIAL HOME RIO IV'},
    {id:3, value: 'PRESENCIAL .'},
    {id:4, value: 'PRESENCIAL . RIO IV'},
    {id:5, value: 'DISTANCIA - ED HOME'},
    {id:6, value: 'DISTANCIA - EDUCACION DISTRIBUIDA'},
  ] 


  onSelectChange($event: any) {

  }
}
