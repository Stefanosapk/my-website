<template>
  <div>
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12">
        <v-row no-gutters justify="center" align="center" class="mt-12">
          <v-col
            v-for="project in projects"
            :key="project.id"
            cols="auto"
            sm="5"
            md="3"
            width="300"
            class="mx-4 content"
          >
            <div class="content-overlay"></div>
            <img
              :aspect-ratio="16 / 9"
              width="300"
              :src="project.imgUrl"
              class="mt-12 content-image"
            />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Pizza House</h3>
              <p class="content-text color-main">{{ project.description }}</p>
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
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      head: {
        title: 'Projects',
        meta: [
          {
            hid: 'Projects',
            name: 'Stefanos Apkarian',
            content: 'Projects implemented by Stefanos Apkarian',
          },
        ],
      },
      projects: [
        {
          id: 1,
          title: 'Pizza House',
          description:
            'PHP-LARAVEL application with CRUD actions and deployment at Heroku',
          imgUrl: 'http://piiza-house.herokuapp.com/img/pizza-house.png',
          githubUrl: 'https://github.com/Stefanosapk/Order-Pizza',
          site: 'http://piiza-house.herokuapp.com/',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/styles.scss';

.content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.content .content-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay {
  opacity: 1;
}

.content-image {
  width: 100%;
}
.title {
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 10px;
}
.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p {
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom {
  top: 80%;
}
</style>
