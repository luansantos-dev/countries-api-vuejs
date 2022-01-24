<template>
  <div v-for="(country, index) in CardList" :key="index">
    <div class="card">
      <div class="img">
        <img
          class="card-img-top"
          :src="country.flags.svg"
          :alt="country.name.common"
        />
      </div>
      <div class="card-body">
        <h5 class="card-header">{{ country.name.common }}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <strong>Capital: </strong>
            <span v-for="(item, index) in country.capital" :key="index">{{
              item
            }}</span>
          </li>
          <li class="list-group-item">
            <strong>Population:</strong> {{ country.population }}
          </li>
          <li class="list-group-item">
            <strong>Região:</strong> {{ country.region }}
          </li>
          <li class="list-group-item">
            <strong>Linguagem:</strong>
            <span v-for="(item, index) in country.languages" :key="index">
              {{ item.replace("", " ") }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    CardList: {
      type: Object,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style scoped>
img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>