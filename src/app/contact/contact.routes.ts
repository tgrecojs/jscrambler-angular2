import { Route, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

export const ContactRoutes: Route[] = [
  { path: '', component: ContactComponent }
];

export default RouterModule.forChild(ContactRoutes);
