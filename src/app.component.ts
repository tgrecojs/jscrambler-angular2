//our root app component
import {Component} from '@angular/core'

@Component({
  selector: 'my-app',
   template: `
   <ul>
      <li>
      <a routerLink="">Home</a>
      </li>
       <li>
      <a routerLink="/about">About</a>
      </li>
      <li>
      <a routerLink="/contact">Contact</a>
      </li>
  </ul>
<router-outlet></router-outlet>
`,
  styles: [`
  ul { 
    display: flex;
    justify-content: space-around;
    list-style-type: none;
  }
	 p {
		color: blue;
	}`]
})
export class AppComponent {
  title = 'app works!';
}
