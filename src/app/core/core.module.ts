import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const modules: any[] = [
  CommonModule,
];
const components: any[] = [];
const services: any[] = [];

@NgModule({
  imports: [
    ...modules,
  ],
  declarations: [
    ...components
  ],
  providers: [
    ...services,
  ],
  exports: [
    ...components
  ]
})
export class CoreModule { }
