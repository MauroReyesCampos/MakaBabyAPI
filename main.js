const express = require("express");
const cors = require("cors")

// importa la conexión con la BD
const { dbConnection } = require("./connections/connection");

// se guardan en la variable app todos los metodos de express
const app = express();

// creación de puerto
const port = 3000;

// importa la clase userRoute
const userRoute = require("./routes/userRoute");
const clientRoute = require("./routes/clientRoute");
// const commentRoute = require("./routes/commentRoute");

app.use(express.json());
app.use(cors({origin: '*'}));

// ruta para acceder a la información de la BD
app.use('/api/users', userRoute);
app.use('/api/clients', clientRoute);

dbConnection();

app.listen(port, () => {console.log("Server is running in http://localhost:" + port)});