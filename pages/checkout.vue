<script setup lang="ts">
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import CustomeSelect from "@/elements/CustomeSelect.vue";
import Header from "~/components/Header.vue";
import Header3 from "~/components/Header3.vue";
import cities from '../assets/cities.json'


const { data: cart, pending, error, refresh } = await useFetch('/api/wc/cart', {
  credentials: 'include',
})

const items = computed(() => cart.value?.items ?? [])
const itemsCount = computed(() => cart.value?.items_count ?? 0)
const totalPrice = computed(() => cart.value?.totals?.total_price ?? 0)

const wilaya = ref(null)
const daira = ref(null)
const commune = ref(null)

const form = reactive({
  first_name: '',
  last_name: '',
  phone: '',
  wilaya: null,
  commune: null,
  note: ''
})


const wilayaOptions = ref([
  { value: null, title: 'Veuillez sélectionner votre wilaya' , disabled: true , selected: true }
])

const communeOptions = ref([
  { value: null, title: 'Veuillez sélectionner votre commune' , disabled: true , selected: true }
])


function getCommune(wilayaCode) {

  form.commune = null;
  const wilaya = cities.filter((city) => city.wilaya_name_ascii === wilayaCode);

  const communes = wilaya.map((commune) => {
        return {
          "title": `${commune.commune_name_ascii} | ${commune.commune_name}`,
          "value": commune.commune_name_ascii
        }
      }
  );

  communeOptions.value = communes.filter(
      (w, index, self) =>
          index === self.findIndex(x => x.title === w.title)
  ).sort((a, b) => {
    return a.title.localeCompare(b.title);
  });;

  communeOptions.value.unshift({ value: null, title: 'Veuillez sélectionner votre commune' , disabled: true , selected: true })


}


onMounted(() => {

  const wilayas = cities.map((wilaya) => {

        return {
          'title': `${wilaya.wilaya_code} - ${wilaya.wilaya_name_ascii} | ${wilaya.wilaya_name}`,
          "value": wilaya.wilaya_name_ascii,
        }
      }

  );


  wilayaOptions.value = wilayas.filter(
      (w, index, self) =>
          index === self.findIndex(x => x.value === w.value)
  )


  wilayaOptions.value.unshift({ value: null, title: 'Veuillez sélectionner votre wilaya' , disabled: true , selected: true })
})



</script>

<template>


  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>

  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Shop Checkout" />
    <!--Banner End-->

    <!-- inner page banner End-->
    <div class="content-inner-1">
      <div class="container">
        <div class="row shop-checkout">
          <div class="col-xl-8">
            <h4 class="title m-b15">Facturation & Expédition</h4>

            <form class="row">
              <div class="col-md-6">
                <div class="form-group m-b25">
                  <label class="label-title">Prénom الإ سم <span class="text-danger">*</span></label>
                  <input  v-model="form.first_name" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group m-b25">
                  <label class="label-title">Nom اللقب <span class="text-danger">*</span></label>
                  <input v-model="form.last_name"  class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group m-b25">
                  <label class="label-title">Téléphone رقم هاتف <span class="text-danger">*</span></label>
                  <input v-model="form.phone"  class="form-control" />
                </div>
              </div>


              <div class="col-md-12">
                <div class="m-b25">
                  <label class="label-title">Wilaya / ولاية <span class="text-danger">*</span></label>
                  <select class="form-control"  v-model="form.wilaya"  @click="getCommune(form.wilaya)">
                    <option v-for="wilaya in wilayaOptions" :value="wilaya.value" :disabled="wilaya.disabled" :selected="wilaya.selected">
                      {{wilaya.title}}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-md-12">
                <div class="m-b25">
                  <label class="label-title">Commune البلدية <span class="text-danger">*</span></label>
                  <select class="form-control" v-model="form.commune" >
                    <option v-for="commune in communeOptions" :value="commune.value" :disabled="commune.disabled" :selected="commune.selected">
                      {{commune.title}}
                    </option>
                  </select>
                </div>
              </div>


              <h4 class="title m-b15">Informations complémentaires</h4>

              <div class="col-md-12 m-b25">
                <div class="form-group">
                  <label class="label-title">معلومات إضافية حول طلبك (facultatif) </label>
                  <textarea id="comments" v-model="form.note"  placeholder="ملاحظة حول طلبك, إذا لزم الأمر" class="form-control" name="comment" cols="90" rows="5"></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="col-xl-4 side-bar">
            <h4 class="title m-b15">Votre commande</h4>
            <div class="order-detail sticky-top">
              <div class="cart-item style-1" v-for="item in items">
                <div class="dz-media">
                  <img :src="item.images[0].thumbnail" alt="/" />
                </div>
                <div class="dz-content">
                  <h6 class="title mb-0" style="width: 45%">{{ item.name }} <b>x {{ item.quantity }}</b></h6>
                  <span class="price">{{item.prices.price}} DA</span>
                </div>
              </div>

              <table>
                <tbody>
                  <tr class="subtotal">
                    <td>Sous-total</td>
                    <td class="price">{{totalPrice}} DA</td>
                  </tr>
                  <tr class="title">
                    <td><h6 class="title font-weight-500">Expédition (التوصيل)</h6></td>
                    <td></td>
                  </tr>
                  <tr class="shipping">
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input class="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1"> Free shipping </label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input class="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2"> Flat Rate: </label>
                      </div>
                    </td>
                    <td class="price">25.75</td>
                  </tr>
                  <tr class="total">
                    <td>Total</td>
                    <td class="price">$125.75</td>
                  </tr>
                </tbody>
              </table>

              <div class="accordion dz-accordion accordion-sm" id="accordionFaq1">
                <div class="accordion-item">
                  <div class="accordion-header" id="heading1">
                    <div
                      class="accordion-button collapsed custom-control custom-checkbox border-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      role="navigation"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      <input class="form-check-input radio" type="radio" checked name="flexRadioDefault" id="flexRadioDefault3" />
                      <label class="form-check-label" for="flexRadioDefault3">Paiement à la livraison (الدفع عند الإستلام)</label>
                    </div>
                  </div>
                  <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionFaq1">
                    <div class="accordion-body">
                      <p class="m-b0">
                        Payer à la livraison. Le prix de l’expédition (Livraison) compte les frais de livraison et services
                        الدفع عند التسليم. سعر الشحن (التوصيل) يشمل التوصيل والخدمة
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              <p class="text">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
                <RouterLink to="">privacy policy.</RouterLink>
              </p>
              <div class="form-group">
                <div class="custom-control custom-checkbox d-flex m-b15">
                  <input type="checkbox" class="form-check-input" id="basic_checkbox_3" />
                  <label class="form-check-label" for="basic_checkbox_3">I have read and agree to the website terms and conditions </label>
                </div>
              </div>
              <RouterLink to="/shop-checkout" class="btn btn-secondary w-100">Commander (طلب)</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
