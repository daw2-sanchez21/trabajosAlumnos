// Importamos la conexión a la base de datos
import { supabase } from './supabase.js'
export class Comentario {
  // Mapping de propiedades de la tabla perfiles
  constructor (id = null, created_at = null, comentario = null, usuario_id = null, proyecto_id = null) {
    this.id = id
    this.created_at = created_at
    this.comentario = comentario
    this.usuario_id = usuario_id
    this.proyecto_id = proyecto_id
  }

  // leer todos
  static async getAllComentarios () {
    const { data: proyectos, error } = await supabase
      .from('comentarios')
      .select('*')
    if (error) {
      throw new Error(error.message)
    }
    // devuelve array de objetos
    return proyectos.map(({ id, comentario, usuario_id, proyecto_id }) => {
      return new Comentario(id, comentario, usuario_id, proyecto_id)()
    })
  }

  // leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getById (id) {
    const { data: coment, error } = await supabase
      .from('comentarios')
      .select('*')
      .eq('id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    // Devuelve un nuevo objeto con los datos del registro
    return new Comentario(coment.id, coment.nombre, coment.user_id, coment.proyecto_id)
  }

  // leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getByProyectId (id) {
    const { data: coment, error } = await supabase
      .from('comentarios')
      .select('*')
      .eq('proyecto_id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    // Devuelve un nuevo objeto con los datos del registro
    return new Comentario(coment.id, coment.nombre, coment.usuario_id, coment.proyecto_id)
  }

  // leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getByUserId (id) {
    const { data: coment, error } = await supabase
      .from('comentarios')
      .select('*')
      .eq('usuario_id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    // Devuelve un nuevo objeto con los datos del registro
    return new Comentario(coment.id, coment.nombre, coment.usuario_id, coment.proyecto_id)
  }

  // borrar
  static async delete (id) {
    const { error } = await supabase
      .from('comentarios')
      .delete()
      .eq('id', id)
    if (error) {
      throw new Error(error.message)
    }
    return true
  }
}
