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
import Axios from "axios";
export default {
  components: {},
  mounted() {
    const today = new Date();
    const yyyyLastDay = today.getFullYear();
    const mmLastDay = String(today.getMonth() + 1).padStart(2, "0");
    const ddLastDay = String(today.getDate()).padStart(2, "0");
    const lastDay = yyyyLastDay + "-" + mmLastDay + "-" + ddLastDay;

    let firstDay = new Date(today);
    firstDay.setDate(firstDay.getDate() - 6);
    const yyyyFirstDay = firstDay.getFullYear();
    const mmFirstDay = String(firstDay.getMonth() + 1).padStart(2, "0");
    const ddFirstDay = String(firstDay.getDate()).padStart(2, "0");
    firstDay = yyyyFirstDay + "-" + mmFirstDay + "-" + ddFirstDay;

    Axios.get(
      `https://api.hnb.hr/tecajn/v1?datum-od=${firstDay}&datum-do=${lastDay}`
    )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
};
</script>

<style></style>
