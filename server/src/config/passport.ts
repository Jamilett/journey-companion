import passport from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import { Usuario } from '../models/usuario'; // Ajusta la ruta según la estructura real

dotenv.config(); // Cargar variables de entorno

// Depuración: Verifica que las variables de entorno están cargadas
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.GOOGLE_CALLBACK_URL) {
  throw new Error('Faltan variables de entorno para configurar Google OAuth');
}

console.log('Variables de entorno cargadas correctamente');

// Configuración de la estrategia de Google
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: (error: any, user?: any) => void
    ) => {
      try {
        console.log('Profile recibido:', profile); // Depuración

        // Buscar al usuario en la base de datos por email
        const email = profile.emails?.[0]?.value;
        if (!email) {
          throw new Error('El perfil de Google no contiene un email válido');
        }

        let usuario = await Usuario.findOne({ where: { email } });

        if (!usuario) {
          // Crear al usuario si no existe
          usuario = await Usuario.create({
            nombre: profile.displayName || 'Usuario sin nombre',
            email,
            password: '', // No se necesita una contraseña si solo se usa Google
          });
          console.log('Usuario creado:', usuario);
        } else {
          console.log('Usuario encontrado:', usuario);
        }

        // Retornar el usuario encontrado o creado
        return done(null, usuario);
      } catch (error) {
        console.error('Error en la autenticación de Google:', error);
        return done(error, null);
      }
    }
  )
);

// Serialización del usuario en la sesión
passport.serializeUser((user: any, done: (error: any, id?: any) => void) => {
  console.log('Serializando usuario:', user);
  done(null, user.id); // Serializar solo el ID del usuario
});

// Deserialización del usuario desde la sesión
passport.deserializeUser(async (id: number, done: (error: any, user?: any) => void) => {
  try {
    console.log('Deserializando usuario con ID:', id);
    const usuario = await Usuario.findByPk(id); // Buscar el usuario por su ID
    if (!usuario) {
      throw new Error(`Usuario con ID ${id} no encontrado`);
    }
    done(null, usuario);
  } catch (error) {
    console.error('Error en la deserialización:', error);
    done(error, null);
  }
});

export default passport;