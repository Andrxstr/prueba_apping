<template>
  <container class="container">
  <div class="profile-card">
    <div class="profile-card__image" @mouseover="animateImage" @mouseout="resetImage">
      <img :src="user.avatar" ref="profileImage"/>
    </div>
    <div class="profile-card__info" >
      <h2>{{ user.first_name }} {{ user.last_name }}</h2>
      <p>Correo: {{ user.email }}</p>
    </div>
  </div>
</container>
</template>

  <script>
  import { useDataStore } from '@/store';


  export default {
    data() {
      return {
        user: null,
      };
    },
    created() {
      const userId = this.$route.params.id;

      const user = useDataStore().users.find(user => user.id === parseInt(userId));

      if (user) {
        this.user = user;
      } 
    },

    methods: {
      animateImage() {
      const img = this.$refs.profileImage;
      img.style.transform = 'scale(1.1) rotate(3deg)';
      img.style.transition = 'transform 0.3s ease';
    },

    resetImage() {
      const img = this.$refs.profileImage;
      img.style.transform = 'scale(1) rotate(0deg)';
    }
    }
  };
  </script>

  <style scoped lang="scss">
  .container{
    display: flex;
    justify-content: center;
  }
  .profile-card {
    display: flex;
    background-color: #fff;
    // border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 60px; /* Añadido padding */
    width: 40%;
    align-items: center;
  }

  .profile-card__image {
    flex: 1;
    max-width: 200px;
    overflow: hidden;
    border-radius: 50%;
    border: 8px solid #4da1ff;
    cursor: pointer;
  }

  .profile-card__image img {
    // border-radius: 10%;
    width: 100%;
  // height: 90%;
  }

  .profile-card__info {
    flex: 2;
    padding: 1rem;
  }

  .profile-card__info h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .profile-card__info p {
    font-size: 1.5rem;
    color: #555;
  }
  </style>