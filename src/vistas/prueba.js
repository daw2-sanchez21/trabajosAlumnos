import { createClient } from '@supabase/supabase-js'

export const prueba = {
  template: `<h1>Prueba</h1>
  <div class="container"><form id="form-id">
    <div class="mb-3">
    <label for="exampleInputName" class="form-label">Name</label>
    <input type="text" class="form-control" id="name-id">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email-id" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="password-id">
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form></div>`,
  script: async () => {
    console.log('Vista prueba cargada')
    // Conexión con supabsE
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mZ25yZmRrdHBxdG1zcnlpY3V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzY2NDYsImV4cCI6MTk5Mjc1MjY0Nn0.elSJPfs8I0ClHECe-DCIOyN-JboW1dgQCufDF5_QRfA'
    const supabaseUrl = 'https://ofgnrfdktpqtmsryicuz.supabase.co'

    // const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)
    console.log(supabase)

    const leerTodosPerfiles = async () => {
      // READ ALL ROWS
      const { data: perfiles, error } = await supabase
        .from('perfiles')
        .select('*')

      console.log(perfiles)
    }

    const agregarPerfil = async () => {
      // INSERT A ROW
      const { data, error } = await supabase
        .from('perfiles')
        .insert([
          { nombre: 'ejemplo' }
        ])
    }
    // await leerTodosPerfiles();
    // await agregarPerfil();
    // await leerTodosPerfiles();

    const leerProyectosDetalle = async () => {
      // INVOKE FUNCTION
      const { data, error } = await supabase
        .rpc('proyectodetalle')

      if (error) console.error(error)
      else console.log('proyectos con detalle: ', data)
    }
    leerProyectosDetalle()

    const formUser = document.querySelector('#form-id')
    formUser.addEventListener('submit', async (e) => {
      e.preventDefault()
      const emailID = document.getElementById('email-id')
      const pswID = document.getElementById('password-id')
      const nameID = document.getElementById('name-id')
      console.log(nameID.value)
      console.log(emailID.value)
      console.log(pswID.value)

      const { data, error } = await supabase.auth.signUp({
        email: `${emailID.value}`,
        password: `${pswID.value}`
      })
      if (error) {
        console.log(error)
      } else { console.log('Usuario creado') }
      const { data2, error2 } = await supabase
        .from('perfiles')
        .insert([
          { nombre: `${nameID.value}` }
        ])
      if (error) {
        console.log(error)
      } else { console.log('Nombre Insertado') }
    })
    // FIN LISTENER FORMULARIO
    // Mostrar query de supa base
    const mostrarComentarios = async () => {
      const { data, error } = await supabase
        .rpc('selectComentarios')

      if (error) { console.error(error) } else { console.log(data) }
    }
    mostrarComentarios()
    // PREGUNTA 14 HACER QUERY FUNCTION
  }

}
