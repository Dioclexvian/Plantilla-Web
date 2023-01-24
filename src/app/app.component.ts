import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  defaultState = true ;
  navigationState = false;

  // ngClass remplazar
  onState() {
    this.defaultState = !this.defaultState;
  };

  onNavigationState() {
    this.navigationState = true
  }

  onCloseState() {
    this.navigationState = false
  }


  register = {
    name: '',
    email: '',
    password: '',
  }

  joinIn = {
    email: '',
    password: ''
  }
  onRegister() {
    console.log(this.register)
  }
  onJoinIn(email: string, password: string) {
    email === 'correo@correo.com' && password === 'papasdepollo'?
    console.log("ingreso validado"): console.log('error de autenticación')
  }


}
