import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatToolbarModule,
    MatTooltipModule,
    } from '@angular/material';



const modules: any[] = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSortModule,
];

const components: any[] = [];

@NgModule({
  imports: [
    ...modules,
  ],
  declarations: [
    ...components,
  ],
  providers: [],
  exports: [
    ...components,
  ]
})

export class SharedModule { }
