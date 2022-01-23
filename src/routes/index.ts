import { Router } from 'express';

import * as HomeController from '../controllers/homeController';

const router = Router();
router.get("/produto/:id/excluir", HomeController.excluir);
router.get("/produto/:id/mais", HomeController.aumentar);
router.get("/produto/:id/menos", HomeController.diminuir);

router.get('/', HomeController.home);
router.post('/', HomeController.home);
router.get("/carnes", HomeController.carnes);
router.post("/carnes", HomeController.carnes);
router.get("/higiene&limpeza", HomeController.higiene);
router.post("/higiene&limpeza", HomeController.higiene);
router.get("/bebidas", HomeController.bebidas);
router.post("/bebidas", HomeController.bebidas);
router.get("/hortifruit", HomeController.hortifruit);
router.post("/hortifruit", HomeController.hortifruit);
router.get("/doces", HomeController.doces);
router.post("/doces", HomeController.doces);



export default router;