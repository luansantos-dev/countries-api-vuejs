<template>
  <div class="container m-auto">
    <div class="SearchCoutry">
      <CountriesRegion />
      <CountriesInput />
    </div>
    <CountriesList />
  </div>
</template>

<script>
import CountriesInput from "@/components/CountriesInput.vue";
import CountriesList from "@/components/CountriesList.vue";
import CountriesRegion from "@/components/CountriesRegion.vue";

export default {
  name: "Home",
  components: { CountriesList, CountriesRegion, CountriesInput },
};
</script>

<style scoped>
.SearchCoutry {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>

