import Vue from 'vue';
import SpaceElevator from '../components/SpaceElevator';


const components = { SpaceElevator, };

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
});

// nuxt.config.js
export default {
  plugins: ['~plugins/bl-components'],
}
