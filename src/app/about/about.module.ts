import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';

import { CommonModule } from '@angular/common';
import aboutRoutes from './about.routes';

@NgModule({
  imports: [
    CommonModule,
    aboutRoutes
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
