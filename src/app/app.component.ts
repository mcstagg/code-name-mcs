import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'code-name-mcs-app';

  connectLinkedIn = () => {
    window.open("https://www.linkedin.com/in/michael-stagg-0574571b9/");
  }

}
