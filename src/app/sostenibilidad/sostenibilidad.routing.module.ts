import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SostenibilidadComponent } from './sostenibilidad.component';

const routes:Routes = [
    {
        path: '',
        component: SostenibilidadComponent
    }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SostenibilidadRoutingModule { }