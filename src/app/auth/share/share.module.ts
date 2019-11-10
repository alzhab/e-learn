import { NgModule } from '@angular/core';
import { MessageComponent } from './components/message/message.component';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [MessageComponent],
  providers: [AuthService],
  imports: [

  ],
  exports: [
    MessageComponent,
  ]
})
export class AuthShareModule { }
