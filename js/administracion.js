function cargarTablaAdminProd() {
    // Localizamos la zona de la pantalla donde pondremos la tabla
    const contenedor = document.getElementById("contenido-principal");

    if (!contenedor) {
        console.error("No se encontró el contenedor 'contenido-principal' en el HTML.");
        return;
    }

    // Intentamos obtener la lista del almacenamiento del navegador.
    // Si es la primera vez que se entra, tomamos el arreglo 'productos'.
    let datosProductos = JSON.parse(localStorage.getItem("productos"));

    if (!datosProductos && typeof productos !== "undefined") {
        datosProductos = productos;
        // Guardamos copia en el navegador
        localStorage.setItem("productos", JSON.stringify(productos));
    }

    // Si aún no hay datos disponibles, inicializamos una lista vacía
    if (!datosProductos) {
        datosProductos = [];
    }

    // Construcción del bloque HTML de las filas
    let filas = "";

    if (datosProductos.length === 0) {
        filas = `<tr><td colspan="3" class="text-center">No hay productos disponibles.</td></tr>`;
    } else {
        datosProductos.forEach(item => {
            filas += `
                <tr>
                    <td class="fw-bold ps-3">${item.id}</td>
                    <td>${item.nombre}</td>
                    <td class="text-end pe-3">$${item.precio.toLocaleString("es-CL")}</td>
                </tr>
            `;
        });
    }

    // 4. Inyección de Bootstrap dentro del contenedor
    contenedor.innerHTML = `
        <div class="container-fluid">
            <h3 class="mb-4 text-dark">Gestión de Productos</h3>

            <div class="border border-secondary rounded" style="max-height: 700px; overflow-y: auto;">
                <table class="table table-dark table-striped table-hover align-middle mb-0 text-start">
                    <thead style="position: sticky; top: 0; z-index: 2;" class="table-dark border-bottom border-secondary">
                        <tr>
                            <th scope="col" class="py-3 ps-3" style="width: 10%;">#</th>
                            <th scope="col" class="py-3" style="width: 60%;">Nombre</th>
                            <th scope="col" class="py-3 text-end pe-3" style="width: 30%;">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filas}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function cargarTablaAdminUsers() {
    // Localizamos la zona de la pantalla donde pondremos la tabla
    const contenedor = document.getElementById("contenido-principal");

    if (!contenedor) {
        console.error("No se encontró el contenedor 'contenido-principal' en el HTML.");
        return;
    }

    // Intentamos obtener la lista del almacenamiento del navegador.
    // Si es la primera vez que se entra, tomamos el arreglo 'usuarios'.
    let datosUsuarios = JSON.parse(localStorage.getItem("usuarios"));

    if (!datosUsuarios || datosUsuarios.length === 0) {
        datosUsuarios = [
            {
                id: 1,
                nombre_usuario: "Usuario Prueba",
                correo: "usuarioPrueba@gmail.com",
                contraseña: "123"
            },
            {
                id: 2,
                nombre_usuario: "Camila Silva",
                correo: "csilva@gmail.com",
                contraseña: "passCamila123"
            },
            {
                id: 3,
                nombre_usuario: "Matías Rojas",
                correo: "mrojas@duocuc.cl",
                contraseña: "claveMati2026"
            },
            {
                id: 4,
                nombre_usuario: "Valentina Sepúlveda",
                correo: "vsepulveda@gmail.com",
                contraseña: "valenPassword456"
            },
            {
                id: 5,
                nombre_usuario: "Gonzalo Morales",
                correo: "gmorales@yahoo.com",
                contraseña: "gonzaPass789"
            }
        ];
        // Lo guardamos en localStorage para inicializarlo
        localStorage.setItem("usuarios", JSON.stringify(datosUsuarios));
    }

    // Construcción del bloque HTML de las filas
    let filas = "";

    datosUsuarios.forEach((user) => {
        filas += `
            <tr>
                <td class="fw-bold ps-3">${user.id}</td>
                <td>${user.nombre_usuario}</td>
                <td>${user.correo}</td>
                <td>${user.contraseña}</td>
                <td class="text-end pe-3">
                    <span class="badge bg-info text-dark">Cliente</span>
                </td>
            </tr>
        `;
    });

    // 4. Inyección de Bootstrap dentro del contenedor
    contenedor.innerHTML = `
        <div class="p-4 w-100">
            <h3 class="mb-3 text-dark">Gestión de Usuarios</h3>

            <div class="border border-secondary rounded shadow-sm" style="max-height: 300px; overflow-y: auto;">
                <table class="table table-dark table-striped table-hover align-middle mb-0 text-start">
                    <thead style="position: sticky; top: 0; z-index: 2;" class="table-dark border-bottom border-secondary">
                        <tr>
                            <th scope="col" class="py-3 ps-3" style="width: 10%;">#</th>
                            <th scope="col" class="py-3" style="width: 40%;">Usuario</th>
                            <th scope="col" class="py-3" style="width: 30%;">Correo</th>
                            <th scope="col" class="py-3" style="width: 10%;">Contraseña</th>
                            <th scope="col" class="py-3 text-end pe-3" style="width: 10%;">Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filas}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function cargarTablaAdministradores() {
    // Localizamos la zona de la pantalla donde pondremos la tabla
    const contenedor = document.getElementById("contenido-principal");

    if (!contenedor) {
        console.error("No se encontró el contenedor 'contenido-principal' en el HTML.");
        return;
    }

    // Intentamos obtener la lista del almacenamiento del navegador.
    // Si es la primera vez que se entra, tomamos el arreglo 'productos'.
    let admins = JSON.parse(localStorage.getItem("administradores"));

    if (!admins || admins.length === 0) {
        admins = [
            { id: 1, nombre_usuario: "SuperAdmin",
                correo: "admin@correo.com",
                contraseña: "admin123"
            },
            {
                id: 2,
                nombre_usuario: "adan_adm",
                correo: "ad.ramirezn@duocuc.cl",
                contraseña: "admin123"
            },
            {
                id: 3,
                nombre_usuario: "marcelo_adm",
                correo: "marc.gallardos@duocuc.cl",
                contraseña: "admin123"
            }
        ];
        // Lo guardamos en localStorage para inicializarlo
        localStorage.setItem("administradores", JSON.stringify(admins));
    }

    // Si aún no hay datos disponibles, inicializamos una lista vacía
    if (!admins) {
        admins = [];
    }

    // Construcción del bloque HTML de las filas
    let filas = "";

    admins.forEach(admin => {
        filas += `
            <tr>
                <td class="fw-bold ps-3">${admin.id}</td>
                <td>${admin.nombre_usuario}</td>
                <td>${admin.correo}</td>
                <td class="text-end pe-3">
                    <span class="badge bg-danger">Admin</span>
                </td>
            </tr>
        `;
    });

    // 4. Inyección de Bootstrap dentro del contenedor
    contenedor.innerHTML = `
        <div class="p-4 w-100 text-white">
            <h3 class="mb-4">Gestión de Administradores</h3>

            <div class="border border-secondary rounded shadow-sm mb-4" style="max-height: 250px; overflow-y: auto;">
                <table class="table table-dark table-striped table-hover align-middle mb-0 text-start">
                    <thead style="position: sticky; top: 0; z-index: 2;" class="table-dark border-bottom border-secondary">
                        <tr>
                            <th scope="col" class="py-3 ps-3" style="width: 15%;">#</th>
                            <th scope="col" class="py-3" style="width: 45%;">Usuario</th>
                            <th scope="col" class="py-3" style="width: 30%;">Correo</th>
                            <th scope="col" class="py-3 text-end pe-3" style="width: 10%;">Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filas}
                    </tbody>
                </table>
            </div>

            <div class="row align-items-center g-4">
                <div class="col-md-5">
                    <div class="card bg-dark text-white border-secondary p-3 shadow-sm">
                        <h5 class="card-title mb-3">Eliminar admin</h5>
                        <form id="form-eliminar-admin">
                            <div class="mb-3 d-flex align-items-center gap-2">
                                <label for="admin-id" class="form-label mb-0 fw-bold">id:</label>
                                <input type="number" id="admin-id" class="form-control bg-secondary text-white border-0" min="1" step="1" required>
                            </div>
                            <button type="submit" class="btn btn-outline-light w-100 rounded-pill">Eliminar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;

    const formEliminar = document.getElementById("form-eliminar-admin");
    formEliminar.addEventListener("submit", function(e){
        e.preventDefault();
        const idEliminar = parseInt(document.getElementById("admin-id").value);

        const index = admins.findIndex(a => a.id === idEliminar);
        if(index !== -1){
            admins.splice(index, 1);
            localStorage.setItem("administradores", JSON.stringify(admins));
            alert("Administrador con id ${idEliminar} eliminado correctamente");

            cargarTablaAdministradores();
        }else{
            alert("No se encontro ningun administrador con el id ${idEliminar}");
        }
    });
}