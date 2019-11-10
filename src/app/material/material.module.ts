import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatTabsModule,
  MatSidenavModule, MatListModule
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
  MatListModule
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
