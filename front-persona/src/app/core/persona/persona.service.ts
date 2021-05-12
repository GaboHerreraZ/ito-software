import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map} from 'rxjs/operators'
import { Response } from 'src/app/util/response';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/components/persona/model/persona';
import { ActivatedRouteSnapshot } from '@angular/router';
 
@Injectable()
export class PersonaService {

  private URL_PERSONA: string;

  constructor(private http: HttpClient) {
      this.URL_PERSONA = `${environment.urlApi}/persona`;
  }

  resolve(route: ActivatedRouteSnapshot) {
    let id: string;
    id = route.params.id || null;
    return this.getPersona(id);
  }


  public getPersona(id: string): Observable<Persona[]>{
    const url = id ?  `${this.URL_PERSONA}?id=${id}`: this.URL_PERSONA; 
    return this.http.get<Persona[]>(url, {observe: 'response'})
                    .pipe(map((personas: HttpResponse<any>)=> {
                        const datos = personas.body;
                        const listPersonas = Persona.construirPersonas(datos.body);
                        return listPersonas;
                      })
                    );
  }


  public addPersona(persona: any): Observable<any> {
    return this.http.post(this.URL_PERSONA, persona, {observe: 'response'})
                    .pipe(
                      map((result: HttpResponse<any>) => {
                        return result;
                      })
                    );
  }


  public actualizarPersona(persona: any): Observable<any> {
    return this.http.put(this.URL_PERSONA, persona, {observe: 'response'})
                    .pipe(
                      map((result: HttpResponse<any>) => {
                        return result;
                      })
                    );
  } 


  public getPersonaNombre(nombre: string): Observable<Persona[]>{
    const url = nombre ?  `${this.URL_PERSONA}/nombre?nombre=${nombre}`: this.URL_PERSONA; 
    return this.http.get<Persona[]>(url, {observe: 'response'})
                    .pipe(map((personas: HttpResponse<any>)=> {
                        const datos = personas.body;
                        const listPersonas = Persona.construirPersonas(datos.body);
                        return listPersonas;
                      })
                    );
  }






  
}
