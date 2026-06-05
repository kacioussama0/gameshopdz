<template>
  <main class="error-page">
    <div class="error-card">

      <img src="/assets/images/logo.svg" class="mb-4" height="250px"  alt="logo" />

      <h1>{{ error?.statusCode || 500 }}</h1>

      <h2>
        {{ error?.statusCode === 404 ? 'Page introuvable' : 'Une erreur est survenue' }}
      </h2>

      <p>
        {{ error?.statusCode === 404
          ? 'La page que vous cherchez n’existe pas ou a été déplacée.'
          : 'Veuillez réessayer plus tard.'
        }}
      </p>

      <NuxtLink to="/" class="btn btn-primary new-gradient" @click="handleError">
        Retour à l’accueil
      </NuxtLink>
    </div>
  </main>
</template>

<script setup>
defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background:       radial-gradient(circle at top, rgba(255,255,255,0.06), transparent 35%),
  linear-gradient(180deg, #0f2f6d 0%, #6a3df0 100%);;
}

.error-card {
  max-width: 520px;
  width: 100%;
  text-align: center;
  background: #fff;
  border-radius: 20px;
  padding: 48px 28px;
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
}

.error-card h1 {
  font-size: 96px;
  font-weight: 800;
  margin: 0;
  color: #6416DC;
}

.error-card h2 {
  margin-top: 10px;
  font-size: 28px;
}

.error-card p {
  margin: 16px 0 28px;
  color: #666;
}


</style>