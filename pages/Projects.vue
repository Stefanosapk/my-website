<template>
  <div>
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12">
        <v-row no-gutters justify="center" align="center" class="mt-12">
          <v-col
            v-for="project in projects"
            cols="auto"
            sm="5"
            md="3"
            class="mx-6 mt-12 content"
            :key="project.id"
          >
            <Project :project="project" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Project from '@/components/project/Project'
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Blogs',
          description: 'FastAPI-Python application with CRUD actions',
          imgUrl: '/images/projects/fast-api.png',
          githubUrl: 'https://github.com/Stefanosapk/FastAPI-Blogs',
        },
        {
          id: 2,
          title: 'Stock Trader',
          description: 'Vue.js application using Vuex and Vue Router',
          imgUrl:
            'https://www.zbw-mediatalk.eu/wp-content/uploads/2015/09/github-cover.jpg',
          githubUrl: 'https://github.com/Stefanosapk/stock-trader',
          site: '',
        },
        {
          id: 3,
          title: 'Pizza House',
          description:
            'PHP-LARAVEL application with CRUD actions and deployment at Heroku',
          imgUrl: 'https://piiza-house.herokuapp.com/img/pizza-house.png',
          githubUrl: 'https://github.com/Stefanosapk/Order-Pizza',
          site: 'https://piiza-house.herokuapp.com/',
        },
      ],
    }
  },
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
}
</script>

<style scoped lang="scss">
@import '@/assets/styles.scss';
@import '@/components/project/_projects.scss';
</style>
