import { s as supabase } from "./main-ca328654.js";
class Proyecto {
  // Mapping de propiedades de la tabla perfiles
  constructor(id = null, created_at = null, nombre = null, descripcion = null, usuario_id = null, nota = null, enlace = null, activo = null) {
    this.id = id;
    this.created_at = created_at;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.usuario_id = usuario_id;
    this.nota = nota;
    this.enlace = enlace;
    this.activo = activo;
  }
  // leer todos
  static async getAllProyectos() {
    const { data: proyectos, error } = await supabase.from("proyectos").select("*");
    if (error) {
      throw new Error(error.message);
    }
    return proyectos.map(({ id, created_at, nombre, descripcion, usuario_id, nota, enlace, activo }) => {
      return new Proyecto(id, created_at, nombre, descripcion, usuario_id, nota, enlace, activo);
    });
  }
  // leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getById(id) {
    const { data: proyecto, error } = await supabase.from("proyectos").select("*").eq("id", id).single();
    if (error) {
      throw new Error(error.message);
    }
    return new Proyecto(proyecto.id, proyecto.nombre, proyecto.descripcion, proyecto.usuario_id, proyecto.nota, proyecto.enlace, proyecto.activo);
  }
  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async create(perfilData) {
    const { error } = await supabase.from("proyectos").insert(perfilData).select();
    if (error) {
      swal({ title: "No se ha podido añadir", text: `${error}`, icon: "warning" });
      throw new Error(error.message);
    }
    swal({ title: "Añadido correctamente", icon: "success" });
    return true;
  }
  // borrar
  static async delete(id) {
    const { error } = await supabase.from("proyectos").delete().match({ id: `${id}` });
    if (error) {
      swal({ title: "No se ha podido eliminar", text: `${error}`, icon: "warning" });
    } else {
      swal({ title: "Eliminado Correctamente", icon: "success" });
    }
  }
  static async updateLibro(dataProyecto) {
    const { data, error } = await supabase.from("proyectos").update({
      nombre: dataProyecto.nombre,
      descripcion: dataProyecto.descripcion,
      nota: dataProyecto.nota,
      enlace: dataProyecto.enlace,
      activo: dataProyecto.activo
    }).match({ id: `${dataProyecto.id}` });
    if (error) {
      swal({ title: "No se ha podido actualizar el proyecto", text: `${error}`, icon: "warning" });
    } else {
      swal({ title: "Actualizado", icon: "success" });
    }
  }
}
export {
  Proyecto as P
};
