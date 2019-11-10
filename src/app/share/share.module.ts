import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TypingAnimationDirective } from 'angular-typing-animation'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TypingAnimationDirective],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    TypingAnimationDirective,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ShareModule { }
