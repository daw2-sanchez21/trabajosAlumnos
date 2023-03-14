import { createClient } from '@supabase/supabase-js'

export const prueba = {
  template: '<h1>Prueba</h1>',
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
  }
}
