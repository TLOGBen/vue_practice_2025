<template>
  <v-app>
    <NuxtRouteAnnouncer />
      <v-app-bar color="primary">
        <template #prepend>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
        </template>
        <v-toolbar-title>App</v-toolbar-title>
        <template #extension> 123456 </template>
        <template #append>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" temporary>
        <v-list>
          <v-list-item title="Navigation drawer" />
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <slot />
      </v-main>
      <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
const drawer = ref(false)
</script>

<style></style>
