import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TypingAnimationDirective } from 'angular-typing-animation'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TypingAnimationDirective],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    CommonModule,
    MaterialModule,
    TypingAnimationDirective,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class ShareModule { }
