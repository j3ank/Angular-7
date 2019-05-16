import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'page',
        loadChildren: './page/page.module#PageModule',
      },
      {
        path: 'product',
        loadChildren: './product/product.module#ProductModule',
      },
      {
        path: '',
        loadChildren: './page/page.module#PageModule',
      },
    ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
