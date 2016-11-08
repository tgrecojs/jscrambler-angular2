//our root app component
import {Component} from '@angular/core'

@Component({
  selector: 'about',
   template: `
	<h2>Hey there ;)</h2>
	<p> {{ title }} </p>
`,
  styles: [`
	 p {
		color: blue;
	}`]
})
export class AboutComponent {
  title = 'This is the about component!';
}
