<template>
  <Header />

  <!-- Option -->
  <div class="container my-5 py-5 vh-100" id="option">

    <div class="text-wrapper mb-4 w-75">
      <p class="text-mysin">PLATFORM #1 UNTUK ACE CV ANDA</p>
      <h1 class="fw-bold">Review CV kamu, capai pekerjaan impian kamu</h1>
      <p class="my-3">Growlab adalah solusi untuk kamu mendapatkan CV terbaik yang disusun secara khusus oleh team
        profesional kami.
      </p>
    </div>

    <!-- Card -->
    <div class="card border-0">

      <!-- Title Card -->
      <div class="m-4 d-flex">
        <h2 class="me-auto mb-0">Review CV kamu</h2>
        <router-link class="my-auto info" to="">
          Kami di sini untuk membantu. Punya pertanyaan? Hubungi kami
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666666"
              class="bi bi-info-circle align-middle opacity-75" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path
                d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </span>
        </router-link>
      </div>
      <!-- End Title Card -->

      <!-- Button Option -->
      <div class="card-body d-flex gap-3 pt-0 mx-2">

        <!-- Paket -->
        <div class="dropdown open flex-fill col-sm-6">
          <button class="btn btn-white w-100" type="button" id="triggerId" data-bs-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <div class="p-2 d-inline d-flex text-start">
              <img src="../../assets/img/green-list.png" class="p-2" alt="">
              <div class="d-flex flex-column w-75 mx-3 middle">
                <h4 class="my-auto">Paket</h4>
                <p class="my-auto">{{ packet }}</p>
              </div>
              <img src="../../assets/icon/arrow.png" class="sm-icon" alt="">
            </div>
          </button>

          <div class="dropdown-menu w-100" aria-labelledby="triggerId">
            <a v-for="p in packets" @click="togglePacket(p)" class="dropdown-item" href="#">
              {{ p }}
            </a>
          </div>
        </div>
        <!-- End Paket -->

        <!-- Tipe CV -->
        <div class="dropdown open flex-fill col-sm-6">
          <button class="btn btn-white w-100" type="button" id="triggerId" data-bs-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <div class="p-2 d-inline d-flex text-start">
              <img src="../../assets/img/yellow-list.png" class="p-2" alt="">
              <div class="d-flex flex-column w-75 mx-3">
                <h4 class="my-auto">Tipe/Format CV Kamu</h4>
                <p id="type" class="my-auto">{{ type }}</p>
              </div>
              <img src="../../assets/icon/arrow.png" class="sm-icon" alt="">
            </div>
          </button>

          <div class="dropdown-menu w-100" aria-labelledby="triggerId">
            <a v-for="t in types" @click="toggleType(t)" class="dropdown-item" href="#">
              {{ t }}
            </a>
          </div>
        </div>
        <!-- End Tipe CV -->

      </div>
      <!-- End Bottom Option -->

      <!-- Detail -->
      <div class="d-flex w-100 gap-3">
        <div class="d-flex flex-row m-4 mt-3 gap-3 me-5">
          <div>
            <p class="mb-0">Reviewer yang siap</p>
            <h3>10 Orang</h3>
          </div>
          <div class="vr"></div>
          <div>
            <p class="mb-0">Estimasi CV kamu selesai</p>
            <h3>2 Hari</h3>
          </div>
        </div>
        <div class="flex-fill d-inline-flex grey ms-5 mt-1">
          <img src="@/assets/img/red-price.png" class="m-auto p-2" alt="">
          <div class="m-auto ms-2 w-50">
            <h3 class="my-auto">Rp 129.000</h3>
            <p class="my-auto">Estimasi harga paket review kamu</p>
          </div>
          <router-link :to="{ name: 'cari', params: { packet: packet, type: type } }" class="button m-auto">Cari
            Reviewer Kamu
          </router-link>
        </div>
      </div>
      <!-- End Detail -->

    </div>
    <!-- End Card -->

  </div>
  <!-- End Option -->

  <!-- About -->
  <div id="about" class="py-5 min-vh-100">
    <h4 class="text-center text-mysin my-4">#GROWTOGETHER</h4>
    <h1 class="text-center fw-bold my-4">Tingkatkan karir kamu bersama kami</h1>
    <p class="text-center w-50 mx-auto my-4">Kami memberikan kamu kualitas CV tiada tanding dengan pelayanan kami yang
      dapat
      memberikan anda lebih banyak peluang karir</p>
    <div class="text-center w-75 mx-auto border-0 d-flex flex-row p-5 my-5">
      <div class="mx-auto">
        <img src="@/assets/img/analytics-icon.png">
        <h4 class="my-4 fw-bold">Tingkatkan nilai CV</h4>
        <p>Tunjukkan kemampuan <br> yang hebat didalam CV <br> kamu </p>
      </div>
      <div class="vr"></div>
      <div class="mx-auto">
        <img src="@/assets/img/plan-icon.png">
        <h4 class="my-4 fw-bold">Capai tujuan karir anda</h4>
        <p class="">CV yang selaras dengan tujuan <br> karir kamu akan meningkatkan <br> peluang kamu untuk diterima</p>
      </div>
      <div class="vr"></div>
      <div class="mx-auto">
        <img src="@/assets/img/mail-icon.png">
        <h4 class="my-4 fw-bold">Hasil terbukti</h4>
        <p>Dapatkan lebih banyak <br> wawancara untuk kamu <br> dalam 60 hari.</p>
      </div>
    </div>
    <div class="mx-auto my-5 d-flex gap-2">
      <router-link :to="{ name: 'cari', params: { packet: packet, type: type } }" class="button ms-auto">Cari Reviewer
        Kamu
      </router-link>
      <button class="btn btn-outline-dark me-auto">Lihat Contoh Pekerjaan Kami</button>
    </div>
  </div>
  <!-- End About -->

  <Footer />
</template>

<script>
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'

export default {
  name: 'home',
  components: {
    Header, Footer
  },
  data() {
    return {
      packet: "Premium",
      type: "ATS Friendly",
      packets: ["Premium", "Review Konten CV", "Konsultasi CV"],
      types: ["ATS Friendly", "Resume", "CV Kreatif"],
    }
  },
  methods: {
    // Method untuk mengganti paket ke paket yang dipilih
    togglePacket(x) {
      this.packet = x
    },
    // Method untuk mengganti tipe CV ke tipe CV yang dipilih
    toggleType(x) {
      this.type = x
    }
  }
}

</script>

<style scoped lang="scss">
@import './home.scss';
</style>