<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" class="text-right">
        <a
          v-for="social in socials"
          :key="social.id"
          :href="social.url"
          target="_blank"
          class="bg-blue-onHover"
        >
          <v-icon> {{ social.icon }} mr-4 ma-1</v-icon>
        </a>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div class="title-styling">
          {{ items.name }} - {{ items.title }}
        </div>
        <div class="avatar-style">
          <img class="rounded-lg"
            width="130"
            src="/images/avatar.jpeg"
            alt="Avatar"
          />
        </div>
        <v-row no-gutters justify="center" align="center">
          <v-col cols="7">
            <p class="info-text mt-10">
              {{ items.info }}
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      items: {
        name: 'Stefanos Apkarian',
        title: 'Software Engineer',
        info:
          'Stefanos is an experienced Software Engineer who loves using modern\n' +
          'approaches. Not only does he have an excellent understanding of Web\n' +
          'development standards but also has solid knowledge of E2E testing.',
      },
      socials: [
        {
          id: 1,
          url: 'https://www.linkedin.com/in/stefanosapkarian',
          icon: 'icon-linkedin',
        },
        {
          id: 2,
          url: 'https://github.com/Stefanosapk',
          icon: 'icon-github',
        },
      ],
    }
  },
  head: {
    title: 'Stefanos Apkarian',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'index.vue',
        name: 'Stefanos Apkarian',
        content: 'Experienced Software Engineer',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
})
</script>

<style scoped lang="scss">
@import '@/assets/styles.scss';

.title-styling {
  text-align: center;
  font-family: monospace;
  @extend .color-blue-info;
  @extend .font-size22;
  @extend .line-height-5;
}

.info-text{
  text-align: center;
  @extend .tk-neue-haas-unica;
  @extend .position-relative;
}

.avatar-style{
  text-align: center;
  @extend .position-relative;
}

</style>
