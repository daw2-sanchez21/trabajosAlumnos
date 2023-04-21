// Importamos la conexión a la base de datos
import { supabase } from './supabase.js'
export class Proyecto {
  // Mapping de propiedades de la tabla perfiles
  constructor (id = null, created_at = null, nombre = null, descripcion = null, usuario_id = null, nota = null, enlace = null, activo = null) {
    this.id = id
    this.created_at = created_at
    this.nombre = nombre
    this.descripcion = descripcion
    this.usuario_id = usuario_id
    this.nota = nota
    this.enlace = enlace
    this.activo = activo
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
    return proyectos.map(({ id, nombre, descripcion, usuario_id, nota, enlace, activo }) => {
      return new Proyecto(id, nombre, descripcion, usuario_id, nota, enlace, activo)
    })
  }

  // leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getById (id) {
    const { data: proyecto, error } = await supabase
      .from('proyectos')
      .select('*')
      .eq('id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    // Devuelve un nuevo objeto con los datos del registro
    return new Proyecto(proyecto.id, proyecto.nombre, proyecto.descripcion, proyecto.usuario_id, proyecto.nota, proyecto.enlace, proyecto.activo)
  }

  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async create (perfilData) {
    const { error } = await supabase
      .from('proyectos')
      .insert(perfilData)
      .select()
      // console.log('nuevo perfil ',error);
    if (error) {
      throw new Error(error.message)
    }
    return true
  }

  // actualizar
  async update () {
    const { error } = await supabase
      .from('proyectos')
      .update({
        nombre: this.nombre,
        descripcion: this.descripcion
      })
      .eq('id', this.id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    return true
  }

  // borrar
  static async delete (id) {
    const { error } = await supabase
      .from('proyectos')
      .delete()
      .eq('id', id)
    if (error) {
      throw new Error(error.message)
    }
    return true
  }
}
