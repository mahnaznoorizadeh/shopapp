import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRotingModule } from './app-routing.module';
import { CoreModule } from './core.module';
import * as fromApp from './store/app.reducer'
import { AuthEffects } from './auth/store/auth.effect';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [  
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects]),
    AppRotingModule,
    CoreModule, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
