<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredient.strIngredient }}</h1>
    </div>
    <Meals :meals="meals" />
    <!-- <pre>The meals are {{ meals }}</pre> -->
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue'

const meals = computed(() => store.state.mealsByIngredient)
const ingredient = computed(() => store.state.ingredient)
const route = useRoute();

onMounted(() => {
    //debugger;
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
})

</script>
