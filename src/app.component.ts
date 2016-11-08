//our root app component
import {Component} from '@angular/core'

@Component({
  selector: 'my-app',
   template: `
	<h2>Hello !!!</h2>
	<p> {{ title }} </p>
`,
  styles: [`
	 p {
		color: blue;
	}`]
})
export class AppComponent {
  title = 'app works!';
}
