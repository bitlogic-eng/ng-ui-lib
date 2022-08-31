import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { SelectModule, SelectComponent, ToolbarModule, ToolbarComponent } from 'ui-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatFormField, MatLabel} from '@angular/material/form-field';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatCheckboxModule, MatCheckbox} from '@angular/material/checkbox';
import { MatRadioModule, MatRadioButton, MatRadioGroup } from '@angular/material/radio';

@NgModule({
  // declarations: [
  //   AppComponent,
  // ],
  imports: [
    BrowserModule,
    SelectModule,
    ToolbarModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatCheckboxModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [
    SelectComponent,
    ToolbarComponent,
    MatButton,
    // MatLabel,
    // MatFormField, 
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule implements DoBootstrap { 
  constructor(private injector: Injector) {
    let element = createCustomElement(SelectComponent, {injector: this.injector});
    customElements.define('bit-select', element);    

    element = createCustomElement(ToolbarComponent, {injector: this.injector});
    customElements.define('bit-toolbar', element);    

    element = createCustomElement(MatButton, {injector: this.injector});
    customElements.define('bit-button', element);

    // element = createCustomElement(MatLabel, {injector: this.injector});
    // customElements.define('bit-label', element);    

    // element = createCustomElement(MatFormField, {injector: this.injector});
    // customElements.define('bit-fromfield', element);    

    element = createCustomElement(MatCheckbox, {injector: this.injector});
    customElements.define('bit-checkbox', element);    

    // element = createCustomElement(MatRadioGroup, {injector: this.injector});
    // customElements.define('bit-radio-group', element);    

    element = createCustomElement(MatRadioButton, {injector: this.injector});
    customElements.define('bit-radio-button', element);    


  }
  
  ngDoBootstrap(): void {
  }


}
