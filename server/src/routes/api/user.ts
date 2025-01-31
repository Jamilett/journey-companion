import { Router, Request, Response } from 'express';
import User from '../../models/user';

const router = Router();

// Crear un nuevo usuario
router.post('/', async (req: Request, res: Response): Promise<void> => {
try {
    const user = await User.create(req.body);
    res.status(201).json(user);
} catch (err: any) {
    res.status(500).json({ error: err.message });
}
});

// Obtener todos los usuarios
router.get('/', async (req: Request, res: Response): Promise<void> => {
try {
    const users = await User.findAll();
    res.json(users);
} catch (err: any) {
    res.status(500).json({ error: err.message });
}
});

// Obtener un usuario por ID
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
    }
    res.json(user);
} catch (err: any) {
    res.status(500).json({ error: err.message });
}
});

// Actualizar un usuario
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
    }
    await user.update(req.body);
    res.json(user);
} catch (err: any) {
    res.status(500).json({ error: err.message });
}
});

// Eliminar un usuario
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
    }
    await user.destroy();
    res.json({ message: 'User deleted successfully' });
} catch (err: any) {
    res.status(500).json({ error: err.message });
}
});

export default router;
