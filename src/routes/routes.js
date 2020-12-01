
const routers = [
    {
        path: '/',
        exact: true,
        // redirect: '/',
        component : 'App'
    },
    // {
    //     component: 'Register',
    //     path: '/register',
    //     exact: true,
    // },
    // {
    //     component: 'AuthLayout',
    //     path: '/login',
    //     auth: false,
    //     exact: false,
    //     childrens: [
    //         {
    //             component: 'Login',
    //             path: '/',
    //             auth: false,
    //             exact: true
    //         }
    //     ]
    // },
    // {
    //     component: 'FpoLayout',
    //     path: '/fpo',
    //     auth: false,
    //     exact: false,
    //     childrens: [
    //         {
    //             component: 'Home',
    //             path: '/home',
    //             auth: false,
    //             exact: true
    //         }
    //     ]
    // }
]

export default routers 