<template>
    <Header />

    <div class="page bg-light">
        <div class="container py-4">
            <a class="d-inline text-decoration-none m-3" @click="$router.go(-1)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-left mx-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
                Kembali
            </a>

            <div class="d-flex gap-4 m-3">

                <!-- Left Card -->
                <div class="card p-4 h-auto">
                    <h3 class="mb-3">Pengajuan Review CV</h3>

                    <!-- Stepper -->
                    <div class="step-wrapper d-flex my-3">
                        <div class="d-flex">
                            <h5 class="border border-3 border-warning text-center rounded-circle my-auto me-2">1</h5>
                            <div class="step-text my-auto">
                                <p class="fw-bold m-0">Ajukan CV</p>
                                <p class="m-0">Pastikan CV dalam format .PDF</p>
                            </div>
                        </div>
                        <hr class="my-auto ms-2">
                        <div class="d-flex">
                            <h5 class="border border-3 text-center rounded-circle my-auto mx-2">2</h5>
                            <div class="step-text my-auto">
                                <p class="fw-bold m-0">Reviewer menyetujui</p>
                            </div>
                        </div>
                        <hr class="my-auto ms-2">
                        <div class="d-flex">
                            <h5 class="border border-3 text-center rounded-circle my-auto mx-2">3</h5>
                            <div class="step-text my-auto">
                                <p class="fw-bold m-0">Bayar biaya penanganan</p>
                            </div>
                        </div>
                        <hr class="my-auto ms-2">
                        <div class="d-flex">
                            <h5 class="border border-3 text-center rounded-circle my-auto mx-2">4</h5>
                            <div class="step-text my-auto">
                                <p class="fw-bold m-0">Selesai</p>
                            </div>
                        </div>
                    </div>
                    <!-- Stepper End -->

                    <div class="mt-4 d-flex">

                        <!-- Informasi Penyewa -->
                        <div class="me-5">
                            <h4>Informasi penyewa</h4>
                            <div class="my-3">
                                <h6 class="fw-bold m-0">Nama</h6>
                                <p class="small">Chres Charlilo</p>
                            </div>
                            <div class="my-3">
                                <h6 class="fw-bold m-0">Nomor HP</h6>
                                <p class="small">0895701771096</p>
                            </div>
                            <div class="my-3">
                                <h6 class="fw-bold m-0">Paket</h6>
                                <p class="small">{{ packet }}</p>
                            </div>
                            <div class="my-3">
                                <h6 class="fw-bold m-0">Tipe/Format CV</h6>
                                <p class="small">{{ type }}</p>
                            </div>

                            <div class="h-25"></div>
                            <router-link class="text-danger small text-decoration-none" to="/">Ubah Informasi CV
                            </router-link>

                        </div>
                        <!-- Informasi Penyewa End -->

                        <div class="vr"></div>

                        <!-- Form -->
                        <div class="ms-4">
                            <h4>Catatan tambahan</h4>

                            <form action="" method="post">
                                <label class="my-1">Penjelasan terkait pengajuan review CV dan tujuanmu</label>
                                <textarea class="form-control mx-auto w-100 mb-3" id="description"
                                    placeholder="Misal: saya ingin CV yang saya berikan dirancang sesuai dengan bidang pekerjaan saya sebagai Product Manager."
                                    rows="3"></textarea>

                                <label class="my-1">Kategori pekerjaan kamu</label>
                                <select class="form-select w-auto" aria-label="Default select example">
                                    <option selected>Product Desain</option>
                                    <option value="1">Business Analyst</option>
                                    <option value="2">Software Engineer</option>
                                    <option value="3">Data Scientist</option>
                                </select>

                                <h4 class="mt-5">Upload Dokumen CV kamu</h4>
                                <div class="image d-flex flex-column">
                                    <label class="my-1" for="inputGroupFile">Mohon melengkapi dokumen berikut.</label>
                                    <input class="form-control" type="file">
                                </div>

                            </form>
                        </div>
                        <!-- End Form -->
                    </div>

                </div>
                <!-- End Left Card -->

                <!-- Receipt/Right Card -->
                <div class="">
                    <div class="card p-4 h-auto front">
                        <h3 class="mb-3">Pemesanan</h3>
                        <div class="my-3 d-flex">
                            <img :src="foto" class="rounded-circle">
                            <div class="mx-2 my-auto me-auto">
                                <h5 class="m-0 me-5">{{ nama }}</h5>
                                <p class="small m-0">{{ pekerjaan }}</p>
                            </div>
                            <span class="rounded-pill px-2 pill-3 my-auto small">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#FFC33C"
                                    class="bi bi-star-fill mb-1" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                {{ rating }}
                            </span>
                        </div>
                        <div class="info d-flex gap-4 mx-auto">
                            <a class="my-auto small" href="">Detail Reviewer</a>
                            <a class="my-auto small" href="">Lihat Testimonial</a>
                            <a class="my-auto small" href="">Kebijakan</a>
                        </div>
                        <hr class="w-auto">
                        <h4 class="mb-3">Rincian Pembayaran</h4>
                        <div class="d-flex">
                            <p class="small me-auto">Biaya penyedia jasa review</p>
                            <p class="price small">Rp {{ thousandSeparator(harga) }}</p>
                        </div>
                        <div class="d-flex">
                            <p class="small me-auto">Uang muka (DP) <br><small>10% dari harga jasa</small></p>
                            <p class="price small">Rp {{ thousandSeparator(DP) }}</p>
                        </div>
                        <div class="d-flex">
                            <p class="small me-auto">Biaya layanan growlab</p>
                            <p class="price small">Rp {{ thousandSeparator(layanan) }}</p>
                        </div>
                        <hr class="dash w-100 mt-0">
                        <div class="d-flex">
                            <p class="small me-auto my-auto">Total Pembayaran</p>
                            <p class="price h5 my-auto">Rp {{ thousandSeparator(total) }}</p>
                        </div>
                    </div>
                    <div class="w-100 back position-relative">
                        <button @click="" class="w-100 pt-5 pb-3 btn btn-primary osition-absolute">Ajukan Kepada
                            Reviewer</button>
                    </div>
                </div>

                <!-- End Receipt/Right Card -->

            </div>
        </div>
    </div>


</template>

<script>
import Header from "@/components/header/header.vue"

export default {
    name: 'payment',
    components: {
        Header
    },
    props: ['packet', 'type', 'id'],
    data() {
        return {
            foto: '',
            nama: '',
            pekerjaan: '',
            harga: 0,
            rating: 0,
            DP: 12900,
            layanan: 12000,
        }
    },
    methods: {
        thousandSeparator(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    },
    mounted() {
        fetch('https://629a2b907b866a90ec4afcf3.mockapi.io/Probation/' + this.id)
            .then(res => res.json())
            .then(res => {
                this.foto = res.Foto;
                this.nama = res.nama;
                this.pekerjaan = res.Pekerjaan;
                this.harga = res.Harga;
                this.rating = res.Rating
            })
            .catch(err => console.log(err.message))
    },
    computed: {
        total() {
            return parseInt(this.harga) + parseInt(this.DP) + parseInt(this.layanan)
        }
    }
}
</script>

<style scoped lang="scss">
@import './payment.scss';
</style>