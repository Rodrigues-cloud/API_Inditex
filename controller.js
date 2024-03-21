const pool = require('../../db');
const queries = require('./queries');

//Ruta que busca prereparto acordes a la regla de negocio de la tienda online.
const getPeticiones = (req, res) =>{
    pool.query(queries.getPeticiones, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

//Ruta que busca prerepartos por tienda_id .
const getPeticionesById = (req, res) => {
    const tienda_id = parseInt(req.params.id);
    pool.query(queries.getPeticionesById, [tienda_id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);    
    })
};

//Ruta que busca prerepartos y crea peticiones acordes a la regla de negocio de la tienda online.
const addPeticiones = (req, res) => {
    pool.query(queries.getPeticiones, (error, results) => {
        if (error) throw error;
        if (results.rows.length > 0) {
            results.rows.map((item) => {
                let estado_stock;
                if(item.propuesta > item.stock_em05){
                    estado_stock = 1;
                } else {
                    estado_stock = 5;
                }
                const peticiones = {
                    key: item.key,
                    tienda_id: item.tienda_id,
                    propuesta: item.propuesta,
                    tipo_stock_desc: item.tipo_stock_desc,
                    estado_stock: estado_stock,
                    posicion_completa: item.posicion_completa
                };

                pool.query(queries.addPeticiones, [peticiones.key, peticiones.tienda_id, peticiones.propuesta, peticiones.tipo_stock_desc, peticiones.estado_stock, peticiones.posicion_completa ], (error) => {
                    if(error) {
                        console.error("Error ao adicionar peticiones: ", error);
                    }else {
                        console.log("Peticiones creada con éxito!");
                    }
                });
            });
        }
        res.status(201).send("Peticiones creados exitosamente!"); // Enviar la respuesta una vez completadas todas las inserciones
    });

}

module.exports = {
    getPeticiones,
    getPeticionesById,
    addPeticiones,
}