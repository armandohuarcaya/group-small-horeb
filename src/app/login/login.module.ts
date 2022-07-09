import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginHomeComponent } from './containers/login-home.component';
import { IonicModule } from '@ionic/angular';
import { SignInComponent } from './components/sign-in/sign-in.component';


@NgModule({
  declarations: [LoginHomeComponent, SignInComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    IonicModule
  ]
})
export class LoginModule { }
