<template>
  <Header class="fixed-top" />
  <hr class="my-0">

  <body class="min-vh-100">

    <!-- Option -->
    <div class="cardtop rounded-0">
      <div class="container d-flex pe-4 py-0">
        <div class="me-auto d-flex my-3">
          <img src="@/assets/img/green-list.png" class="p-2 ps-0" />
          <div class="m-auto ms-2">
            <h4 class="my-auto">Pilih reviewer CV kamu</h4>
            <p id="info1" class="my-auto">Paket {{ packet }} • Tipe/Format {{ type }} </p>
          </div>
        </div>
        <div class="vr"></div>
        <div class="mx-4 p-4 my-auto">
          <button class="btn btn-secondary" @click="$router.go(-1)">Ubah informasi CV kamu</button>
        </div>
      </div>
    </div>
    <!-- End Option -->


    <!-- Reviewer Wrapper -->
    <div class="p-2 container d-flex gap-4">

      <!-- Filters -->
      <div class="col-4 p-2 border-0">
        <div class="d-flex">
          <h4 class="me-auto my-auto pb-2">Filter</h4>
          <a class="my-auto text-decoration-none" href="">RESET</a>
        </div>

        <div class="card gap-1 p-4 border-0">

          <!-- Rating -->
          <h5>Rating</h5>
          <div v-for="rt in ratings" class="form-check">
            <input class="form-check-input" type="checkbox" :value="rt" v-model="rate" @change="filterRating(rt)">
            <label class="form-check-label ms-2">{{ rt }}</label>
          </div>
          <!-- End Rating -->

          <hr>

          <!-- Harga -->
          <h5>Harga</h5>
          <div v-for="pr in prices" class="form-check">
            <input class="form-check-input" type="checkbox" :value="pr" v-model="price" @change="filterPrice(pr)">
            <label class="form-check-label ms-2">{{ pr }}</label>
          </div>
          <!-- End Harga -->

        </div>
        <!-- End Filters -->

      </div>

      <!-- Reviewers -->
      <div class="border-0 w-100 p-2">
        <p class="my-2">Menampilkan {{ reviewers.length }} reviewer CV terbaik dengan harga terbaik</p>

        <!-- Reviewers Cards -->
        <div v-for="reviewer in reviewers" :key="reviewer.id" class="card px-4 py-2 border-0 mb-3">
          <div class="d-flex flex-row pt-3">
            <img :src="reviewer.Foto" class="profpic my-auto">
            <div class="w-100 m-auto px-4">
              <h4 class="my-1">{{ reviewer.nama }}</h4>
              <p class="my-1 mb-2">{{ reviewer.Pekerjaan }}</p>
              <div class="pill-wrapper d-flex gap-2 my-1 fw-small">
                <span class="rounded-pill px-2 pill-1">Recruiter</span>
                <span class="rounded-pill px-2 pill-2">Profesional Writer</span>
                <span class="rounded-pill px-2 pill-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#FFC33C"
                    class="bi bi-star-fill mb-1" viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  {{ reviewer.Rating }}
                </span>
              </div>
            </div>
          </div>
          <div class="info m-2 fw-small d-flex">
            <div class="m-2 d-flex gap-4">
              <a class="my-auto" href="">Detail harga</a>
              <a class="my-auto" href="">Detail Reviewer</a>
              <a class="my-auto" href="">Lihat Testimonial</a>
              <a class="my-auto" href="">Kebijakan</a>
            </div>
            <div class="m-auto me-0 d-flex gap-2 my-1">
              <router-link to="" class="btn btn-light fw-small">KIRIM PESAN</router-link>
              <router-link :to="{ name: 'payment', params: { id: reviewer.id } }" class="btn btn-primary fw-small">PILIH
              </router-link>
            </div>
          </div>
        </div>
        <!-- End Reviewers Cards -->

      </div>
      <!-- End Reviewers -->

    </div>
    <!-- End Reviewer Wrapper -->

  </body>

</template>



<script>
import Header from '../../components/header/header.vue'

export default {
  name: 'cari',
  components: {
    Header
  },
  props: ['packet', 'type'],
  data() {
    return {
      ratings: ['4-5', '2-3', '1'],
      prices: ['Rp 99.000 - 119.000', 'Rp 120.000 - 159.000', 'Rp 160.000 - 259.000'],
      reviewers: [],
      rate: [],
      price: [],
    }
  },
  methods: {
    filterRating(r) {
      if (this.reviewers.length > 0) {
        this.reviewers = this.reviewers.filter(post => {
          if (r == this.ratings[0]) {
            return post.Rating >= 4 && post.Rating <= 5
          } else if (r == this.ratings[1]) {
            return post.Rating >= 2 && post.Rating <= 4
          } else {
            return post.Rating < 2
          }
        })
      }
    },
    filterPrice(p) {
      if (this.reviewers.length > 0) {
        this.reviewers = this.reviewers.filter(post => {
          if (p == this.prices[0]) {
            return post.Harga < 120000
          } else if (p == this.prices[1]) {
            return post.Harga >= 120000 && post.Harga < 160000
          } else {
            return post.Harga >= 160000
          }
        })
      }
    },
  },
  mounted() {
    fetch('https://629a2b907b866a90ec4afcf3.mockapi.io/Probation')
      .then(res => res.json())
      .then(res => this.reviewers = res)
      .catch(err => console.log(err.message))
  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
@import '../cari-reviewer/cari-reviewer.scss';
</style>