import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import NotFoundpage from "./pages/NotFoundpage";
import Register from "./pages/Register";
import Auth from './pages/Auth'

import Shopdetail from "./pages/shopdetail";
import Succes from "./pages/Succes";
const routes = [
    {
        path:'/',
        exact:'true',
       component: Homepage
    },
    {
        path:'/auth/:id',
        exact:'false',
       component: Auth
    },
    {
        path:'/succes',
        exact:'false',
       component: Succes
    },
    {
        path:'/shopdetail/:slugId',
        exact:'false',
       component: Shopdetail
    },
    {
        path:'/contact',
        exact:'false',
       component: Contact
    
    },
    {
        path:'/shoping-cart',
        exact:'true',
       component: Cart
    
    },
    {
        path:'/blog',
        exact:'false',
       component: Blog
    
    },
    {
        path:'*',
        exact:'false',
        layout: null,
       component: NotFoundpage
    
    },
    {
        path:'/login',
        layout: null,
       component: Login
    
    },
    {
        path:'/register',
   
        layout: null,
       component: Register
    
    }
   
]
export { routes}