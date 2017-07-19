import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SecurityComponent } from './security.component';
import { SharedModule } from '../shared';

const securityRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: SecurityComponent
  }
]);

@NgModule({
  imports: [
    securityRouting,
    SharedModule
  ],
  declarations: [
    SecurityComponent
  ]
})
export class SecurityModule { }
