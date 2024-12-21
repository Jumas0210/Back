import connection from "../config/dbClient.js";

class ProductModel {
  
  async create(product) {
    const query = "INSERT INTO productos (name, description, price, image) VALUES (?, ?, ?, ?)";
  
    try {
      const [result] = await connection.execute(query, [
        product.name,        
        product.description, 
        product.price,       
        product.image        
      ]);
      return result; 
    } catch (error) {
      throw new Error(`Error al guardar el producto: ${error.message}`);
    }
  }
  


  async getAll() {
    const query = "SELECT * FROM productos ORDER BY id DESC";

    try {
      const [rows] = await connection.query(query); 
      return rows; 
    } catch (error) {
      throw new Error(`Error al obtener los productos: ${error.message}`); 
    }
  }

  async getOne(id) {
    const query = "SELECT * FROM productos WHERE id = ?";

    try {
      const [rows] = await connection.query(query, [id]); 
      return rows; 
    } catch (error) {
      throw new Error(`Error al obtener los productos: ${error.message}`); 
    }
  }

  async  update(id, product) {
    const query = "UPDATE productos SET name = ?, description = ?, price = ?, image = ? WHERE id = ?";

    try {
      const [rows] = await connection.execute(query,  [
        product.name,        
        product.description, 
        product.price,       
        product.image        
      ].concat(id)); 
      return rows; 
    } catch (error) {
      throw new Error(`Error al obtener los productos: ${error.message}`); 
    }
  }


  async  delete(id) {
    const query = "DELETE FROM productos WHERE id = ?";

    try {
      const [rows] = await connection.query(query, [id]); 
      return rows; 
    } catch (error) {
      throw new Error(`Error al obtener los productos: ${error.message}`); 
    }
  }
}

export default new ProductModel();
