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
        <el-form-item>
          <el-button
            class="login-button"
            type="primary"
            native-type="submit"
            block
          >Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>