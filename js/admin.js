 // JQUERY Consultar base de datos y mostrar en una tabla

 $("#table-tab").click(function () {
    submitConsulta();
 });

 $(document).ready(function () {
    $("#productoForm").submit(function (event) {
        //cancels the form submission
        console.log("entro");
        event.preventDefault();
        submitFormInsert();
    });
});


//Base de datos #1

function submitFormInsert() {
    var comentario = $("#comentario").val();
    var object = {"comentario": comentario };

    console.log(object);

    fetch('http://localhost/HowToWeb/server/business/ProductoInsert.php', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
        },
         body: JSON.stringify(object),
         cache: 'no-cache'
    })
        .then(function (response) {
          console.log("entró");
         return response.text();
    })
        .then(function (data) {
                 if (data === "1") {
                     alert("Error al insertar");
              }
                 else {
                     alert("Comentario registrado");
              }submitConsulta();  
         })
         .catch(function(err){
             console.error(err);
         });  
         submitConsulta();        
}

function formSuccess(){
    alert("Datos almacenados");
}



function submitConsulta() {
    console.log("Entró a llamar");
    fetch('http://localhost/HowToWeb/server/business/ProductoConsulta.php',{
        method: 'GET',
        headers: {
           'Content-Type' :  'application/json'
    }

    }). then(response => response.json())
            .then(result=>{
                if (result.length > 0) {
                    cargarDatos (result);
                } else {
                    console.log(JSON.stringify(result));
                }
            })
            .catch(error => console.log('error: ' + error));
}


function cargarDatos (data) {
    var rows = "";
    $("#Tabla1 tr").remove();
    $("#Tabla1").append('<tr><td>  COMENTARIOS  </td>' +
        '<td>Actualizar</td>' +
        '<td>Eliminar</td>' +
        "</tr>"
        );
    for (x in data) {
    rows +=`<tr row_id= ${data[x].idProducto}>`;//

    var idDes="D"+data[x].idProducto;
    var idcomen="C"+data[x].idProducto;




    rows +=`<td><input type="text" id="${idcomen}" value="${data[x].comentario}" style="background-color:transparent; border:none;color: white;"></td>`
    rows +=`<td> <button type='button' onclick='submitFormUpdate(${data[x].idProducto});' class='btn btn-info'>Actualizar</td>`

    rows +=`<td> <button type='button' onclick='submitFormDelete(${data[x].idProducto});' class='btn btn-danger'>Eliminar</td>`
    }
    $("#Tabla1").append(rows);
}

function submitFormUpdate(idProducto) {
    idDes = "#D"+idProducto;
    idcomen = "#C"+idProducto;

    var descripcion = $(idDes).val();
    var comentario = $(idcomen).val();

    var object = {"descripcion": descripcion, "comentario": comentario, "idProducto":idProducto};

    console.log(object);
    fetch('http://localhost/HowToWeb/server/business/ProductoUpdate.php',{
        method: 'PUT',
        headers: {
           'Content-Type' :  'application/json'
        },
        body: JSON.stringify(object),
        cache: 'no-cache'
   })
       .then(function (response) {
         console.log("entró");
        return response.text();
   })
       .then(function (data) {
                if (data == " 1") {
                    formSucces("Error al actualizar");
             }
                else {
                    alert("Comentario actualizado");
             }
        })
        .catch(function(err){
            console.error(err);
        });        
}

function submitFormDelete(idProducto) {
    console.log(idProducto);
    var object={"idProducto": idProducto};
    fetch('http://localhost/HowToWeb/server/business/ProductoDelete.php',{
        method: 'DELETE',
        headers: {
           'Content-Type' :  'application/json'
        },
        body: JSON.stringify(object),
        cache: 'no-cache'
   })
       .then(function (data) {
                if (data === "1") {
                    formSucces("Error al eliminar");
             }
                else {
                    alert("Comentario eliminado");
             }submitConsulta();  
        })
        .catch(function(err){
            console.error(err);
        });    
        submitConsulta();    
}


//Base de datos #2

$("#table-tab").click(function () {
    submitConsulta1();
 });

 $(document).ready(function () {
    $("#productoForm1").submit(function (event) {
        //cancels the form submission
        console.log("entro");
        event.preventDefault();
        submitFormInsert1();
    });
});
function submitFormInsert1() {
    var comentario = $("#comentario").val();
    var object = {"comentario": comentario };

    console.log(object);

    fetch('http://localhost/HowToWeb/server/business1/ProductoInsert1.php', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
        },
         body: JSON.stringify(object),
         cache: 'no-cache'
    })
        .then(function (response) {
          console.log("entró");
         return response.text();
    })
        .then(function (data) {
                 if (data === "1") {
                     alert("Error al insertar");
              }
                 else {
                     alert("Comentario registrado");
              }submitConsulta1();  
         })
         .catch(function(err){
             console.error(err);
         });  
         submitConsulta1();        
}

function formSuccess1(){
    alert("Datos almacenados");
}



function submitConsulta1() {
    console.log("Entró a llamar");
    fetch('http://localhost/HowToWeb/server/business1/ProductoConsulta1.php',{
        method: 'GET',
        headers: {
           'Content-Type' :  'application/json'
    }

    }). then(response => response.json())
            .then(result=>{
                if (result.length > 0) {
                    cargarDatos1 (result);
                } else {
                    console.log(JSON.stringify(result));
                }
            })
            .catch(error => console.log('error: ' + error));
}


function cargarDatos1 (data) {
    var rows = "";
    $("#dataTable1 tr").remove();
    $("#dataTable1").append('<tr><td>  COMENTARIOS  </td>' +
        '<td>Actualizar</td>' +
        '<td>Eliminar</td>' +
        "</tr>"
        );
    for (x in data) {
    rows +=`<tr row_id= ${data[x].idProducto}>`;//

    var idDes="D"+data[x].idProducto;
    var idcomen="C"+data[x].idProducto;




    rows +=`<td><input type="text" id="${idcomen}" value="${data[x].comentario}" style="background-color:transparent; border:none;color: white;"></td>`
    rows +=`<td> <button type='button' onclick='submitFormUpdate1(${data[x].idProducto});' class='btn btn-info'>Actualizar</td>`

    rows +=`<td> <button type='button' onclick='submitFormDelete1(${data[x].idProducto});' class='btn btn-danger'>Eliminar</td>`
    }
    $("#dataTable1").append(rows);
}

function submitFormUpdate1(idProducto) {
    idDes = "#D"+idProducto;
    idcomen = "#C"+idProducto;

    var descripcion = $(idDes).val();
    var comentario = $(idcomen).val();

    var object = {"descripcion": descripcion, "comentario": comentario, "idProducto":idProducto};

    console.log(object);
    fetch('http://localhost/HowToWeb/server/business1/ProductoUpdate1.php',{
        method: 'PUT',
        headers: {
           'Content-Type' :  'application/json'
        },
        body: JSON.stringify(object),
        cache: 'no-cache'
   })
       .then(function (response) {
         console.log("entró");
        return response.text();
   })
       .then(function (data) {
                if (data == " 1") {
                    formSucces("Error al actualizar");
             }
                else {
                    alert("Comentario actualizado");
             }
        })
        .catch(function(err){
            console.error(err);
        });        
}

function submitFormDelete1(idProducto) {
    console.log(idProducto);
    var object={"idProducto": idProducto};
    fetch('http://localhost/HowToWeb/server/business1/ProductoDelete1.php',{
        method: 'DELETE',
        headers: {
           'Content-Type' :  'application/json'
        },
        body: JSON.stringify(object),
        cache: 'no-cache'
   })
       .then(function (data) {
                if (data === "1") {
                    formSucces("Error al eliminar");
             }
                else {
                    alert("Comentario eliminado");
             }submitConsulta1();  
        })
        .catch(function(err){
            console.error(err);
        });    
        submitConsulta1();    
}