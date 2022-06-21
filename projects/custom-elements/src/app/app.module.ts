import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { UiComponent, SelectComponent } from 'ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  // declarations: [
  //   AppComponent,
  // ],
  imports: [
    BrowserModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [SelectComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule implements DoBootstrap { 
  constructor(private injector: Injector) {
    let element = createCustomElement(SelectComponent, {injector: this.injector});
    customElements.define('bit-elements', element);    

  }
  
  ngDoBootstrap(): void {

  }


}
