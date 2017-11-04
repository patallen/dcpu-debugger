import Router from './connection/router';
import Communicator from './connection/communicator';

const router = new Router();
router.register("update", (pl) => {console.log(pl)});

export default router;
