import { User } from './user'
import { header } from '../componentes/header'
export default {
  template: `
    <div
    class="vh-100 d-flex align-items-center justify-content-center"
    style="padding-top: 100px"
  >
    <div class="col-12 col-md-4">
        <h1 class="text-center p-2">Login</h1>
        <form id="login" class="p-3" novalidate>
            <label class="mt-3 form-label" for="email">Email</label>
            <input type="email" class="form-control" id="email" value="" required />
            <div class="invalid-feedback">Debes introducir un email valido</div>
  
            <label class="mt-3 form-label" for="nick">Contraseña: </label>
            <input type="password" class="form-control" id="password" value="" required />
            <div class="invalid-feedback">Esta no es una contraseña correcta</div>
  
            <button
                id="btn_submit"
                type="submit"
                class="mt-4 btn btn-success w-100"
            >
                Enviar
            </button>
            <p class="mt-3">
                <a href="">No recuerdo mi contraseña</a>
                <br />
                <a href="registro.html">Quiero Registrarme</a>
            </p>
            <p></p>
            <hr class="mt-5" />
  
            <button type="button" class="mt-1 btn btn-primary w-100">
                Login con Google
            </button>
        </form>
    </div>
  </div>
  
    `,
  script: () => {
    // script para validación de formulario
    const form = document.querySelector('#login')
    form.addEventListener('submit', async (event) => {
      event.preventDefault()
      event.stopPropagation()
      // Verificamos validación del formulario
      form.classList.add('was-validated')
      if (!form.checkValidity()) {
        console.log('formulario no valido')
      } else {
        // Si los datos validan
        try {
          // Capturamos datos del formulario
          const userData = {
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value
          }
          // Intentamos loguearnos utilizando el método login de nuestra clase User
          const usuarioLogeado = await User.login(userData)
          console.log('UserData: ', usuarioLogeado.email)
          // Si nos logueamos con exito pintamos el email en header y menú de usuario
          const divUsuarioLogeado = document.querySelectorAll('.emailUsuarioLogueado')
          divUsuarioLogeado[0].innerHTML = usuarioLogeado.email
          divUsuarioLogeado[1].innerHTML = usuarioLogeado.email
          header.script()
          // y ocultamos item 'login' para mostrar item 'logout'
          document.querySelector('.liLogin').classList.add('d-none')
          // document.querySelector('.liLogout').classList.remove('d-none')
          header.script()
          // Cagamos la página home
          window.location.href = '/#/proyectos'
        } catch (error) {
          alert('No se ha podido iniciar sesión ' + error)
        }
      }
    })
  }

}
