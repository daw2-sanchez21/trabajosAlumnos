import { Proyecto } from './proyectos.js'
// import { User } from './user.js'
export default {
  template: `
  <h1 class=" mt-5 pt-5 text-light">Proyectos</h1>
  <div class="container mt-5 pt-5">
 
  <table id="proyectos-tabla" class="table table-striped table-hover mt-5 align-middle">
  <thead id="tabla-id">
      <tr>
      <th>ID</th>
      <th>AUTOR</th>
      <th>NOMBRE</th>
      <th>DESCRIPCIÓN</th>
      <th>ENLACE</th>
      <th>NOTA</th>
      <th>ACTIVO</th>
      <th>ENUNCIADO</th>
      </tr>
  </thead>
  <tbody>
  </div>
        `,
  async script () {
    const main = document.querySelector('main')
    const tabla = document.querySelector('#proyectos-tabla')
    main.style.backgroundColor = '#FFFFFF'
    main.style.height = '1000px'

    const proyectoList = document.getElementById('tabla-id')
    // proyectoList.classList.add('row')
    const proyectos = await Proyecto.getAllProyectos()
    proyectos.forEach((proyecto) => {
      console.log(proyecto)
      const proyectoItem = document.createElement('tr')
      proyectoItem.innerHTML = `
      
      <th class="text-center">${proyecto.id}</th>
      <th class="text-center">${proyecto.autor}</th>
      <th class="text-center">${proyecto.nombre}</th>
      <th class="text-center">${proyecto.descripcion}</th>
      <th class="text-center"><a href="#" id="proyecto-${proyecto.id}">${proyecto.enlace}</a></th>
      <th class="text-center">${proyecto.nota}</th>
      <th class="text-center">${proyecto.activo}</th>
      <th class="text-center">${proyecto.enunciado}</th>
      <a href="#" class="btn" style="background-color:#00AF87;" id="eliminar-${proyecto.id}">Eliminar</a>
      `
      proyectoList.appendChild(proyectoItem)
    })
  }
}
