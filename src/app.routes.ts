/* Import Routes Config */
import { RouterModule } from '@angular/router';
/* Import Individual Component */
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';

const routes = [
    {path: '', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'contact', component:ContactComponent}
];


export default RouterModule.forRoot(routes);

