<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="row items-center justify-center bg-grey-2">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pa-md">
            <q-card class="row col-xs-12">
              <div class="col-md-6" v-if="$q.screen.lg || $q.screen.xl || $q.screen.md">
                <q-img src="" />
              </div>
              <div class="col-md-6 col-xs-12 q-mt-lg">
                <div class="row justify-center">
                    <div class="col-md-10 col-sm-12 q-pa-md">
                      <div class="text-h4 text-teal-10 text-center">Login Account</div>
                      <div class="text-5 text-teal text-center q-pb-xl">silahkan login akun anda</div>

                      <q-form
                      @submit="onSubmit">
                          <q-input
                            label="EMAIL"
                            color="lime"
                            v-model="form.EMAIL"
                            :rules="[ val => val && val.length > 0 || 'harap masukkan email anda!']"/>
                          <q-input
                            type="password"
                            label="PASSWORD"
                            color="lime"
                            v-model="form.PASSWORD"
                            :rules="[ val => val && val.length > 0 || 'harap masukkan password anda!']">
                          </q-input>

                          <div class="q-mt-lg">
                            <q-btn class="full-width" unelevated color="teal-10" label="Login" rounded type="submit" to="/dashboard"/>
                            <q-btn class="full-width q-mt-md" flat unelevated color="grey-10" label="Registrasi" rounded :to="{ name: 'register' }"/>
                          </div>
                      </q-form>
                    </div>

                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { api } from 'src/boot/axios'
export default {
  data () {
    return {
      form: {
        EMAIL: null,
        PASSWORD: null
      }
    }
  },
  methods: {
    onSubmit () {
      api.post('/users/login', {
        EMAIL: this.form.EMAIL,
        PASSWORD: this.form.PASSWORD
      })
        .then((res) => {
          console.log(res)
          if (res.data.status === false) {
            this.$q.notify({
              color: 'negative',
              message: res.data.message,
              icon: 'ion-close'
            })
          } else {
            this.$q.notify({
              color: 'teal-10',
              message: res.data.message,
              icon: 'ion-checkmark'
            })
            if (res.data.data.user.ROLE === '1') {
              this.$q.localStorage.set('dataUser', res.data.data)
              this.$router.push('/dashboardAdmin')
            }
          }
        })
    }
  }
}
</script>
