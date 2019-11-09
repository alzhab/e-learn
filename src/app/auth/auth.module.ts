import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [SignInComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ShareModule
  ]
})

export class AuthModule { }
