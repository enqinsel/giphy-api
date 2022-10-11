<script setup>
const props = defineProps(["result" ,"show"])
const emits = defineEmits(["update:show"])

const closeHandler = () => {
    emits("update:show", false)
}
</script>

<template>
    <div v-if="show" class="modal">
        <div @click="closeHandler" class="modal__layer"></div>
        <div class="modal__content">
            <img class="img-fluid" :src="props.result" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 99;
    &__layer{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.908);
    }
    &__content{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: auto;
        height: auto;
    }
}

.img-fluid{
    width: 100%;
    height: auto;
}
</style>