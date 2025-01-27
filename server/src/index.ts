import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session'; // Middleware para sesiones
import passport from './config/passport'; // Configuración de Passport
import authRoutes from './routes/auth'; // Rutas de autenticación

// Cargar variables de entorno desde .env
dotenv.config();

// Crear instancia de Express
const app = express();

// Verificar si las variables de entorno necesarias están configuradas
if (!process.env.SESSION_SECRET) {
  throw new Error('Falta configurar SESSION_SECRET en el archivo .env');
}

// Configurar sesiones
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Usa una variable de entorno para el secreto de la sesión
    resave: false, // No volver a guardar si no hay cambios en la sesión
    saveUninitialized: false, // No guardar sesiones vacías
    cookie: {
      secure: process.env.NODE_ENV === 'production', // Cookies seguras en producción
      httpOnly: true, // Proteger contra ataques XSS
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

// Manejo de errores 404 para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).send('Ruta no encontrada 🛑');
});

// Manejo de errores global (opcional)
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack); // Imprimir el error en la consola
  res.status(500).send('Algo salió mal 😢');
});

// Configuración del puerto
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});