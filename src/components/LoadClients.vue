<template>
  <!-- Campo de búsqueda y botón -->
  <div class="search-container">
    <input
      v-model="searchQuery"
      placeholder="Buscar por nombre o correo electrónico"
    />
    <button @click="searchUsers">Buscar</button>
  </div>

  <div class="filter-hint">
    <span class="icon">
      ?
      <!-- Ícono de interrogación -->
    </span>
    El filtro se aplica solo a la página actual.
  </div>

  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="image"><img class="avatar" :src="user.avatar" /></td>
          <!-- Nueva columna con imagen -->
          <td>
            <router-link :to="{ name: 'UserDetails', params: { id: user.id } }">
              {{ user.first_name }} {{ user.last_name }}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <LoaderInfo v-if="loading" message="Buscando datos en la API..." />
  <div class="pagination">
    <button v-if="paginas > 1" class="prev" @click="prevPage">Anterior</button>
    <span class="page-number">Página {{ paginas }}</span>
    <button v-if="paginas < 2" class="next" @click="nextPage">Siguiente</button>
  </div>
</template>

<script>
import { useDataStore } from "@/store";
import LoaderInfo from "@/components/LoaderInfo.vue";

export default {
  components: {
    LoaderInfo,
  },
  methods: {
    fetchData() {
      useDataStore().fetchData();
    },
    nextPage() {
      const currentPage = useDataStore().getCurrentPage;
      useDataStore().setCurrentPage(currentPage + 1);
      this.fetchData();
    },
    prevPage() {
      const currentPage = useDataStore().getCurrentPage;
      if (currentPage > 1) {
        useDataStore().setCurrentPage(currentPage - 1);
        this.fetchData();
      }
    },
    fetchDataWithLoader() {
      setTimeout(() => {
        this.fetchData();
      }, 3000);
    },
    searchUsers() {
      const query = this.searchQuery.toLowerCase();
      const filteredUsers = this.users.filter(
        (user) =>
          user.first_name.toLowerCase().includes(query) ||
          user.last_name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
      );
      useDataStore().setUsers(filteredUsers);
      this.loading = false;
    },
  },

  computed: {
    users() {
      return useDataStore().users;
    },

    paginas() {
      return useDataStore().getCurrentPage;
    },

    loading() {
      return useDataStore().loading;
    },
  },
  mounted() {
    this.fetchDataWithLoader();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

.search-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  max-width: 750px;
  margin: 0 auto;
  margin-top: 30px;
}

.search-container input {
  padding: 5px;
  margin-right: 10px;
  flex: 1;
}

.search-container button {
  width: 150px;
  padding: 8px 10px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.filter-hint {
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: #888;
  margin-top: 5px;
}

.icon {
  width: 14px;
  display: flex;
  justify-content: space-around;
  margin-right: 5px;
  background-color: blue;
  color: white;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
}

// Estilos para la tabla
.table-container {
  max-width: 800px;
  margin: 0 auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 6px;
    text-align: left;
  }

  th {
    background-color: #3498db;
    color: #fff;
  }

  tr,
  th {
    text-align: center;
  }
}

.image {
  display: flex;
  justify-content: space-around;
}

.avatar {
  border-radius: 50%;
  width: 125px;
  height: 125px;
}

.table tbody tr:nth-child(even) {
  background-color: #f8f8f8;
}

.table tbody tr:hover {
  background-color: #f2f2f2;
}

.table td {
  position: relative;
}

.table td a {
  text-decoration: none;
  color: inherit;
}

.table td a:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: transparent;
  transition: background 0.3s;
}

.table td a:hover:after {
  background: #3498db;
}

.table td a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

// Estilos para la paginación
.pagination {
  text-align: center;
  font-family: "Roboto", sans-serif;

  button {
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    background-color: #e74c3c;
    color: #fff;
    cursor: pointer;
    border-radius: 3px;
    font-size: 14px;
  }

  .page-number {
    font-weight: bold;
    margin: 0 5px;
    font-size: 16px;
  }
}

// Estilos para el loader
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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

//Estilos campo busqueda
.search-container {
  margin-bottom: 20px;
}

.search-container input {
  padding: 5px;
  margin-right: 10px;
}

.search-container button {
  padding: 5px 10px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
