<template>
  <input
    class="form-control"
    type="text"
    placeholder="Pesquisar País"
    v-model="text"
    @keyup="inputPress"
  />
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const text = ref("");
    const store = useStore();

    const inputPress = () => {
      store.dispatch("filterName", text.value);
    };
    return { inputPress, text };
  },
};
</script>

<style lang="scss" scoped>
</style>