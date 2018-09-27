'use strict';
import controller from '../../controller';

const stateRoutes= (router, db) => {
  router.get('/state/:id', controller.getState);
};

export default stateRoutes;
