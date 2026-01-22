import { Route } from "@angular/router";

export  const routes: Route[] = [
    {
        path: 'register',
        loadChildren:()  => import('src/app/auth/auth.routes').then(c => c.registerRoutes)
    }
]