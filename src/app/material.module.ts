import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
})
export class MaterialModule {}
