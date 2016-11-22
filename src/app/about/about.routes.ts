import { Route, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

export const AboutRoutes: Route[] = [
  { path: '', component: AboutComponent }
];

export default RouterModule.forChild(AboutRoutes);
