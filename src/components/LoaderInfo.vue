<template>
  <div class="loader-container">
    <div class="loader"></div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>

<style lang="scss">
.loader-container {
  text-align: center;
  font-family: 'Roboto', sans-serif;
}

.loader {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

p {
  font-size: 16px;
}
</style>