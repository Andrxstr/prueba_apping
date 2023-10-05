<template>
  <div class="home">
    <LoadClients />
  </div>
</template>

<script>
// @ is an alias to /src
import LoadClients from '@/components/LoadClients.vue'

export default {
  name: 'HomeView',
  components: {
    LoadClients
  }
}
</script>
