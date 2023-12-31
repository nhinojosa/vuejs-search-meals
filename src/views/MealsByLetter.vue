<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
    </div>
    <div class="flex justify-center gap-2 mt-2">
        <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" v-bind:key="letter">
            {{ letter }}
        </router-link>
    </div>
    <!-- <pre>{{ meals }}</pre> -->
    <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue'
const route = useRoute()

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})
onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>
