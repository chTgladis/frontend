import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConocenosComponent } from './conocenos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConocenosRoutingModule } from './conocenos.routing.module';



@NgModule({
  declarations: [ConocenosComponent],
  imports: [
    CommonModule,
    ConocenosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConocenosModule { }
