<template>
    <v-layout class="rounded rounded-md">
      <v-app-bar color="primary-darken-2" title="Application bar"/>

      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"/>
        </v-list>
      </v-navigation-drawer>

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <div>
            <v-card v-for="[name, cls] in classes" :key="name" class="my-4">
              <div :class="[cls, 'pa-2']">{{ name }}</div>
              <div class="text-caption bg-surface-bright pa-2">
                  <div>Class</div>
                  <div class="font-weight-medium">{{ cls }}</div>
              </div>
            </v-card>
            <v-card color="primary"  class="my-4">
              <div class="text-h5 pa-2">Primary</div>
            </v-card>
            <v-card color="secondary" class="my-4">
              <div class="text-h5 pa-2">Secondary</div>
            </v-card>
            <v-card color="success" class="my-4">
              <div class="text-h5 pa-2">success</div>
            </v-card>
            <v-card color="warning" class="my-4">
              <div class="text-h5 pa-2">warning</div>
            </v-card>
            <v-card color="error" class="my-4">
              <div class="text-h5 pa-2">error</div>
            </v-card>
            <v-card color="info" class="my-4">
              <div class="text-h5 pa-2">info</div>
            </v-card>
        </div>
      </v-main>
    </v-layout>
</template>

<script setup>
import { ref } from 'vue'

const classes = ref([
  ['Heading 1', 'text-h1'],
  ['Heading 2', 'text-h2'],
  ['Heading 3', 'text-h3'],
  ['Heading 4', 'text-h4'],
  ['Heading 5', 'text-h5'],
  ['Heading 6', 'text-h6'],
  ['Subtitle 1', 'text-subtitle-1'],
  ['Subtitle 2', 'text-subtitle-2'],
  ['Body 1', 'text-body-1'],
  ['Body 2', 'text-body-2'],
  ['Button', 'text-button'],
  ['Caption', 'text-caption'],
  ['Overline', 'text-overline'],
])
</script>

<style scoped>

</style>
