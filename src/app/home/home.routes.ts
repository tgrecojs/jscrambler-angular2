import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const HomeRoutes: Route[] = [
  { path: '', component: HomeComponent }
];

export default RouterModule.forChild(HomeRoutes);
