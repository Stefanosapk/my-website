<template>
  <v-app dark>
    <v-main>
      <SpaceElevator></SpaceElevator>
      <v-container fluid>
        <v-tabs right>
          <v-tab to="/">About Me</v-tab>
          <v-tab to="/projects">Projects</v-tab>
          <a
            v-for="social in socials"
            :id="social.name"
            :key="social.id"
            :href="social.url"
            target="_blank"
            class="bg-blue-onHover mx-2 mt-2"
          >
            <v-icon> {{ social.icon }} mr-4 ma-1 icon-animation</v-icon>
          </a>
          <a
            :href="cssBattleDev.url"
            target="_blank"
            class="bg-blue-onHover mt-1"
          >
            <v-icon style="width: 43px; height: 43px">
              {{ cssBattleDev.icon }} mr-4 ma-1 icon-animation</v-icon
            >
          </a>
        </v-tabs>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          id: 1,
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/stefanosapkarian',
          icon: 'icon-linkedin',
        },
        {
          id: 2,
          name: 'github',
          url: 'https://github.com/Stefanosapk',
          icon: 'icon-github',
        },
        {
          id: 3,
          name: 'stackoverflow',
          url: 'https://stackoverflow.com/users/8847587/lastm4n',
          icon: 'icon-stackoverflow',
        },
      ],
      cssBattleDev: {
        name: 'cssbattledev',
        url: 'https://cssbattle.dev/player/lastm4n',
        icon: 'icon-cssbattledev',
      },
    }
  },
}
</script>
<style lang="scss">
@import '@/assets/styles.scss';
.v-tabs-bar {
  background-color: transparent !important;
}
.v-tab {
  margin: 0 8px;
}
</style>
