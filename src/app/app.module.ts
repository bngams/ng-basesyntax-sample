import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { HeaderComponent } from './components/header/header.component';
import { OtherPageComponent } from './components/other-page/other-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    GetStartedComponent,
    HeaderComponent,
    OtherPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  exports: [

  ],
  providers: [], // Injection
  bootstrap: [AppComponent]
})
export class AppModule { }
