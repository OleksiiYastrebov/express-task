import { Router } from 'express';

import UserDocsController from './userDocsController.js';
import { validateUserDocsBody } from '../middleware/middlewares.js';

const router = Router();

router.get('/', UserDocsController.getAllUsers);
router.get('/:email', UserDocsController.getUserByEmail);
router.post('/', validateUserDocsBody, UserDocsController.postUser); // validate body
router.put('/:email', validateUserDocsBody, UserDocsController.putUser); // validate body
router.delete('/:email', UserDocsController.deleteUser);

export default router;
