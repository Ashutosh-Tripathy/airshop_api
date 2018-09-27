'use strict';
import controller from '../../controller';

const districtRoutes = (router, db) => {
  router.get('/district/:id', controller.getDistrict);
  router.get('/state/:state_id/districts', controller.getAllDistrict);
};

export default districtRoutes;