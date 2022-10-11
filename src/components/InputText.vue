<script setup>
import { ref } from "vue";

const emits = defineEmits(["setSearch"])

const searchText = ref("")

const submitHandler = () => {
    emits("setSearch", searchText.value)
}
</script>

<template>
   <div class="search">
    <input class="search__input" type="text" v-model="searchText" @keyup.enter="submitHandler" placeholder="Type and search for gifs">
    <button class="search__button" @click="submitHandler">Search</button>
   </div>
</template>

<style lang="scss" scoped>
.search{
    display: flex;
    align-items: center;
    justify-content: center;
    &__input{
        padding: 8px 12px;
        border: 1px solid rgba(14, 211, 229, 0.671);
        background-color: black;
        transition: all 0.3s ease;
        border-radius: 12px 0px 0px 12px;
        color: white;
        min-width: 400px;
        &:focus{
            outline: none;
            border: 1px solid rgb(14, 211, 229);
        }
    }
    &__button{
        padding: 8px 12px;
        background-color: rgb(14, 211, 229);
        border: 0px;
        border-radius: 0px 12px 12px 0px;
        cursor: pointer;
    }
}
    
</style>