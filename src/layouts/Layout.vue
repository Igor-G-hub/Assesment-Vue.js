<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="">
          Logo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      Layout
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white footer-center">
      <q-toolbar>
        <q-toolbar-title class="justify-center">
          Copyright 2021
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
// import FirstPage from "../pages/FirstPage.vue";
// import SecondPage from "../pages/SecondPage.vue";

export default {
  components: {
    // FirstPage,
    // SecondPage
  }
};
</script>

<style></style>
