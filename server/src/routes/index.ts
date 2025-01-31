import { Router } from 'express';
import apiRoutes from './api/index.js';
const router = Router();

router.get('/', (req, res) => {
    res.send("Hit Test Route");
});

router.use('/api', apiRoutes);

export default router;
