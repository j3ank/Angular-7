import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

const modules: any[] = [
  CommonModule,
];
const components: any[] = [
  BreadcrumbComponent,
];
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
