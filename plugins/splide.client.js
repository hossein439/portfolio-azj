import Vue from 'vue';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// Default theme
import '@splidejs/vue-splide/css';

// // or other themes
// import '@splidejs/vue-splide/css/skyblue';
// import '@splidejs/vue-splide/css/sea-green';

// // or only core styles
// import '@splidejs/vue-splide/css/core';


Vue.use(VueSplide);
new Vue({
    el: '#app',
    render: h => h(App),
});