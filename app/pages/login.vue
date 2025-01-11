<template>
  <v-container class="fill-height">
    <v-responsive class="align-start fill-height mx-auto">
      Login Page
      <div>是否登入成功 {{ loginState.loggedIn }}</div>
      <div>使用者資訊 {{ loginState.user }}</div>
      <div>Session 資訊 {{ loginState.session }}</div>
      <v-form
        v-model="canSubmit"
        @submit.prevent="login"
      >
        <v-text-field
          v-model="form.username"
          label="Username"
          :rules="[() => validateStrLen(form.username)]"
        />
        <v-text-field
          v-model="form.password"
          label="Password"
        />
        <v-btn
          :disabled="!canSubmit"
          variant="elevated"
          color="primary"
          type="submit"
        >
          Login
        </v-btn>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'page-only',
  title: '登入頁面',
  auth: false,
})

const loginState = reactive({
  loggedIn: false,
  user: null,
  session: null,
})

const form = reactive({
  username: '',
  password: '',
})

const canSubmit = ref(false)

const login = async () => {
  if (!validateLogin()) {
    return
  }

  try {
    await useAPI('/api/auth/login', {
      method: 'post',
      body: form,
    })
    await reloadUser()
  }
  catch (err) {
    console.error('err', err)
  }
}

const validateLogin = () => {
  let valid = true
  if (validateStrLen(form.username) !== true) {
    valid = false
  }
  return valid
}

const reloadUser = async () => {
  // const { loggedIn, user, session, fetch } = useUserSession()
  // await fetch()
  // loginState.loggedIn = loggedIn.value
  // loginState.user = user.value
  // loginState.session = session.value
}

onMounted(() => {
  reloadUser()
})
</script>

<style></style>
