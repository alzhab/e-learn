import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatTabsModule,
  MatSidenavModule, MatListModule, MatGridListModule, MatSlideToggleModule
} from '@angular/material';

const MaterialTheme = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatSlideToggleModule
]

@NgModule({
  imports: [
    MaterialTheme
  ],
  exports: [
    MaterialTheme
  ],
})
export class MaterialModule { }
