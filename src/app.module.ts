import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser'
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import appRoutes from './app.routes';

@NgModule({
  declarations: [ 
    AppComponent, 
    HomeComponent,
    AboutComponent,
    ContactComponent
    ],
  imports: [ 
    BrowserModule,
    appRoutes
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}