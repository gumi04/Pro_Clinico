(function($){
    $(function(){

        $('.sidenav').sidenav();
        $('.parallax').parallax();
        $('#textarea1').val('New Text');
        M.textareaAutoResize($('#textarea1'));
    });
})(jQuery);

$(document).ready(function(){
    $('.modal').modal();
  });

  
  function validalogin() {
    
    if (document.Flogin2.nombre.value.length == 0) {
        alert("Tiene que escribir su nombre");
        document.Flogin2.nombre.focus(); //ubica el cursor en la caja nombre
        return 0; //no avanza a commit
    }

    var h = document.Flogin2.contraseña.value;
    var er_contrase = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if (!er_contrase.test(h)) {
        alert('Campo CONTRASEÑA no es valido Entre 8 y 10 caracteres, por lo menos un digito y un alfanumérico, y no puede contener caracteres espaciales')
        return 0; //no submit
    }
    //el formulario se envia usando el método submit() activándolo desde aquí
    alert("Bienvenido");
    document.Flogin2.submit();
}


function validapacientes() {
    
    var t = document.fpaciente.codigo.value;
    var er_tlfono = /^([0-9\s\+\-]{3})+$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if (!er_tlfono.test(t)) {
        alert('Solo se acepta 3 digitos numericos.')
        return 0; //no submit
    }

    if (document.fpaciente.nombre.value.length == 0) {
        alert("Tiene que escribir su nombre");
        document.fpaciente.nombre.focus(); //ubica el cursor en la caja nombre
        return 0; //no avanza a commit
    }

    if (document.fpaciente.ap.value.length == 0) {
        alert("Tiene que escribir su apellido paterno");
        document.fpaciente.ap.focus(); //ubica el cursor en la caja nombre
        return 0; //no avanza a commit
    }

    if (document.fpaciente.am.value.length == 0) {
        alert("Tiene que escribir su apellido materno");
        document.fpaciente.am.focus(); //ubica el cursor en la caja nombre
        return 0; //no avanza a commit
    }

    var i = document.fpaciente.fn.value;
    var er_fecha = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if (!er_fecha.test(i)) {
        alert('Campo FECHA DE NACIMIENTO no es valido ejemplo 01/01/2010')
        return 0; //no submit
    }

    edad = document.fpaciente.edad.value;
    edad = validarEntero(edad);
    document.fpaciente.edad.value = edad;
    if (edad == "") {
        alert("Tiene que introducir un número entero.")
        document.fpaciente.edad.focus();
        return 0;
    } 

    function validarEntero(valor) {
        /* Mediante parseInt intentaremos transformar el valor a número entero.
        Si el dato fue ingresado bien y ya lo era, no hará nada */
        valor = parseInt(valor)
        /* Se comprobará si el valor es un número */
        if (isNaN(valor)) {
            /* Si no lo es, se devuelve una cadena vacía */
            return "";
        } else {
            /* De lo contrario se devuelve el número */
            return valor;
        }
    }
    var is = document.fpaciente.peso.value;
    var er_fecha = /^\d{1,2}\.\d{1,2}$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if (!er_fecha.test(is)) {
        alert('Se acepta peso hasta 99.99 Ej. 10.50')
        return 0; //no submit
    }

    if (document.fpaciente.alergias.value.length == 0) {
        alert("Tiene que llenar este campo");
        document.fpaciente.alergias.focus(); //ubica el cursor en la caja nombre
        return 0; //no avanza a commit
    }
    
    //el formulario se envia usando el método submit() activándolo desde aquí
    alert("Formulario Correcto")
    document.fpaciente.submit();
}


function validamedicamentos() {
    
    var t = document.fmedicamento.codigo.value;
    var er_tlfono = /^([0-9\s\+\-]{3})+$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if (!er_tlfono.test(t)) {
        alert('Solo se acepta 3 digitos numericos.')
        return 0; //no submit
    }

    if (document.fmedicamento.medicamento.value.length == 0) {
        alert("Tiene que escribir la marca del medicamento");
        document.fmedicamento.medicamento.focus(); //ubica el cursor en la caja nombre
        return 0; //no avanza a commit
    }

    if (document.fmedicamento.formula.value.length == 0) {
        alert("Tiene que escribir el nombre del medicamento");
        document.fmedicamento.formula.focus(); //ubica el cursor en la caja nombre
        return 0; //no avanza a commit
    }
    var x = document.fmedicamento.unidad.value;
    var er_unidad = /^([A-Za-z1-9./ ]){1,15}$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if (!er_unidad.test(x)) {
        alert('Debe de llenar este campo')
        return 0; //no submit
    }
    


    if (document.fmedicamento.presentacion.value.length == 0) {
        alert("Tiene que escribir la presentacion del medicamento");
        document.fmedicamento.presentacion.focus(); //ubica el cursor en la caja nombre
        return 0; //no avanza a commit
    }

    var i = document.fmedicamento.fc.value;
    var er_fecha = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if (!er_fecha.test(i)) {
        alert('Campo FECHA DE NACIMIENTO no es valido ejemplo 01/01/2010')
        return 0; //no submit
    }
    
    
    //el formulario se envia usando el método submit() activándolo desde aquí
    alert("Formulario Correcto")
    document.fmedicamento.submit();
}

function validareceta() {
    
    var t = document.frecetas.codigo.value;
    var er_tlfono = /^([0-9\s\+\-]{3})+$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if (!er_tlfono.test(t)) {
        alert('Solo se acepta 3 digitos numericos.')
        return 0; //no submit
    }

    if (document.frecetas.np.value.length == 0) {
        alert("Tiene que escribir nombre del paciente");
        document.frecetas.np.focus(); //ubica el cursor en la caja nombre
        return 0; //no avanza a commit
    }

    if (document.frecetas.nd.value.length == 0) {
        alert("Tiene que escribir nombre del doctor");
        document.frecetas.nd.focus(); //ubica el cursor en la caja nombre
        return 0; //no avanza a commit
    }

    var i = document.frecetas.f.value;
    var er_fecha = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if (!er_fecha.test(i)) {
        alert('Campo FECHA no es valido ejemplo 01/01/2010')
        return 0; //no submit
    }

    var x = document.frecetas.descripcion.value;
    var er_unidad =/^([A-Za-z1-9./ ]){1,200}$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if (!er_unidad.test(x)) {
        alert('Debe de llenar este campo')
        return 0; //no submit
    }

    
    //el formulario se envia usando el método submit() activándolo desde aquí
    alert("Formulario Correcto")
    document.frecetas.submit();
}

function validacitas() {
    
    var t = document.fcita.codigo.value;
    var er_tlfono = /^([0-9\s\+\-]{3})+$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if (!er_tlfono.test(t)) {
        alert('Solo se acepta 3 digitos numericos.')
        return 0; //no submit
    }

    var i = document.fcita.f.value;
    var er_fecha = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if (!er_fecha.test(i)) {
        alert('Campo FECHA no es valido ejemplo 01/01/2010')
        return 0; //no submit
    }

    var i = document.fcita.h.value;
    var er_fecha = /^\d{1,2}\:\d{1,2}$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if (!er_fecha.test(i)) {
        alert('Campo HORA no es valido ejemplo 11:32')
        return 0; //no submit
    }

    var x = document.fcita.l.value;
    var er_unidad =/^([A-Za-z1-9./ ]){1,200}$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if (!er_unidad.test(x)) {
        alert('Debe de llenar el campo LUGAR')
        return 0; //no submit
    }

    
    //el formulario se envia usando el método submit() activándolo desde aquí
    alert("Formulario Correcto")
    document.frecetas.submit();
}


function validaregistro() {

    var s = document.fregistro.e.value;
    var filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filtro.test(s)) {
        alert('Introduzca un email válido');
        document.fregistro.e.focus();
        return 0;
    }

    var h = document.fregistro.c.value;
    var er_contrase = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if (!er_contrase.test(h)) {
        alert('Campo CONTRASEÑA no es valido Entre 8 y 10 caracteres, por lo menos un digito y un alfanumérico, y no puede contener caracteres espaciales')
        return 0; //no submit
    }

    
    if (document.fregistro.n.value.length == 0) {
        alert("Tiene que escribir su nombre");
        document.fregistro.n.focus(); //ubica el cursor en la caja nombre
        return 0; //no avanza a commit
    }

    if (document.fregistro.a.value.length == 0) {
        alert("Tiene que escribir su apellido");
        document.fregistro.a.focus(); //ubica el cursor en la caja nombre
        return 0; //no avanza a commit
    }

    var h = document.fregistro.c1.value;
    var er_contrase = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if (!er_contrase.test(h)) {
        alert('Campo CONTRASEÑA no es valido Entre 8 y 10 caracteres, por lo menos un digito y un alfanumérico, y no puede contener caracteres espaciales')
        return 0; //no submit
    }

    if (document.fregistro.p1.value.length == 0) {
        alert("Tiene que escribir alguna pista");
        document.fregistro.p1.focus(); //ubica el cursor en la caja nombre
        return 0; //no avanza a commit
    }

    if (document.fregistro.p2.value.length == 0) {
        alert("Tiene que escribir alguna pista");
        document.fregistro.p2.focus(); //ubica el cursor en la caja nombre
        return 0; //no avanza a commit
    }
    //el formulario se envia usando el método submit() activándolo desde aquí
    alert("Bienvenido");
    document.Flogin2.submit();
}