import { Component } from '@angular/core';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService) {
  }
  title = 'angularx-social-login-ngcc';
}
