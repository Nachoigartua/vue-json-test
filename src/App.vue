<script setup>
import { ref, onMounted } from 'vue'

const camisetas = ref([])

onMounted(async () => {
  const res = await fetch(`${import.meta.env.BASE_URL}camisetas.json`)
  camisetas.value = await res.json()

  // Ajustar rutas de imagen también
  camisetas.value.forEach(c => {
    if (!c.imagen.startsWith('http')) {
      c.imagen = `${import.meta.env.BASE_URL.replace(/\/$/, '')}${c.imagen}`
    }
  })
})
</script>
