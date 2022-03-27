<template>
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({ name:'entry', params: { id: 10 }})"
  >

    <!-- Titulo -->
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">03</span>
        <span class="mx-1 fs-5">Marzo</span>
        <span class="mx-2 fw-light"> 2022, Jueves</span>
    </div>

    <div class="entry-description" >
        Anim officia quis elit anim reprehenderit ea laboris cillum reprehenderit eu eu. Id adipisicing aliqua nisi aliqua magna minim deserunt sint eu deserunt enim. Occaecat in commodo commodo ea nostrud elit mollit fugiat id anim in aliquip cillum excepteur. Sit velit enim et Lorem veniam laboris laborum aliquip in elit occaecat dolore cupidatat occaecat. Et ad ad in velit deserunt proident proident veniam proident ipsum. Consequat consequat laborum est nostrud laboris.
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{ // &-ampersan para que tome la misma clase entry-container y aplique los mismo valores
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}
</style>