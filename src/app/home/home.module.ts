import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

import { CommonModule } from '@angular/common';
import homeRoutes from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    homeRoutes
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
