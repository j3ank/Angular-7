import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';

const modules: any[] = [
  CommonModule,
  ProductRoutingModule,
];

const components: any = [
  ProductComponent,
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components
  ],
})

export class ProductModule { }
