import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { FormPersonaComponent } from './form/form.component';
import { PersonaComponent } from './persona.component';
import { PersonaService } from 'src/app/core/persona/persona.service';
import { ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [FormPersonaComponent, PersonaComponent],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PersonaService]
})
export class PersonaModule { }
