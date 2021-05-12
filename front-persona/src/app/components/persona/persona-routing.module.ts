import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaService } from 'src/app/core/persona/persona.service';
import { FormPersonaComponent } from './form/form.component';
import { Persona } from './model/persona';
import { PersonaComponent } from './persona.component';

const routes: Routes = [
  {
    path: '',
    component: PersonaComponent,
    resolve: {
      data: PersonaService
    }
  },
  {
    path: 'crear',
    component: FormPersonaComponent,
    data:{
      tipo: 0
    }
  },
  {
    path: 'editar/:id',
    component: FormPersonaComponent,
    resolve: {
      data: PersonaService
    },
    data: {
      tipo: 1
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
