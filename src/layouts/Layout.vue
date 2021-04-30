<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="">
          Logo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container class="flex flex-center">
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
import { mapActions, mapMutations } from "vuex";
export default {
  components: {},
  methods: {
    ...mapActions("store", ["fetchingData"]),
    ...mapMutations("store", ["storageCurrencyFirstGraph"])
  },

  created() {
    this.storageCurrencyFirstGraph();
    this.fetchingData();
  }
};
</script>

<style></style>
