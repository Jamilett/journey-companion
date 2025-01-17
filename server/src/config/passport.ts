import passport from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno

// Depuración: Verifica que las variables de entorno están cargadas
console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID);
console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET);
console.log('GOOGLE_CALLBACK_URL:', process.env.GOOGLE_CALLBACK_URL);

// Configuración de la estrategia de Google
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL!,
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: (error: any, user?: any) => void
    ) => {
      try {
        // Aquí podrías buscar o crear el usuario en tu base de datos
        const user = {
          id: profile.id,
          name: profile.displayName,
          email: profile.emails?.[0]?.value,
        };
        return done(null, user); // Enviar el usuario al callback
      } catch (error) {
        return done(error, null); // Manejar errores en la autenticación
      }
    }
  )
);

// Serialización del usuario en la sesión
passport.serializeUser((user: any, done: (error: any, id?: any) => void) => {
  done(null, user); // Serializar todo el objeto usuario (ajústalo según tus necesidades)
});

// Deserialización del usuario desde la sesión
passport.deserializeUser((obj: any, done: (error: any, user?: any) => void) => {
  done(null, obj); // Deserializar el usuario (normalmente buscarías en tu base de datos)
});

export default passport;