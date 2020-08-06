import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apollo-angular-link-http-ngcc';

  constructor(private apollo: Apollo) {
    this.apollo.watchQuery({query: gql`{ user { name } }`});
  }
}
