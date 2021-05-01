<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated class="bg-blue-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="q-ml-lg">
          Logo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-blue-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="footer text-center">
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
    ...mapMutations("store", [
      "storageCurrencyFirstGraph",
      "storageCountrySecondGraph"
    ])
  },

  created() {
    this.storageCurrencyFirstGraph();
    this.storageCountrySecondGraph();
    this.fetchingData();
  }
};
</script>

<style>
.footer {
  font-size: 0.8rem;
}
</style>
