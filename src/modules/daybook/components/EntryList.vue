<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input 
      type="text"
      class="form-control"
      placeholder="Search into"
      >
    </div>

    <div class="entry-scrollarea">
      <Entry 
        v-for="item in 100"
        :key="item"
        />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {

  components:{
    Entry : defineAsyncComponent( () => import('../components/Entry.vue') )
  }

}
</script>

<style lang="scss"  scoped>


.entry-list-container{
  border-right: 1px solid #2c3e50;
  height: calc( 100vh - 56px);
}
/*1vh = 1% de la altura del viewport
  100vh = altura del viewport
  1vw = 1% del ancho del viewport
  100vw = ancho del viewport
*/
.entry-scrollarea{
  height: calc( 100vh - 110px );
  overflow: scroll;
}

</style>