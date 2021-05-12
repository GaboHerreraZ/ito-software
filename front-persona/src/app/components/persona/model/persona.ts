export class Persona {
    _id: string;
    nombre: string;
    apellido: string;
    tipoDocumento: string;
    numeroDocumento: number;
    genero: String

    constructor(_id: string, nombre: string, apellido: string, tipoDocumento: string, numeroDocumento: number, genero: string) {
        this._id = _id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.genero = genero;
    }

    static construirPersonas(datos: any): Persona[] {
        let listPersonas: Persona[] = [];
        datos.map((p: any) => {
            listPersonas.push(new Persona(
                p['_id'],
                p['nombre'],
                p['apellido'],
                p['tipoDocumento'],
                p['numeroDocumento'],
                p['genero'],
            ));
        });
        return listPersonas;
    }



}