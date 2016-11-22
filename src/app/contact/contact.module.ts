import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';

import { CommonModule } from '@angular/common';
import contactRoutes from './contact.routes';

@NgModule({
  imports: [
    CommonModule,
    contactRoutes
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
