import { U as User, P as Perfil } from "./main-ca328654.js";
const registroVista = {
  template: `
    <div
    class="vh-100 d-flex align-items-center justify-content-center"
    style="padding-top: 100px"
  >
    <div class="col-12 col-md-4">
        <h1 class="text-center p-2">Registro</h1>
        <form id="form_registro" class="p-3" novalidate>
            <label class="mt-3 form-label" for="nombre">Nombre: </label>
            <input type="text" class="form-control" value="" id="nombre" placeholder ="Manolito" required />
            <div class="invalid-feedback">El nombre no es correcto</div>
  
            <label class="mt-3 form-label" for="apellidos">Apellidos: </label>
            <input type="text" class="form-control" value="" id="apellidos" placeholder = "Gafotas Rotas" required />
            <div class="invalid-feedback">Este campo no es correcto</div>
  
            <label class="mt-3 form-label">Email</label>
            <input
                type="email"
                class="form-control"
                value=""
                placeholder = "ychag@example.com"
                id="email"
                required
            />
            <div class="invalid-feedback">El email no es correcto</div>
  
            <label class="mt-3 form-label" >Contraseña: </label>
            <input
                type="password"
                class="form-control"
                value=""
                pattern="[A-Za-z0-9]"
                placeholder = "Contraseña"
                id="password"
                required
            />
  
            <div class="invalid-feedback">
                La contraseña debe contener 8 letras o más que deben ser mayusculas y minusculas, no se aceptan signos ni números
            </div>
  
            <button type="submit" class="mt-5 btn btn-success w-100">
                Enviar
            </button>
            <hr class="mt-5" />
            <button type="submit" class="mt-1 btn btn-primary w-100">
                Registrate con Google
            </button>
        </form>
    </div>
  </div>
      `,
  async script() {
    document.querySelector("#form_registro").addEventListener("submit", async function(e) {
      e.preventDefault();
      try {
        const usuario = {
          email: document.querySelector("#email").value,
          password: document.querySelector("#password").value
        };
        console.log(usuario.email.value);
        console.log(usuario.password.value);
        await User.create(usuario);
      } catch (error) {
        console.log(error);
        alert("Error al crear usuario");
      }
      try {
        const perfiles = {
          nombre: document.querySelector("#nombre").value,
          apellidos: document.querySelector("#apellidos").value,
          estado: "activo",
          rol: "registrado",
          email: document.querySelector("#email").value,
          avatar: "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
        };
        await Perfil.create(perfiles);
        window.location.href = "/#/login";
      } catch (error) {
        console.log(error);
        alert("Error al crear perfil");
      }
    });
  }
};
export {
  registroVista as default
};
