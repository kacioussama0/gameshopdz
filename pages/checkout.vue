<script setup lang="ts">
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import CustomeSelect from "@/elements/CustomeSelect.vue";
import Header from "~/components/Header.vue";
import Header3 from "~/components/Header3.vue";
import cities from '../assets/cities.json'
import shipping from "../assets/shipping.json"
import {navigateTo} from "nuxt/app";
import { z } from "zod"


const checkoutSchema = z.object({
  first_name: z.string()
      .min(2, "Le prénom est requis")
      .max(50),

  last_name: z.string()
      .min(2, "Le nom est requis")
      .max(50),

  phone: z.string()
      .regex(/^(05|06|07)[0-9]{8}$/, "Numéro de téléphone invalide"),

  wilaya: z.string().min(2, "Veuillez sélectionner votre wilaya"),

  commune: z.string()
      .min(2, "Veuillez sélectionner votre commune"),

  shipping_method: z.object({
    method_id: z.string().min(1, "Choisissez un mode de livraison"),
    method_title: z.string(),
    total: z.number().min(0)
  }),

  terms: z.boolean().refine(val => val === true, {
    message: "Vous devez accepter les conditions"
  }),

  note: z.string().max(500).optional()
})


const errors = ref<any>({})



const { data: cart, pending, error, refresh } = await useFetch('/api/wc/cart', {
  credentials: 'include',
})



const items = computed(() => cart.value?.items ?? [])


const itemsCount = computed(() => cart.value?.items_count ?? 0)
const shippingCost = ref(0)

if(!items.value.length) {
  navigateTo('/cart')
}


const subTotal = computed(() => Number.parseFloat(cart.value?.totals?.total_price)  ?? 0)
const totalPrice = computed(() => Number.parseFloat(cart.value?.totals?.total_price) + shippingCost.value ?? 0)

const wilaya = ref(null)
const daira = ref(null)
const commune = ref(null)

const zone = ref({})

console.log(zone.value)

const form = reactive({
  first_name: '',
  last_name: '',
  phone: '',
  wilaya: '',
  commune: '',
  note: '',
  acceptedTerms: false,

})

const validateCheckout = () => {
  const result = checkoutSchema.safeParse({
    first_name: form.first_name,
    last_name: form.last_name,
    phone: form.phone,
    wilaya: form.wilaya,
    commune: form.commune,
    shipping_method: zone.value,
    terms: form.acceptedTerms,
    note: form.note
  })



  if (!result.success) {
    errors.value = {}

    result.error.issues.forEach(issue => {
      const key = issue.path[0]
      errors.value[key] = issue.message
    })

    return false
  }

  errors.value = {}
  return true

}

const submitOrder = async () => {

  if(!validateCheckout()) return;

  const order = await $fetch("/api/order", {
    method: "POST",
    body: {
      payment_method: "cod",
      payment_method_title: "Paiement à la livraison",

      items: items.value.map(i => ({
        product_id: i.id,
        quantity: i.qty,
        variation_id: i.variation_id || undefined
      })),

      billing: {
        first_name: form.first_name,
        last_name: form.last_name,
        phone: form.phone,
        email: "guest@gameshopdz.com",
        address_1: form.commune,
        city: form.commune,
        state: `DZ-${form.wilaya}`,
        country: "DZ",
        postcode: "00000"
      },

      shipping_address: {
        first_name: form.first_name,
        last_name: form.last_name,
        address_1: form.commune,
        city: form.commune,
        state: `DZ-${form.wilaya}`,
        country: "DZ",
        postcode: "00000"
      },

      shipping_method: {
        method_id: "flat_rate",
        method_title: zone.value.name,
        total: zone.value.cost
      },

      note: form.note
    }
  })

  console.log(order)
}


watch(shippingCost, (newValue, oldValue) => {
    totalPrice.value = totalPrice.value + newValue
})


const wilayaOptions = ref([
  { value: '', title: 'Veuillez sélectionner votre wilaya' , disabled: true , selected: true }
])

const communeOptions = ref([
  { value: '', title: 'Veuillez sélectionner votre commune' , disabled: true , selected: true }
])


function getCommune(wilayaCode) {



  form.commune = null;
  const wilaya = cities.filter((city) => city.wilaya_code === wilayaCode);

  const communes = wilaya.map((commune) => {
        return {
          "title": `${commune.commune_name_ascii} | ${commune.commune_name}`,
          "value": `${commune.commune_name_ascii} | ${commune.commune_name}`
        }
      }
  );

  communeOptions.value = communes.filter(
      (w, index, self) =>
          index === self.findIndex(x => x.title === w.title)
  ).sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  zone.value = shipping[wilayaCode];
  shippingCost.value = zone.value.methods[0].cost



  communeOptions.value.unshift({ value: '', title: 'Veuillez sélectionner votre commune' , disabled: true , selected: true })


}


onMounted(() => {


  const wilayas = cities.map((wilaya) => {

        return {
          'title': `${wilaya.wilaya_code} - ${wilaya.wilaya_name_ascii} | ${wilaya.wilaya_name}`,
          "value": wilaya.wilaya_code,
        }
      }

  );


  wilayaOptions.value = wilayas.filter(
      (w, index, self) =>
          index === self.findIndex(x => x.value === w.value)
  )


  wilayaOptions.value.unshift({ value: '', title: 'Veuillez sélectionner votre wilaya' , disabled: true , selected: true })
})



</script>

<template>


  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>




  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Validation de la commande" />
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
                  <p v-if="errors.first_name" class="text-danger">
                    {{ errors.first_name }}
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group m-b25">
                  <label class="label-title">Nom اللقب <span class="text-danger">*</span></label>
                  <input v-model="form.last_name"  class="form-control" />
                  <p v-if="errors.last_name" class="text-danger">
                    {{ errors.last_name }}
                  </p>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group m-b25">
                  <label class="label-title">Téléphone رقم هاتف <span class="text-danger">*</span></label>
                  <input v-model="form.phone"  class="form-control" />
                  <p v-if="errors.phone" class="text-danger">
                    {{ errors.phone }}
                  </p>
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

                  <p v-if="errors.wilaya" class="text-danger">
                    {{ errors.wilaya }}
                  </p>

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

                  <p v-if="errors.commune" class="text-danger">
                    {{ errors.commune }}
                  </p>
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
              <h5 class="mb-3"><i class="fa fa-box me-2"></i> Récapitulatif de la commande</h5>
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
                    <td class="price">{{subTotal}} DA</td>
                  </tr>
                  <tr class="title" v-if="zone.methods">
                    <td><h6 class="title font-weight-500 mt-3"><i class="fa fa-truck-fast me-2"></i> Mode de livraison</h6></td>
                    <td></td>
                  </tr>
                  <tr class="shipping" v-if="zone.methods">
                    <td>
                      <div class="custom-control custom-checkbox" v-for="(method,index) in zone.methods">
                        <input class="form-check-input radio" type="radio" name="shipping-radio" :checked="index == 0" :id="`shipping-radio-${index+1}`" :value="method.cost" v-model="shippingCost" />
                        <label class="form-check-label" :for="`shipping-radio-${index+1}`"> {{method.name}} </label>
                      </div>

                    </td>
                    <td class="price">{{shippingCost}} DA</td>
                  </tr>
                  <tr class="total">
                    <td>Total</td>
                    <td class="price fw-bold">{{totalPrice}} DA</td>
                  </tr>
                </tbody>
              </table>

              <h5 class="mb-3"><i class="fa fa-credit-card me-2"></i> Mode de paiement</h5>

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
                Vos données personnelles seront utilisées pour traiter votre commande et améliorer votre expérience sur notre site, conformément à notre politique de confidentialité.
              </p>
              <div class="form-group">
                <div class="custom-control custom-checkbox d-flex m-b15">
                  <input type="checkbox" class="form-check-input" id="agree"  v-model="form.acceptedTerms" :value="false" />
                  <label class="form-check-label" for="agree">J’ai lu et j’accepte les conditions générales.</label>
                </div>
                <p v-if="errors.terms" class="text-danger">
                  {{ errors.terms }}
                </p>
              </div>
              <button @click="validateCheckout"  class="btn btn-secondary w-100">Commander (طلب)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {{form}}
</template>
