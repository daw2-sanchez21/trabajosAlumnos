export const menuSuperior = {
  template: `
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul id="menuSuperior" class="navbar-nav">
      
        </ul>
      </div>
    `,
  script: (perfilLogueado) => {
    const items = {
      anonimo: `
        
        `,
      registrado: `
        <li class="nav-item">
          <a class="nav-link" href="#/proyectos">Crear Proyecto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/homeproyectos">Crud</a>
        </li>
        <li><hr /></li>
        `,
      alumno: `
        <li class="nav-item">
          <a class="nav-link" href="#/proyectos">Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/recursos">Recursos</a>
        </li>
        <li><hr /></li>
        <li class="nav-item">
          <a class="nav-link" href="#/adminUsuarios">Admin</a>
        </li>
        `,
      profesor: `
        <li class="nav-item">
          <a class="nav-link" href="#/proyectos">Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/recursos">Recursos</a>
        </li>
        <li><hr /></li>
        <li class="nav-item">
          <a class="nav-link" href="#/adminUsuarios">Admin</a>
        </li>
        `,
      admin: `
        <li class="nav-item">
          <a class="nav-link" href="#/proyectos">Crear Proyecto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/homeproyectos">Crud</a>
        </li>
        <li><hr /></li>
        `
    }
    if (perfilLogueado !== 'anonimo') {
      const rol = perfilLogueado.rol
      // Insertamos los items del menú según el rol
      document.querySelector('#menuSuperior').innerHTML = items[rol]
    } else {
      document.querySelector('#menuSuperior').innerHTML = items.anonimo
    }
  }
}
