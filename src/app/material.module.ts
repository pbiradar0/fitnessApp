import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [MatSliderModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatCheckboxModule,MatNativeDateModule],
  exports: [MatSliderModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatCheckboxModule,MatNativeDateModule],
})
export class MaterialModule {}
