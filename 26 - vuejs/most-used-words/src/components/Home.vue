<template>
  <v-container fluid>
    <div class="pills">
        <Pill v-for="word in groupedWords" :key="word.name"
           :name="word.name" :amount="word.amount"/>
    </div>
  </v-container>
</template>

<script>
import Pill from './Pill.vue'
export default {
    name:'HomeDisplay',

    components:{
        Pill
    },

    data: ()=>({
        groupedWords: [
            {name:'I', amount: 1234 },
            {name:'you', amount: 900 },
            {name:'he', amount: 853 },
        ]
    })
}
</script>

<style>
.pills{
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>