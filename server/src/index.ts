import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session'; // Middleware para sesiones
import passport from './config/passport'; // Configuración de Passport
import authRoutes from './routes/auth'; // Rutas de autenticación

// Configurar variables de entorno
dotenv.config();

// Crear instancia de Express
const app = express();

// Configurar sesiones
app.use(
    session({
        secret: 'mi-super-clave-secreta', // Cambia esto por una clave segura en producción
        resave: false, // No volver a guardar si no hay cambios en la sesión
        saveUninitialized: false, // No guardar sesiones vacías
        cookie: {
            secure: false, // Usa `true` si estás usando HTTPS
            maxAge: 24 * 60 * 60 * 1000, // Duración de la sesión: 1 día
        },
    })
);

// Middlewares
app.use(express.json()); // Habilitar parseo de JSON
app.use(passport.initialize()); // Inicializar Passport
app.use(passport.session()); // Habilitar manejo de sesiones en Passport

// Ruta básica para verificar que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente 🚀');
});

// Usar las rutas de autenticación
app.use('/api/auth', authRoutes); // Rutas bajo el prefijo "/api/auth"

// Configuración del puerto
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});