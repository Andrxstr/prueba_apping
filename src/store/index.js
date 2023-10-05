import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({
    users: [],
    loading: true,
    paginas: 1,
    error: null,
    searchQuery: '',
  }),

  getters: {
    getUserById: (state) => (id) => {
      return state.users.find((user) => user.id === id);
    },
    getCurrentPage: (state) => {
      return state.paginas;
    },
    getError: (state) => {
      return state.error
    }
  },

  actions: {
    async fetchData() {
      this.loading = true;
      try {
      const response = await fetch(`https://reqres.in/api/users?page=${this.paginas}`);
      const data = await response.json();
      this.setUsers(data.data);
      this.error = null;
      } catch (error) {
        this.error = 'Error al cargar los datos. Por favor intenta nuevamente más tarde'
      } finally {
      this.loading = false;
      }
    },

    setUsers(users) {
      this.users = users;
    },

    setCurrentPage(page) {
      this.paginas = page;
    },

    setSearchQuery(query) {
      this.searchQuery = query;
    },

  },
});
