import { Perfil } from './perfiles'
import { Proyecto } from './proyectos'
export const newprueba = {
  template: '<h1>Header</h1>',
  script: async () => {
    async function mostrarPerfiles () {
      const perfiles = await Perfil.getAll()
      console.log(perfiles)
    }
    mostrarPerfiles()
    async function obtenerById () {
      const perfiles = await Perfil.getById(1)
      console.log(perfiles)
    }
    obtenerById()
    // Datos para el nuevo perfil
    const ArrayPerfil = [
      {
        nombre: 'carrebola212',
        apellidos: 'Yo mismo 21',
        rol: 'admin'
      }
    ]
    // async function create () {
    //  const perfiles = await Perfil.create(ArrayPerfil[0])
    // console.log(perfiles)
    // }
    // create()

    // const perfilUpdate = new Perfil()
    // await perfilUpdate.update()
    async function mostrarProyectos () {
      const proyectos = await Proyecto.getAllProyectos()
      console.log(proyectos)
    }
    mostrarProyectos()
  }
}
