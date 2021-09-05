var botonExtraer = document.getElementById("extraer");

botonExtraer.onclick = clickExtraer;

function clickExtraer(){
    let nombres = document.getElementById("apellNom").value;
    let fechaNac = new Date(document.getElementById("fechaNac").value);
    let paterno = document.getElementById("paterno");
    let materno = document.getElementById("materno");
    let nombre = document.getElementById("nombre");
    let longApell = document.getElementById("longApell");
    let edad = document.getElementById("edad");
    let mes = document.getElementById("mes");

    const arreglo = nombres.split(" ");
    paterno.value=arreglo[0];
    materno.value=arreglo[1];
    nombre.value="";
    if (arreglo.length>=3) {
        for (let i = 2; i < arreglo.length; i++){
            const element = arreglo[i];
            nombre.value += element+" ";
        }
    }

    let apellidos = paterno.value+materno.value;
    longApell.value = apellidos.length;
    
    const arregloMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"]
    mes.value = arregloMeses[fechaNac.getMonth()];

    let fechaActual = new Date();
    if (fechaActual.getMonth()>fechaNac.getMonth() || fechaActual.getDate()>fechaNac.getDate()) {
        edad.value = fechaActual.getFullYear()-fechaNac.getFullYear();   
    }else{
        edad.value = (fechaActual.getFullYear()-fechaNac.getFullYear())-1;
    }
}

var botonColorear = document.getElementById("colorear");

botonColorear.onclick = clickColorear;
let v=1;

function clickColorear(){
    let naranjas = document.getElementsByClassName("naranja");
    let azules = document.getElementsByClassName("azul");

    if (v) {
        for (let i = 0; i < azules.length; i++) {
            azules[i].style.backgroundColor="#B74919";
            azules[i].style.border="2px solid #993B12";
        }
        for (let i = 0; i < naranjas.length; i++) {
            naranjas[i].style.backgroundColor="#1D6FA9";
            naranjas[i].style.border="2px solid #135380";
        }
        v=0;
    } else {
        for (let i = 0; i < azules.length; i++) {
            azules[i].style.backgroundColor="#1D6FA9";
            azules[i].style.border="2px solid #135380";
        }
        for (let i = 0; i < naranjas.length; i++) {
            naranjas[i].style.backgroundColor="#B74919";
            naranjas[i].style.border="2px solid #993B12";
        }
        v=1;
    }
}