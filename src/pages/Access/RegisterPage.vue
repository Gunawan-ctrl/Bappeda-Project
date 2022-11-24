<template>
  <q-layout>
    <q-page-container>
      <div class="row items-center justify-center">
        <div class="col-xs-12 col-sm-8 col-md-4">
            <q-item class="q-mt-xl">
            <q-item-section>
                <q-item-label style="font-family:customfont;" class="text-weight-bolder text-h4 text-green">Green House</q-item-label>
                <q-item-label caption class="text-weight-medium">Halaman register green house</q-item-label>
                <q-separator class="q-mt-sm" color="green" size="6px" />
            </q-item-section>
            </q-item>

            <q-item class="q-mt-xs">
            <q-item-section>
                <q-item-label class="text-weight-bolder text-h5 text-orange-4">Register Form</q-item-label>
                <q-item-label class="text-body3 text-grey-9">Silahkan Daftarkan Identitas Anda</q-item-label>
            </q-item-section>
            </q-item>

            <q-item class="q-mt-auto">
            <q-item-section>
                <q-form
                  @submit="onSubmit"
                >

                <q-input
                    v-model="USERNAME"
                    label="username"
                    lazy-rules
                    outlined
                    dense
                    :rules="[ val => val && val.length > 0 || 'Lengkapin data username nya']"
                >
                    <template v-slot:prepend>
                    <q-icon name="person" class="text-green-13" />
                    </template>
                </q-input>
                <q-input
                    v-model="NAMA_GREENHOUSE"
                    label="Nama Greenhouse"
                    lazy-rules
                    outlined
                    dense
                    :rules="[ val => val && val.length > 0 || 'Lengkapin data nama greenhouse nya']"
                >
                    <template v-slot:prepend>
                    <q-icon name="storefront" class="text-green-13" />
                    </template>
                </q-input>
                <q-input
                    v-model="ALAMAT"
                    label="Alamat"
                    lazy-rules
                    outlined
                    dense
                    :rules="[ val => val && val.length > 0 || 'Lengkapin data alamat nya']"
                >
                    <template v-slot:prepend>
                    <q-icon name="home" class="text-green-13" />
                    </template>
                </q-input>

                <q-input
                    v-model="EMAIL"
                    label="Email"
                    outlined
                    dense
                    :rules="[ val => val && val.length > 0 || 'Lengkapin data email nya']"
                >
                    <template v-slot:prepend>
                    <q-icon name="mail" class="text-green-13" />
                    </template>
                </q-input>

                <q-input
                  v-model="NO_TELPON"
                  type="number"
                  label="No Telpon"
                  outlined
                  dense
                  :rules="[ val => val && val.length > 0 || 'Lengkapin data no telp nya']"
                >
                  <template v-slot:prepend>
                  <q-icon name="call" class="text-green-13" />
                  </template>
                </q-input>

                <q-input
                v-model="PASSWORD"
                dense
                label="Password"
                type="password"
                outlined
                :rules="[ val => val && val.length > 0 || 'Lengkapin data password nya']"
                >
                <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
                </template>
                <template v-slot:prepend>
                <q-icon name="lock" class="text-green-13" />
                </template>
              </q-input>

                <div align="right">
                  <q-btn flat label="login" class="q-ml-md items-center" unelevated color="grey" :to="{ name: 'login' }   "/>
                  <q-btn type="submit" outline class="items-center" color="green" label="register" unelevated align="right"/>
                </div>
              </q-form>
            </q-item-section>
          </q-item>
        </div>
        <div class="col-xs-12 col-sm-7 col-md-8 q-mt-lg" v-if="$q.screen.md">
          <q-item class="justify-center">
          <q-item-section side>
            <img class="shadow-12 q-py-none q-ml-xl" src="~assets/greenhouse.jpg" style="width:85%"/>
          </q-item-section>
          </q-item>
        </div>
        </div>
      </q-page-container>
  </q-layout>
</template>
<script>
import { api } from 'src/boot/axios'
export default {
  data () {
    return {
      USERNAME: null,
      NAMA_GREENHOUSE: this.NAMA_GREENHOUSE,
      ALAMAT: this.ALAMAT,
      EMAIL: null,
      NO_TELPON: null,
      PASSWORD: null
    }
  },
  methods: {
    onSubmit () {
      api.post('users/create', {
        USERNAME: this.USERNAME,
        NAMA_GREENHOUSE: this.NAMA_GREENHOUSE,
        ALAMAT: this.ALAMAT,
        EMAIL: this.EMAIL,
        NO_TELPON: this.NO_TELPON,
        PASSWORD: this.PASSWORD,
        ROLE: '1'
      }).then((res) => {
        // console.log(res)
        if (res.data.status) {
          this.$q.notify({ color: 'teal-10', message: res.data.message, icon: 'ion-checkmark' })
          this.$router.push('/login')
        } else {
          this.$q.notify({ color: 'negative', message: res.data.message, icon: 'ion-close' })
        }
      })
    }
  }
}
</script>
