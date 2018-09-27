'use strict';
import controller from '../../controller';

const districtRoutes= (router, db) => {
  router.get('/district/:id', controller.getDistrict);
};

export default districtRoutes;
