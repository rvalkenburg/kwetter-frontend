<template>
  <div id="app">
    <LoginForm/>
  </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import LoginForm from '../components/LoginForm.vue'

    export default defineComponent({
        name: 'Login',
        data(): { }{
            return {}
        },
        components: {
            LoginForm
        },
        computed: {

        },
        methods: {

        }
    });
</script>

<style scoped>
.login {
 position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
body {
  background: rgb(24,19,106);
  background: linear-gradient(90deg, rgba(24,19,106,1) 0%, rgba(13,13,56,1) 100%, rgba(9,41,138,1) 100%);
}
</style>