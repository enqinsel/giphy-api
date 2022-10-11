<script setup>
import { getData } from "./service/getData";
import { ref } from "vue";
import Modal from "./components/Modal.vue";
import InputText from "./components/InputText.vue";

const results = ref("")
const showModal = ref(false)
const singleImage =ref("")

async function searchHandler(searchText) {
  const giphy = await getData(searchText);
  results.value = giphy.data
  return results
}

const clickHandler = (image) =>{
  showModal.value = true
  singleImage.value = image
}
</script>

<template>
  <Teleport to="body">
    <Modal v-model:show="showModal" :result="singleImage"></Modal>
  </Teleport>
  <div class="container">
    <div class="container__wrapper">
      <div v-for="result in results" class="card" @click="clickHandler(result.images.original.webp)">
          <img class="img-fluid" :src="result.images.original.webp" alt="">
      </div>
    </div>
    <div class="container__footer">
      <InputText @setSearch="searchHandler"></InputText>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background: #bdc3c7;
  background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);
  background: linear-gradient(to right, #2c3e50, #bdc3c7);
  overflow-x: hidden;
  &__wrapper{
    columns: 3;
    gap: 24px;
    padding: 24px;
  }
  &__footer {
    position: sticky;
    bottom: 0px;
    width: 100%;
    padding: 24px 32px;
    background-color: whitesmoke;
  }
}
.img-fluid{
    width: 100%;
    height: auto;
}

.card{
  display: inline-block;
  margin-bottom: 24px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  &:hover{
    border-color: rgb(14, 211, 229);
  }
}

</style>
