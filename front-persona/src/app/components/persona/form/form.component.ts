import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/core/persona/persona.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormPersonaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  tipo: number = 0;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private personaService: PersonaService,
              private router: Router ) { 
      this.crearForm();
      this.route.data.subscribe(
        data =>  {
          this.tipo = data.tipo;
          if(this.tipo === 1){
            this.form.patchValue(data.data[0]);
          }
        }
      )
  }

  ngOnInit(): void {
  }

  private crearForm() {
      this.form =  this.formBuilder.group({
        _id:[],
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        tipoDocumento: ['', Validators.required],
        numeroDocumento: ['', Validators.required],
        genero: ['', Validators.required]
    });
  }

  crearPersona() {
    this.personaService.addPersona(this.form.value).subscribe(
      () => {
        this.router.navigate(['inicio']);
      }
    );
  }

  actualizarPersona() {
    this.personaService.actualizarPersona(this.form.value).subscribe(
      () => {
        this.router.navigate(['inicio']);
      }
    );
  }





}
