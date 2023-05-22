import { U as User, h as header } from "./main-ca328654.js";
const loginVista = {
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
                <a href='/#/registro'>Quiero Registrarme</a>
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
    const form = document.querySelector("#login");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add("was-validated");
      if (!form.checkValidity()) {
        console.log("formulario no valido");
      } else {
        try {
          const userData = {
            email: document.querySelector("#email").value,
            password: document.querySelector("#password").value
          };
          const usuarioLogeado = await User.login(userData);
          console.log("UserData: ", usuarioLogeado.email);
          const divUsuarioLogeado = document.querySelectorAll(".emailUsuarioLogueado");
          divUsuarioLogeado[0].innerHTML = usuarioLogeado.email;
          divUsuarioLogeado[1].innerHTML = usuarioLogeado.email;
          header.script();
          document.querySelector(".liLogin").classList.add("d-none");
          header.script();
          window.location.href = "/#/proyectos";
        } catch (error) {
          alert("No se ha podido iniciar sesión " + error);
        }
      }
    });
  }
};
export {
  loginVista as default
};
