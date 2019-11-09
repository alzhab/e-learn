import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ShareModule } from '../share/share.module';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';


@NgModule({
  declarations: [SignInPageComponent, AuthComponent, ForgotPasswordPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ShareModule
  ]
})

export class AuthModule { }
