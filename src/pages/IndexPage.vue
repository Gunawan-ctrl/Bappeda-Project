<template>
  <q-page padding>
    <q-table
    class="q-pa-none"
      title="Data Input"
      :rows="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="kecamatan" :props="props">
            {{ props.row.kecamatan }}
          </q-td>
          <q-td key="desa" :props="props">
            <q-badge color="green">
              {{ props.row.desa }}
            </q-badge>
          </q-td>
          <q-td key="rw" :props="props">
            <q-badge color="purple">
              {{ props.row.rw }}
            </q-badge>
          </q-td>
          <q-td key="rt" :props="props">
            <q-badge color="orange">
              {{ props.row.rt }}
            </q-badge>
          </q-td>
          <q-td key="namaAnggotaKeluarga" :props="props">
            <q-badge color="primary">
              {{ props.row.namaAnggotaKeluarga }}
            </q-badge>
          </q-td>
          <q-td key="noKK" :props="props">
            <q-badge color="teal">
              {{ props.row.noKK }}
            </q-badge>
          </q-td>
          <q-td key="nik" :props="props">
            <q-badge color="accent">
              {{ props.row.nik }}
            </q-badge>
          </q-td>
          <q-td key="eKtp" :props="props">
            <q-badge color="amber">
              {{ props.row.eKtp }}
            </q-badge>
          </q-td>
          <q-td key="akteKelahiran" :props="props">
            <q-badge color="green">
              {{ props.row.akteKelahiran }}
            </q-badge>
          </q-td>
          <q-td key="jenisKelamin" :props="props">
            <q-badge color="purple">
              {{ props.row.jenisKelamin }}
            </q-badge>
          </q-td>
          <q-td key="tglLahir" :props="props">
            <q-badge color="orange">
              {{ props.row.tglLahir }}
            </q-badge>
          </q-td>
          <q-td key="statusPerkawinan" :props="props">
            <q-badge color="primary">
              {{ props.row.statusPerkawinan }}
            </q-badge>
          </q-td>
          <q-td key="statusHubunganDenganKepalaKeluarga" :props="props">
            <q-badge color="teal">
              {{ props.row.statusHubunganDenganKepalaKeluarga }}
            </q-badge>
          </q-td>
          <q-td key="penghasilanPerbulan" :props="props">
            <q-badge color="accent">
              {{ props.row.penghasilanPerbulan }}
            </q-badge>
          </q-td>
          <q-td key="penggunaanHPDalamRumahTangga" :props="props">
            <q-badge color="amber">
              {{ props.row.penggunaanHPDalamRumahTangga }}
            </q-badge>
          </q-td>
          <q-td key="penyakitYangpPernahDiderita" :props="props">
            <q-badge color="green">
              {{ props.row.penyakitYangpPernahDiderita }}
            </q-badge>
          </q-td>
          <q-td key="keluargaMenerimaBantuan" :props="props">
            <q-badge color="purple">
              {{ props.row.keluargaMenerimaBantuan }}
            </q-badge>
          </q-td>
          <q-td key="sumberAirMinumUtama" :props="props">
            <q-badge color="orange">
              {{ props.row.sumberAirMinumUtama }}
            </q-badge>
          </q-td>
          <q-td key="sumberPeneranganUtama" :props="props">
            <q-badge color="primary">
              {{ props.row.sumberPeneranganUtama }}
            </q-badge>
          </q-td>
          <q-td key="bahanBakarAtauEnergiUtamaUntukMemasak" :props="props">
            <q-badge color="teal">
              {{ props.row.bahanBakarAtauEnergiUtamaUntukMemasak }}
            </q-badge>
          </q-td>
          <q-td key="penggunaanFasilitasTempatBuangAirBesar" :props="props">
            <q-badge color="accent">
              {{ props.row.penggunaanFasilitasTempatBuangAirBesar }}
            </q-badge>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  setup () {
    return {
      filter: '',
      columns: [
        {
          name: 'kecamatan',
          required: true,
          label: 'Kecamatan',
          align: 'left',
          field: row => row.kecamatan,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'desa', align: 'center', label: 'Desa', field: 'desa', sortable: true },
        { name: 'rw', label: 'RW', field: 'rw', sortable: true },
        { name: 'rt', label: 'RT', field: 'rt' },
        { name: 'namaAnggotaKeluarga', label: 'Nama Anggota Keluarga', field: 'namaAnggotaKeluarga' },
        { name: 'noKK', label: 'No KK', field: 'noKK' },
        { name: 'nik', label: 'NIK', field: 'nik' },
        { name: 'eKtp', label: 'E.Ktp', field: 'eKtp' },
        { name: 'akteKelahiran', label: 'Akte Kelahiran', field: 'akteKelahiran' },
        { name: 'jenisKelamin', label: 'Jenis Kelamin', field: 'jenisKelamin' },
        { name: 'tglLahir', label: 'Tgl Lahir', field: 'tglLahir' },
        { name: 'statusPerkawinan', label: 'Status Perkawinan', field: 'statusPerkawinan' },
        { name: 'statusHubunganDenganKepalaKeluarga', label: 'Status Hubungan Dengan Kepala Keluarga', field: 'statusHubunganDenganKepalaKeluarga' },
        { name: 'penghasilanPerbulan', label: 'Penghasilan Perbulan', field: 'penghasilanPerbulan' },
        { name: 'penggunaanHPDalamRumahTangga', label: 'Penggunaan HP Dalam Rumah Tangga', field: 'penggunaanHPDalamRumahTangga' },
        { name: 'penyakitYangpPernahDiderita', label: 'Penyakit Yang Pernah Diderita', field: 'penyakitYangpPernahDiderita' },
        { name: 'keluargaMenerimaBantuan', label: 'Keluarga Menerima Bantuan', field: 'keluargaMenerimaBantuan' },
        { name: 'sumberAirMinumUtama', label: 'Sumber Air Minum Utama', field: 'sumberAirMinumUtama' },
        { name: 'sumberPeneranganUtama', label: 'Sumber Penerangan Utama', field: 'sumberPeneranganUtama' },
        { name: 'bahanBakarAtauEnergiUtamaUntukMemasak', label: 'Bahan Bakar Atau Energi Utama Untuk Memasak', field: 'bahanBakarAtauEnergiUtamaUntukMemasak' },
        { name: 'penggunaanFasilitasTempatBuangAirBesar', label: 'Penggunaan Fasilitas Tempat BuangAir Besar', field: 'penggunaanFasilitasTempatBuangAirBesar' }
      ],

      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('http://192.168.43.172:5050/bappeda/get-all')
        .then((res) => {
          this.data = res.data.data
          console.log(this.data)
        })
    }
  }
}
</script>
