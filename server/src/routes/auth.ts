import { Router } from 'express';
import passport from '../config/passport';

const router = Router();

// Iniciar la autenticación con Google
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback después de autenticarse con Google
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.send('Autenticación exitosa'); // Cambia esto por lógica personalizada
  }
);

export default router;