import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataTableModule} from "angular2-datatable";

import { AppComponent } from './app.component';
import { 
  ApiService,
  SecurityService,
  FooterComponent,
  SidebarComponent,
  HeaderComponent,
  SharedModule,
} from './shared';
import { SecurityComponent } from './security/security.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    rootRouting,
    DataTableModule
  ],
  providers: [
    ApiService,
    SecurityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
