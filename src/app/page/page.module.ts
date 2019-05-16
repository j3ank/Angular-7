import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EntryComponent } from './entry/entry.component';
import { PageRoutingModule } from './page-routing.module';

const modules: any[] = [
  CommonModule,
  PageRoutingModule,
];

const components: any = [
  PageComponent,
  PageNotFoundComponent,
  EntryComponent,
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
export class PageModule { }
