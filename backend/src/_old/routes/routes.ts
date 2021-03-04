import { Router } from 'express';

// controllers imports

import { UserController } from '../controllers/userController';
import { CooperativeController } from '../controllers/cooperativeController';
import { LegalPersonController } from '../controllers/legalPersonController';
import { PesagemController } from '../controllers/pesagemController';



const router = Router();

// controllers

const userController = new UserController();
const pesagemController = new PesagemController();
const legalPersonController = new LegalPersonController();
const cooperativeController = new CooperativeController();

// // Usuários

// usuário comum
router.post("/users", userController.createUser);
router.get("/users/points/:id", userController.consulPoints);
router.get("/users/weigth/:id", userController.consulTotalWeigth);
router.get("/users/totalCount/:id", userController.consulTotalWeigthAndPoints);

// cooperativas
router.post("/users/cooperatives", cooperativeController.createCooperatives);

// empresas parceiras
router.post("/users/legal", legalPersonController.createLegal);

// pesagem
router.post("/pesagem", pesagemController.initPesagem);


// // Rotas ainda a criar 

// router.delete("/users", userController.createUser);
// router.delete("/users/cooperatives", userController.createCooperatives);
// router.delete("/users/legal", userController.createLegal);


// // Sistema





export { router };