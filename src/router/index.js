import vue from "vue"
import Router from "vue-router"
import Helloworld from '@/components/HelloWorld.vue'
import Link from "@/components/link.vue";
import Login from "@/components/login.vue";
import Register from "@/components/register.vue";
import Mobil from "@/views/About.vue";

vue.use(Router)

function configRoutes() {
    return [{
            path: '/',
            component: Helloworld
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/link',
            component: Link
        },
        {
            path: '/mobil',
            component: Mobil
        },
    ]
}

const link = new Router({
    mode: "history",
    routes: configRoutes(),
});
export default link;