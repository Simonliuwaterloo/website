<template>
  <div id="gallery" class="ma-10">
    <v-carousel height="100%">
      <v-carousel-item
        v-for="i in 10"
        :key="i"
      >
        <v-img :src="require(`../assets/gallery/${i}.jpg`)" contain max-height="600"></v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data () {
    return {}
  },
};
</script>

<style>
</style>