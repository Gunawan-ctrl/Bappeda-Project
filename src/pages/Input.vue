<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page padding>
    <div class="row q-mb-sm col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
          </div>
          <div class="col" style="max-width: fit-content;">
            <q-banner rounded inline-actions class="text-white bg-teal-10">
              <div class="text-h6">Input Data</div>
              <div>input data penduduk</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>

  <div class="q-pa-md" style="max-width: 400px">
    <q-form
    class="q-gutter"
      @submit="onSubmit"
    >
      <q-input
        filled
        v-model="kecamatan"
        label="Kecamatan"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan nama kecamatan anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="desa"
        label="Desa"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan nama desa anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="rw"
        label="RW"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan RW anda']"
        />
        <q-input
      class="q-mb-md"
        filled
        v-model="rt"
        label="RT"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan RT anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="namaAnggotaKeluarga"
        label="Nama Anggota Keluarga"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan nama anggota keluarga anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="noKK"
        label="No KK"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan no KK anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="nik"
        label="Nik"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan nik anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="eKtp"
        label="E.Ktp"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan eKtp anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="akteKelahiran"
        label="Akte Kelahiran"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan akte Kelahiran anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="jenisKelamin"
        label="Jenis Kelamin"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan jenis Kelamin anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="tglLahir"
        label="Tgl Lahir"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan tgl Lahir anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="statusPerkawinan"
        label="Status Perkawinan"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan status Perkawinan anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="statusHubunganDenganKepalaKeluarga"
        label="Status Hubungan Dengan Kepala Keluarga"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan Status Hubungan Dengan Kepala Keluarga anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="penghasilanPerbulan"
        label="Penghasilan Perbulan"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan penghasilan Perbulan anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="penggunaanHPDalamRumahTangga"
        label="Penggunaan HP Dalam Rumah Tangga"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan Penggunaan HP Dalam Rumah Tangga anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="penyakitYangpPernahDiderita"
        label="Penyakit Yang Pernah Diderita"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan Penyakit Yang Pernah Diderita anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="keluargaMenerimaBantuan"
        label="Keluarga Menerima Bantuan"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan Keluarga Menerima Bantuan anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="sumberAirMinumUtama"
        label="Sumber Air Minum Utama"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan Sumber Air Minum Utama anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="sumberPeneranganUtama"
        label="Sumber Penerangan Utama"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan Sumber Penerangan Utama anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="bahanBakarAtauEnergiUtamaUntukMemasak"
        label="Bahan Bakar Atau Energi Utama Untuk Memasak"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan Bahan Bakar Atau Energi Utama Untuk Memasak anda']"
      />
      <q-input
      class="q-mb-md"
        filled
        v-model="penggunaanFasilitasTempatBuangAirBesar"
        label="Penggunaan Fasilitas Tempat Buang Air Besar"
        :rules="[ val => val && val.length > 0 || 'silahkan masukkan Penggunaan Fasilitas Tempat Buang Air Besar anda']"
      />
      <div class="q-pa-md q-gutter-sm">
          <q-btn
            unelevated
            icon="add"
            label="Tambah Data"
            color="teal-10" type="submit" />

          <q-btn
            flat
            label="Kembali"
            to="dataTanaman"
            color="teal-10"/>
      </div>
    </q-form>
  </div>
  </q-page>
</template>

<script>
import api from 'axios'
export default {
  data () {
    return {
      kecamatan: null,
      desa: null,
      rw: null,
      rt: null,
      namaAnggotaKeluarga: null,
      noKK: null,
      nik: null,
      eKtp: null,
      akteKelahiran: null,
      jenisKelamin: null,
      tglLahir: null,
      statusPerkawinan: null,
      statusHubunganDenganKepalaKeluarga: null,
      PenghasilanPerbulan: null,
      penggunaanHPDalamRumahTangga: null,
      penyakitYangpPernahDiderita: null,
      keluargaMenerimaBantuan: null,
      sumberAirMinumUtama: null,
      sumberPeneranganUtama: null,
      bahanBakarAtauEnergiUtamaUntukMemasak: null,
      penggunaanFasilitasTempatBuangAirBesar: null
    }
  },
  methods: {
    onSubmit () {
      api.post('http://192.168.43.172:5050/bappeda/input/', {
        kecamatan: this.kecamatan,
        desa: this.desa,
        rw: this.rw,
        rt: this.rt,
        namaAnggotaKeluarga: this.namaAnggotaKeluarga,
        noKK: this.noKK,
        nik: this.nik,
        eKtp: this.eKtp,
        akteKelahiran: this.akteKelahiran,
        jenisKelamin: this.jenisKelamin,
        tglLahir: this.tglLahir,
        statusPerkawinan: this.statusPerkawinan,
        statusHubunganDenganKepalaKeluarga: this.statusHubunganDenganKepalaKeluarga,
        PenghasilanPerbulan: this.PenghasilanPerbulan,
        penggunaanHPDalamRumahTangga: this.penggunaanHPDalamRumahTangga,
        penyakitYangpPernahDiderita: this.penyakitYangpPernahDiderita,
        keluargaMenerimaBantuan: this.keluargaMenerimaBantuan,
        sumberAirMinumUtama: this.sumberAirMinumUtama,
        sumberPeneranganUtama: this.sumberPeneranganUtama,
        bahanBakarAtauEnergiUtamaUntukMemasak: this.bahanBakarAtauEnergiUtamaUntukMemasak,
        penggunaanFasilitasTempatBuangAirBesar: this.penggunaanFasilitasTempatBuangAirBesar
      }).then((res) => {
        console.log(res)
        if (res.data.status === true) {
          this.$router.push('/dashboard')
          this.$q.notify({
            message: res.data.message,
            color: 'teal-10',
            icon: 'ion-checkmark'
          })
        } else {
          this.$q.notify({
            message: res.data.message,
            color: 'teal-10',
            icon: 'ion-close'
          })
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
