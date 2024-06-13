const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/database'); 
const gatosRoutes = require('./routes/gatos.routes');
const imagesRoutes = require('./routes/imagenes.routes');
const usuariosRoutes = require('./routes/usuarios.routes');



//Middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));

//settings
app.set('port', process.env.PORT || 3000)

//Rutas
app.use('/v1/breeds', gatosRoutes);
app.use('/v1/imagesbybreedid', imagesRoutes);
app.use('/v1/', usuariosRoutes);


// Iniciar la conexión a la base de datos
connectDB().then(() => {
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto : ', app.get('port'));
})
});