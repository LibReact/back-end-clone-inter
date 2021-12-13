import { Router } from 'express';
import userAuthenticated from '../middlewares/userAuthenticated';
import { UserController } from '../resources/user/user.controllers';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/signin', userController.signin) // Procura usuário existente
userRouter.post('/signup', userController.signup) // Criar um novo user e gera o token JWT
userRouter.get('/me', userAuthenticated, userController.me) // Criar um novo user e gera o token JWT

export default userRouter;