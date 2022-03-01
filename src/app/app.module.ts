import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRotingModule } from './app-routing.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [  
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    AppRotingModule,
    CoreModule, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
