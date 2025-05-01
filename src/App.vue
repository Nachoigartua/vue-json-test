<template>
  <div>
    <h1>Probando JSON</h1>
    <pre>{{ datos }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const datos = ref(null)

onMounted(async () => {
  const res = await fetch('/datos.json')
  datos.value = await res.json()
})
</script>
