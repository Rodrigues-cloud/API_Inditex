const getPeticiones = "SELECT * FROM prereparto AS p JOIN stock AS s ON p.key = s.key WHERE p.grupo_localizacion_desc IN ('CICLO 2 GRUPO A2', 'CICLO 1 GRUPO B', 'CICLO 1 GRUPO A2') AND p.es_ecommerce = 1 AND (s.tipo_stock_desc = 'ZAR'OR (s.tipo_stock_desc = 'MSR' AND NOT EXISTS (SELECT 1 FROM stock WHERE tipo_stock_desc = 'ZAR')) OR (s.tipo_stock_desc = 'SILO' AND NOT EXISTS (SELECT 1 FROM stock WHERE tipo_stock_desc IN ('ZAR', 'MSR'))))";
const getPeticionesById = "SELECT * FROM prereparto WHERE tienda_id = $1";
const addPeticiones = "INSERT INTO peticiones(key, tienda_id, propuesta, tipo_stock_desc, estado_stock, posicion_completa) VALUES ($1, $2, $3, $4, $5, $6)";

module.exports = {
    getPeticiones,
    getPeticionesById,
    addPeticiones
}