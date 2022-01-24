<template>
  <div class="region">
    <a class="btn btn-primary" @click="filterRegion('')">Home</a>
    <a class="btn btn-primary" @click="filterRegion('Africa')">Africa</a>
    <a class="btn btn-primary" @click="filterRegion('Americas')">Americas</a>
    <a class="btn btn-primary" @click="filterRegion('Asia')">Asia</a>
    <a class="btn btn-primary" @click="filterRegion('Europe')">Europe</a>
    <a class="btn btn-primary" @click="filterRegion('Oceania')">Oceania</a>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const state = useStore();

    const filterRegion = (region) => {
      state.dispatch("filterRegion", region);
    };

    return { filterRegion };
  },
};
</script>


<style scoped>
.region {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  gap: 0.6rem;
}
</style>