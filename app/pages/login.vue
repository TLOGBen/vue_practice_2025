<template>
  <div>
    Login Page
    <div>是否登入成功 {{ loginState.loggedIn }} </div>
    <div>使用者資訊 {{ loginState.user }} </div>
    <div>Session 資訊 {{ loginState.session }} </div>
    <v-form>
      <v-text-field v-model="form.username" label="Username" />
      <v-text-field v-model="form.password" label="Password" />
      <v-btn @click="login">Login</v-btn>
    </v-form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'page-only',
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

const errForm = reactive({
  username: {
    error: false,
    message: '',
  },
  password: {
    error: false,
    message: '',
  },
})

const login = async () => {
  try {
    await useAPI('/api/auth/login', {
      method: 'post',
      body: form,
    }).then(
      (res) => {
        if (res.status.value === 'error') {
          const issues = res.error.value.data.data.issues
          warnInput(issues)
        }
      },
    )
    await reloadUser()
  }
  catch (err) {
    console.error('err', err)
  }
}

const reloadUser = async () => {
  const { loggedIn, user, session, fetch } = useUserSession()
  await fetch()
  loginState.loggedIn = loggedIn.value
  loginState.user = user.value
  loginState.session = session.value
}
const warnInput = (issues) => {
  for (const issue of issues) {
    if (issue.path === 'username') {
      errForm.username.error = true
      errForm.username.message = issue.message
    }
    if (issue.path === 'password') {
      errForm.password.error = true
      errForm.password.message = issue.message
    }
  }
}

onMounted(() => {
  reloadUser()
})
</script>

<style></style>
