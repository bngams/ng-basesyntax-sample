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
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product/services/product.service';
import { DatavizModule } from './dataviz/dataviz.module';

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
    MaterialModule,
    HttpClientModule,
    DatavizModule
  ],
  exports: [

  ],
  providers: [], // Injection
  bootstrap: [AppComponent]
})
export class AppModule { }
