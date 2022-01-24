<template>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  height: 100%;
}

img {
  max-width: 100%;
  display: block;
}

#app {
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
}
</style>