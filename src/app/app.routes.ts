import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' }
];

export default RouterModule.forRoot(routes);

