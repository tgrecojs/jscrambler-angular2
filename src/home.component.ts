//our root app component
import {Component} from '@angular/core'

@Component({
  selector: 'home',
   template: `
	<h2>Hello !!!</h2>
	<p> {{ title }} </p>
`,
  styles: [`
	 p {
		color: blue;
	}`]
})
export class HomeComponent {
  title = 'This is the home component!';
}
