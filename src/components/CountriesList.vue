<template>
  <section class="mt-5 mb-5 p-2">
    <div class="ListContainer">
      <CountriesCard :CardList="countries" />
    </div>
  </section>
</template>

<script>
import CountriesCard from "@/components/CountriesCard.vue";

import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  components: {
    CountriesCard,
  },
  setup() {
    const store = useStore();

    const countries = computed(() => {
      return store.getters.getCountriesFilters;
    });

    onMounted(async () => {
      await store.dispatch("getCountries");
      await store.dispatch("filterRegion", "");
    });

    return { countries };
  },
};
</script>

<style scoped>
.ListContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  gap: 1rem;
}
</style>