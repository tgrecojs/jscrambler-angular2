//our root app component
import {Component} from '@angular/core'

@Component({
  selector: 'contact',
   template: `
    <h2>Hi, again!</h2>
	  <p> {{ title }} </p>
`,
  styles: [`
	 p {
		color: blue;
	}`]
})
export class ContactComponent {
  title = 'This is the contact component!';
}
