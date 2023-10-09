
function menu(){
    var usuarios = new Map();
    do{
         var opcion=prompt("OPCIONES:\n\n1. Nuevo usuario.\n2. Eliminar usuario.\n3. Mostrar usuarios\n4. Salir\n\nEscoge una opción");
        switch (opcion){
            case "1": addUser(usuarios); break;
            case "2": borrarUsuario(usuarios); break;
            case "3": mostrarUsuarios(usuarios); break;
        }
    }
    while (opcion!="4")

}

function addUser(usuarios){
    var user = prompt("Introduce tu usuario");
    if(usuarios.has(user)){
        alert("Este usuario ya existe");
    }
    else{ 
        var passwd = prompt("Introduce tu contraseña");
        usuarios.set(user, passwd);
    }
    
}

function borrarUsuario(usuarios){
    let user = prompt("Que usuario quieres eliminar");
    usuarios.delete(user);
}

function mostrarUsuarios(usuarios){
    console.log(usuarios.entries());

}

menu();