<script setup>
const route = useRoute()

const orderId = route.query.order_id
const error = route.query.error || 0
const message = route.query.message || 0
const invoiceId = route.query.invoice_id
</script>

<template>
  <div class="payment-result-page">

    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">

          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">

            <div class="card-body p-4 p-md-5 text-center">



              <!-- SUCCESS -->
              <template v-if="!error">

                <div class="result-icon success mx-auto mb-4">
                  <i class="bi bi-check-lg"></i>
                </div>

                <h1 class="fw-bold mb-3">
                  Paiement confirmé
                </h1>

                <h3>#{{invoiceId}}</h3>

                <p class="text-muted mb-4">
                  Votre paiement a été effectué avec succès.
                </p>

                <div v-if="orderId" class="order-box mb-4">
                  Commande N° <strong>#{{ orderId }}</strong>
                </div>

                <!-- French -->
                <div class="text-start mb-4">
                  <h4 class="fw-bold mb-3">
                    🎮 Merci pour votre commande !
                  </h4>

                  <p>
                    Votre paiement a été confirmé avec succès et votre demande est maintenant en préparation.
                  </p>

                  <p class="mb-2">
                    Notre équipe vous contactera directement sur WhatsApp afin de :
                  </p>

                  <ul class="list-unstyled custom-list">
                    <li>✔️ Finaliser la livraison du produit</li>
                    <li>✔️ Vous accompagner pour l’activation</li>
                    <li>✔️ Vous expliquer la méthode d’utilisation</li>
                    <li>✔️ Assurer le suivi si besoin</li>
                  </ul>

                  <div class="alert alert-warning rounded-3 mt-3 mb-0">
                    ⏳ Merci de rester joignable pour un traitement rapide.
                  </div>
                </div>

                <hr class="my-4" />

                <!-- Arabic -->
                <div class="text-end" dir="rtl">

                  <h4 class="fw-bold mb-3">
                    🎮 شكراً لطلبك!
                  </h4>

                  <p>
                    تم تأكيد عملية الدفع بنجاح، وطلبك الآن قيد التحضير.
                  </p>

                  <p class="mb-2">
                    سيتواصل معك فريقنا مباشرة عبر واتساب من أجل:
                  </p>

                  <ul class="list-unstyled custom-list">
                    <li>✔️ إتمام تسليم المنتج</li>
                    <li>✔️ مساعدتك في التفعيل</li>
                    <li>✔️ شرح طريقة الاستخدام</li>
                    <li>✔️ توفير المتابعة عند الحاجة</li>
                  </ul>

                  <div class="alert alert-warning rounded-3 mt-3 mb-0">
                    ⏳ يرجى البقاء متاحاً لتسريع معالجة طلبك.
                  </div>

                </div>

                <div class="support-box mt-4">

                  <div class="fw-bold mb-2">
                    <span class="me-2">Support Client</span>
                    خدمة الزبائن
                  </div>

                  <a
                      href="https://wa.me/213551007798"
                      target="_blank"
                      class="btn btn-success rounded-pill px-4 mb-2"
                  >
                    <i class="bi bi-whatsapp me-2"></i>
                    WhatsApp واتساب
                  </a>

                  <p class="text-muted small mb-3">
                    تحتاج مساعدة؟ فريق الدعم متوفر عبر واتساب.
                  </p>

                  <div class="mt-3 small text-muted">
                    0551007798
                  </div>

                </div>



              </template>

              <!-- FAILED -->
              <template v-else>

                <div class="result-icon failed mx-auto mb-4">
                  <i class="bi bi-x-lg"></i>
                </div>

                <h1 class="fw-bold mb-3">
                  Paiement échoué
                </h1>

                <p class="text-muted mb-4">
                  {{message}}
                </p>

                <div v-if="orderId" class="order-box mb-4">
                  Commande N° <strong>#{{ orderId }}</strong>
                </div>

                <!-- French -->
                <div class="text-start mb-4">

                  <h4 class="fw-bold mb-3">
                    Le paiement n’a pas été confirmé
                  </h4>

                  <p>
                    Votre transaction n’a pas pu être finalisée ou a été annulée.
                  </p>

                  <ul class="list-unstyled custom-list">
                    <li>• Vérifiez votre carte CIB / EDAHABIA</li>
                    <li>• Vérifiez votre solde</li>
                    <li>• Réessayez dans quelques minutes</li>
                  </ul>

                </div>

                <hr class="my-4" />

                <!-- Arabic -->
                <div class="text-end" dir="rtl">

                  <h4 class="fw-bold mb-3">
                    ❌ فشلت عملية الدفع
                  </h4>

                  <p>
                    لم يتم تأكيد عملية الدفع أو تم إلغاؤها.
                  </p>

                  <ul class="list-unstyled custom-list">
                    <li>• تحقق من بطاقة الذهبية أو CIB</li>
                    <li>• تحقق من الرصيد المتوفر</li>
                    <li>• حاول مرة أخرى بعد قليل</li>
                  </ul>

                </div>

              </template>

              <!-- ACTIONS -->
              <div class="d-grid gap-2 d-md-flex justify-content-center mt-5">

                <NuxtLink
                    to="/"
                    class="btn btn-dark px-4 py-2 rounded-pill"
                >
                  Accueil
                </NuxtLink>

                <NuxtLink
                    to="/shop"
                    class="btn btn-outline-dark px-4 py-2 rounded-pill"
                >
                  Boutique
                </NuxtLink>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css");

.payment-result-page {
  min-height: 100vh;
  background:
      radial-gradient(circle at top, rgba(0,0,0,.05), transparent 35%),
      #f8f9fa;
}

.result-icon {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 42px;
}

.result-icon.success {
  background: #198754;
}

.result-icon.failed {
  background: #dc3545;
}

.order-box {
  background: #f1f3f5;
  border: 1px dashed #ced4da;
  border-radius: 14px;
  padding: 12px 18px;
  display: inline-block;
}

.custom-list li {
  margin-bottom: 8px;
}

.support-box {
  background: #f8f9fa;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e9ecef;
}
</style>