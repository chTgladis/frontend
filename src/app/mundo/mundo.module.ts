import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MundoComponent } from './mundo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MundoRoutingModule } from './mundo.routing.module';



@NgModule({
  declarations: [MundoComponent],
  imports: [
    CommonModule,
    MundoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MundoModule { }
