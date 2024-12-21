import productsModel from "../models/productsModel.js";
import productSchema from "../schemas/products.js";

class ProductController {
  async create(req, res) {
    const datos = req.body;
    console.log("Datos recibidos en el backend:", datos);
    try {
      const validatedData = await productSchema.validate(datos); 
      const result = await productsModel.create(validatedData); 
      res.status(201).json({
        message: "Producto guardado con éxito",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        message: "Error al crear el producto",
        error: error.message,
      });
    }
  }

  async getAll(req, res){ 
    try {
        const result = await productsModel.getAll();
        res.status(200).json({
            message : "Productos consultados con exito",
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            message: "Error al traer los productos",
            error: error.message,
        })
    }
  }

  async getOne(req, res){ 
    const {id} = req.params

    try {
        const result = await productsModel.getOne(id);

        if (result.length > 0) {
            res.status(200).json({
                message : "Productos consultados con exito",
                data: result,
            }) 
        } else {
            res.status(404).json({
                message : "Producto no encontrado"
            })
        }

    } catch (error) {
        res.status(400).json({
            message: "Error al traer el producto",
            error: error.message,
        })
    }
  }

  async update(req, res) {
    const datos = req.body;
    const {id} = req.params;
    try {
      const validatedData = await productSchema.validate(datos); 
      const result = await productsModel.update(id, validatedData); 
      res.status(201).json({
        message: "Producto actualizado con éxito",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        message: "Error al actualizar el producto",
        error: error.message,
      });
    }
  }

  async delete(req, res){ 
    const {id} = req.params

    try {
        const result = await productsModel.delete(id);
        res.status(200).json({
            message : "Producto eliminado con exito",
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            message: "Error al eliminar producto",
            error: error.message,
        })
    }
  }

}

export default new ProductController();
