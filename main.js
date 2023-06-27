const express = require("express");
const cors = require("cors")

// importa la conexión con la BD
const { dbConnection } = require("./connections/connection");

// se guardan en la variable app todos los metodos de express
const app = express();

// creación de puerto
const port = 3000;

// importa la clases
const userRoute = require("./routes/userRoute");
const clientRoute = require("./routes/clientRoute");
const saleRoute = require("./routes/saleRoute");
const detailRoute = require("./routes/detailRoute");

app.use(express.json());
app.use(cors({origin: '*'}));

// ruta para acceder a la información de la BD
app.use('/api/users', userRoute);
app.use('/api/clients', clientRoute);
app.use('/api/sales', saleRoute);
app.use('/api/details', detailRoute);

dbConnection();

app.listen(port, () => {console.log("Server is running in http://localhost:" + port)});