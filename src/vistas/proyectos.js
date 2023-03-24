// Importamos la conexión a la base de datos
import { supabase } from './supabase.js'
export class Proyecto {
  // Mapping de propiedades de la tabla perfiles
  constructor (id = null, created_at = null, nombre = null, descripcion = null, usuario_id = null) {
    this.id = id
    this.created_at = created_at
    this.nombre = nombre
    this.descripcion = descripcion
    this.usuario_id = usuario_id
  }

  // leer todos
  static async getAllProyectos () {
    const { data: proyectos, error } = await supabase
      .from('proyectos')
      .select('*')
    if (error) {
      throw new Error(error.message)
    }
    // devuelve array de objetos
    return proyectos.map(({ id, nombre, descripcion, usuario_id }) => {
      return new Proyecto(id, nombre, descripcion, usuario_id)
    })
  }
}
