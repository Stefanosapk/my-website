<template>
  <div>
    <div class="content-overlay"></div>
    <img :aspect-ratio="16 / 9" :src="project.imgUrl" class="content-image" />
    <div class="content-details fadeIn-bottom">
      <h3 class="content-title">{{ project.title }}</h3>
      <p class="color-main">{{ project.description }}</p>
      <a
        v-if="project.githubUrl"
        :href="project.githubUrl"
        target="_blank"
        class="cursorPointer bg-blue-onHover"
      >
        <v-icon> icon-github mr-4 ma-1 </v-icon>
      </a>
      <a
        v-if="project.site"
        :href="project.site"
        target="_blank"
        class="cursorPointer bg-blue-onHover"
      >
        <v-icon> mdi-link mr-4 ma-1</v-icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
