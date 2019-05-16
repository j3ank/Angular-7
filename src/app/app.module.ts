import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    CoreModule,
    //SharedModule,
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
