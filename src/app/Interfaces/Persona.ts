export class Persona {

    private nombre: string;
    private edad: number;
    private NSS: string;
    private sexo: String;
    private peso: any;
    private altura: any;

    //constructor();
    //constructor(nombre: string, edad: number, sexo: string);
    //constructor(nombre: string, edad: number, sexo: string, peso: any, altura: any);
    constructor(nombre?: string, edad?: number, sexo?: string, peso?: any, altura?: any) {
        this.nombre = nombre || "";
        this.edad = edad || 0;
        this.sexo = sexo || "H";
        this.peso = peso || 0;
        this.altura = altura || 0;
        this.NSS = this.generaNSS();
    }

    calcularIMC(): number {
        let pesoIdeal = this.peso / Math.pow(this.altura, 2);
        let response;

        if ((this.sexo == "H" && pesoIdeal < 20) || (this.sexo == "M" && pesoIdeal < 19)) {
            response = -1;
        }
        else if ((this.sexo == "H" && (pesoIdeal >= 20 && pesoIdeal <= 25)) || (this.sexo == "M" && (pesoIdeal >= 19 && pesoIdeal <= 24))) {
            response = 0;
        }
        else if ((this.sexo == "H" && pesoIdeal > 25) || (this.sexo == "M" && pesoIdeal > 24)) {
            response = 1;
        }
        return response;
    }

    esMayorDeEdad(): boolean {
        if (this.edad >= 18)
            return true;
        else
            return false
    }

    private comprobarSexo(sexo: string): boolean {
        if (sexo == "H" || sexo == "M")
            return true;
        else
            return false;
    }

    toString(): Persona {
        return this;
    }

    private generaNSS(): string {
        let caracteres = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var nssGenerado = "";
        for (var i = 0; i < 8; i++) {
            let random = Math.floor(Math.random() * caracteres.length);
            nssGenerado += caracteres.substring(random, random + 1);
        }
        return nssGenerado;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }

    setSexo(sexo: string): void {
        if (this.comprobarSexo(sexo))
            this.sexo = sexo;
    }

    setPeso(peso: number): void {
        this.peso = peso;
    }

    setAltura(altura: number): void {
        this.altura = altura;
    }

}