import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SostenibilidadComponent } from './sostenibilidad.component';
import { SostenibilidadRoutingModule } from './sostenibilidad.routing.module';



@NgModule({
  declarations: [SostenibilidadComponent],
  imports: [
    CommonModule,
    SostenibilidadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SostenibilidadModule { }