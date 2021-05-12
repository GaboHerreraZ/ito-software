import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/core/persona/persona.service';
import { Persona } from './model/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public PERSONAS: Persona[] = [];
  form =  new FormGroup({});

  constructor(private route: ActivatedRoute,
              private personaService: PersonaService,
              private router: Router,
              private formBuild: FormBuilder) {
       this.route.data.subscribe(
            (result: any) => {
              this.PERSONAS = result.data;
            }
          );
   }

  ngOnInit(): void {
    this.form = this.formBuild.group({
      nombre: []
    });
  }

  go(id: any) {
    if (id) {
      this.router.navigate(['editar', id], { relativeTo: this.route });
    } else {
      this.router.navigate(['crear'], { relativeTo: this.route });
    }
  }


  consultarPorNombre() {
    this.personaService.getPersonaNombre(this.form.value.nombre).subscribe(
      (result: any) => {
        this.PERSONAS = result;
      }
    );
  }

}
