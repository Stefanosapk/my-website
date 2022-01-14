<template>
  <div>
    <v-row justify="center" align="center" style="height: 35vw">
      <v-col cols="12" sm="8" md="6">
        <div class="title-styling">{{ items.name }} - {{ items.title }}</div>
        <div class="avatar-style animated fadeIn">
          <img
            class="rounded-lg my-8"
            width="220"
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
          'Stefanos is an Experienced Software Engineer who loves using modern\n' +
          'approaches. Not only does he have an excellent understanding of Web\n' +
          'development standards but also has solid knowledge of E2E testing.',
      },
    }
  },
  mounted() {
    // window.onload = function () {
    //   let frameElement = document.getElementById('dialogflowCSS')
    //   let doc = frameElement.contentDocument
    //   doc.body.innerHTML =
    //     doc.body.innerHTML +
    //     '<style>.b-agent-demo .b-agent-demo_result {background-color:yellow;}</style>'
    // }
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

.info-text {
  text-align: center;
  @extend .tk-neue-haas-unica;
  @extend .position-relative;
}

.avatar-style {
  text-align: center;
  @extend .position-relative;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
</style>
