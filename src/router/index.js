import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import Defaultlayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'

const routes = [
    {
        path: '/',
        component: Defaultlayout,
        children: [
            {
                path: '/vuejs-search-meals/',
                name: 'home',
                component: Home
            },
            {
                path: '/vuejs-search-meals/by-name/:name?',
                name: 'byName',
                component: MealsByName
            },
            {
                path: '/vuejs-search-meals/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },
            {
                path: '/vuejs-search-meals/ingredients',
                name: 'ingredients',
                component: Ingredients
            },
            {
                path: '/vuejs-search-meals/by-ingredient/:ingredient',
                name: 'byIngredient',
                component: MealsByIngredient
            },
            {
                path: '/vuejs-search-meals/meal/:id',
                name: 'mealDetails',
                component: MealDetails

            },

        ]
    },
    {
        path: '/guest',
        component: GuestLayout,
        children: [

        ]
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;