
import { validationGuard } from './core/guards/validation-guard';
import { Routes } from '@angular/router';
import { AuthLayout } from './core/layouts/auth-layout/auth-layout';
import { BlankLayout } from './core/layouts/blank-layout/blank-layout';
import { Brands } from './features/brands/brands';
import { Cart } from './features/cart/cart';
import { Checkout } from './features/checkout/checkout';
import { Details } from './features/details/details';
import { Home } from './features/home/home';
import { Products } from './features/products/products';
import { Login } from './core/auth/login/login';
import { Register } from './core/auth/register/register';
import { Notfound } from './features/notfound/notfound';
import { loggedGuard } from './core/guards/logged-guard';
import { Allorders } from './features/allorders/allorders';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"", component: AuthLayout,children:
        [
            {path:"login",component:Login,canActivate:[loggedGuard]},
            {path:"register",component:Register,title:"Register Page",canActivate:[loggedGuard]}
        ]},
    {path:"",component:BlankLayout,children:
        [
            {path:"brands", component:Brands,title:"Brands", canActivate:[validationGuard]},
            {path:"cart", component:Cart,title:"Cart", canActivate:[validationGuard]},
            {path:"allorders", component:Allorders,canActivate:[validationGuard]},
            {path:"checkout/:id", component:Checkout,title:"Checkout",canActivate:[validationGuard]},
            {path:"home", component:Home,title:"Home", canActivate:[validationGuard]},
            {path:"details/:id", component:Details,title:"Details", canActivate:[validationGuard]},
            {path:"products", component:Products,title:"Products", canActivate:[validationGuard]},
        ]},
    {path:"**",component:Notfound}      
];
