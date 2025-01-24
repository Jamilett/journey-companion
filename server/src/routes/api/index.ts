import { Router } from 'express';
import userRoutes from './user';

const router = Router();

// Registrar las rutas de usuarios
router.use('/users', userRoutes);

export default router;
