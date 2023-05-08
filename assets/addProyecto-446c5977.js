import { P as Proyecto } from "./proyectos-dadd224c.js";
import "./main-187bd500.js";
const addProyecto = {
  template: `<div class="container h-100" style="background-color:#77B7E1">
  <div class="row justify-content-center align-items-center h-100">
    <div class="col-md-4">
      <div class="card">
        <div class="card-body"><form id="form-id">
        <h2 class="mb-3">Añadir Proyecto </h2>
    <div class="m-3">
      <label class="form-label">Nombre:</label>
      <input type="text" class="form-control" id="nombre-id">    
    </div>
    <div class="m-3">
      <label  class="form-label">Descripcion:</label>
      <input type="text" class="form-control" id="descripcion-id"">
    
    </div>
    <div class="m-3"
      <label class="form-label">Nota:</label>
      <input type="text" class="form-control" id="nota-id">
    </div>
    <div class="m-3">
      <label  class="form-label">Enlace</label>
      <input type="text" class="form-control" id="enlace-id" >
    </div>
    <div class="m-3">
      <label for="form-label" class="form-label">Activo:</label>
      <input type="text" class="form-control" id="activo-id" >
    </div>
    
    <button type="submit" class="btn btn-primary m-3">Añadir</button>
  </form></div></div></div></div></div>`,
  async script() {
    const main = document.querySelector("main");
    main.style.backgroundColor = "#77B7E1";
    main.style.height = "1000px";
    const form = document.querySelector("#form-id");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form2 = document.querySelector("form");
      const nombre = form2.querySelector("#nombre-id");
      const descripcion = form2.querySelector("#descripcion-id");
      const nota = form2.querySelector("#nota-id");
      const enlace = form2.querySelector("#enlace-id");
      const activo = form2.querySelector("#activo-id");
      const dataP = {
        nombre: nombre.value,
        descripcion: descripcion.value,
        nota: nota.value,
        enlace: enlace.value,
        activo: activo.value
      };
      await Proyecto.create(dataP);
      window.location = "#/homeproyectos";
    });
  }
};
export {
  addProyecto as default
};
