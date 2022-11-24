<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="drawer = ! drawer"
        />

        <q-toolbar-title>
          Profile App
        </q-toolbar-title>

        <div>Dandi Kurniawan</div>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable active-class="active" v-ripple to="/Dashboard">
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>
              <q-item-section>
                Dashboard
              </q-item-section>
            </q-item>

            <q-item clickable active-class="active" v-ripple to="/Input">
              <q-item-section avatar>
                <q-icon name="input" />
              </q-item-section>
              <q-item-section>
                Input Data
              </q-item-section>
            </q-item>

            <q-item clickable active-class="active" v-ripple to="/Login">
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>
              <q-item-section>
                Logout
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
        <q-img class="absolute-top" src="../assets/belakang.jpg.jpeg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../assets/dandi.jpg.jpeg">
            </q-avatar>
            <div class="text-weight-bold">Dandy Kurniawan</div>
            <div>@dandykurniawannn</div>
          </div>
        </q-img>
      </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    const drawer = ref(false)

    return {
      drawer,
      toggleLeftDrawer () {
        drawer.value = !drawer.value
      }
    }
  }
})
</script>
<style>
.active {
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  padding-right: 10px;
}
</style>
