import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

const data = [
  MatDialogModule,
  MatIconModule,
  MatChipsModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatBottomSheetModule,
  MatDividerModule,
  MatListModule,
];
@NgModule({
  declarations: [],
  imports: [data],
  exports: [data],
})
export class MaterialModule {}
