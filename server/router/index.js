'use strict'
import authenticate from './routes/authenticate';
import userDetail from './routes/userDetail';

const routes = [
    authenticate,
    userDetail
];

// Add access to the app and db objects to each route
const app_router = (router, db) => {
    return routes.forEach((route) => {
        route(router, db);
    });
};

export default app_router;