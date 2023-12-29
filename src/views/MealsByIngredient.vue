<template>
 <Meals :meals="meals"/>
<!-- <pre>The meals are {{ meals }}</pre> -->
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue'

const meals = computed(() => store.state.mealsByIngredient)

const route = useRoute();

onMounted(() =>{
    //debugger;
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
})

</script>
