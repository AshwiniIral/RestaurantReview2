import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatStepperModule,
  MatSliderModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
})
export class AppMaterialModule {
}

