import { Router, Request, Response, NextFunction } from 'express';
import passport from '../config/passport';

const router = Router();

// Middleware para verificar si el usuario está autenticado (opcional)
const ensureAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/'); // Redirigir si el usuario no está autenticado
};

// Ruta para iniciar sesión con Google
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Ruta de callback después de la autenticación con Google
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req: Request, res: Response) => {
    // Autenticación exitosa
    res.send('Autenticación exitosa');
  }
);

// Ruta para cerrar sesión (opcional)
router.get('/logout', (req: Request, res: Response, next: NextFunction) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.send('Sesión cerrada correctamente');
  });
});

export default router;