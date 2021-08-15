import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import ButtonComponent from './components/button/button.component';
import HeaderComponent from './components/header/header.component';
import PageComponent from './components/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
