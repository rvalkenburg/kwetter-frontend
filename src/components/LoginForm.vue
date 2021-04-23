<template>
  <div class="login">
    <el-card style="color: white">
      <h2 style="color: black">Login</h2>
      <el-form
        class="login-form"
        :rules="rules"
        ref="form"
      >
        <el-form-item prop="username">
          <el-input placeholder="Username" prefix-icon="fas fa-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="Password"
            type="password"
            prefix-icon="fas fa-lock"
            
          ></el-input>
        </el-form-item>
        <button @click.prevent="changeName()">test</button>
        <el-form-item>
     <GoogleButton />
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import  GoogleButton  from './GoogleButton.vue';
    import {  ActionTypes } from '@/store/modules/profile/actions';

    export default defineComponent({
        name: 'Login',
        data(): { }{
            return {}
        },
        components: {
            GoogleButton
        },
        computed: {
          
        },
        methods: {
          changeName() {
            this.$store.dispatch(`profile/${ActionTypes.SetName}`, 'test');
          }
        }
    });
</script>