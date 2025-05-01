<template>
  <div class="container">
    <h1>Camisetas Históricas de Independiente</h1>
    <div class="camisetas">
      <div v-for="camiseta in camisetas" :key="camiseta.anio" class="card">
        <img :src="camiseta.imagen" :alt="'Camiseta ' + camiseta.anio" />
        <h2>{{ camiseta.anio }}</h2>
        <p>{{ camiseta.descripcion }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const camisetas = ref([])

onMounted(async () => {
  const res = await fetch('/camisetas.json')
  camisetas.value = await res.json()
})
</script>

<style>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
}
.camisetas {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}
.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  background: #f9f9f9;
}
.card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
