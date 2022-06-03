import { Component, OnInit } from '@angular/core';
import { Auth, AuthConfig, Authenticator } from '@scott9909041/third-party-authentication';

@Component({
  selector: 'third-party-authentication-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  authenticator!: Authenticator;

  ngOnInit(): void {
    const config: AuthConfig = {
      line: {
        name: 'Scott'
      }
    }
    this.authenticator = Auth.init(config);
    this.authenticator.test();
  }
}
