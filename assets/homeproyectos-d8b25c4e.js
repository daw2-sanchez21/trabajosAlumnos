import { P as Proyecto } from "./proyectos-dadd224c.js";
import "./main-187bd500.js";
const homeproyectos = {
  template: `
  
  <div class="container mt-5 pt-5">
  <h1 class=" mt-5 pt-5 text-dark">Proyectos</h1>
  <table id="proyectos-tabla" class="table table-striped table-hover mt-5 align-middle">
  <a href="#/add" class="btn mt-2"  style="background-color:#00AD1F; color:black; "id="add">Añadir</a>
  <thead id="tabla-id">
      <tr>
      <th>ID</th>
      <th>NOMBRE</th>
      <th>DESCRIPCIÓN</th>
      <th>ENLACE</th>
      <th>NOTA</th>
      <th>ACTIVO</th>
      </tr>
  </thead>
  <tbody>
  </div>
        `,
  async script() {
    const main = document.querySelector("main");
    document.querySelector("#proyectos-tabla");
    main.style.backgroundColor = "#FFFFFF";
    main.style.height = "1000px";
    const proyectoList = document.getElementById("tabla-id");
    const proyectos = await Proyecto.getAllProyectos();
    proyectos.forEach((proyecto) => {
      console.log(proyecto);
      const proyectoItem = document.createElement("tr");
      proyectoItem.innerHTML = `
      
      <th class="text-center">${proyecto.id}</th>
      <th class="text-center">${proyecto.nombre}</th>
      <th class="text-center">${proyecto.descripcion}</th>
      <th class="text-center"><a href="#" id="proyecto-${proyecto.id}">${proyecto.enlace}</a></th>
      <th class="text-center">${proyecto.nota}</th>
      <th class="text-center">${proyecto.activo}</th>
      <a href="#" class="btn m-1" style="background-color:#FF0000; color:black; " id="eliminar-${proyecto.id}">Eliminar</a>
      <a href="#" class="btn btn-warning"  style="background-color:#FFF700; color:black; "id="editar-${proyecto.id}">Editar</a>
      `;
      const libroReserva = proyectoItem.querySelector(`#eliminar-${proyecto.id}`);
      libroReserva.addEventListener("click", async (e) => {
        console.log("Boton eliminar");
        const libroReservaId = e.target.id;
        const libroId = libroReservaId.replace("eliminar-", "");
        swal("Desea eliminar el libro?", {
          buttons: ["Cancelar", "Confirmar"]
        }).then(async (value) => {
          if (value) {
            await Proyecto.delete(libroId);
            window.location = "#/homeproyectos";
          } else {
            swal({ title: "Cancelado", icon: "warning" });
          }
        });
      });
      proyectoList.appendChild(proyectoItem);
      const libroEdit = proyectoItem.querySelector(`#editar-${proyecto.id}`);
      libroEdit.addEventListener("click", async (e) => {
        const libroEditId = e.target.id;
        const EditId = libroEditId.replace("editar-", "");
        const guardarId = document.querySelector("#guardar-id");
        guardarId.value = EditId;
        window.location = "#/editar";
      });
    });
  }
};
export {
  homeproyectos as default
};
