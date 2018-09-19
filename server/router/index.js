'use strict'
// import authenticate from './routes/authenticate';
import userDetailRoutes from './routes/userDetail';

const routes = [
    userDetailRoutes
];

// Add access to the app and db objects to each route
const app_router = (router, db) => {
    return routes.forEach((route) => {
        route(router, db);
    });
};

export default app_router;