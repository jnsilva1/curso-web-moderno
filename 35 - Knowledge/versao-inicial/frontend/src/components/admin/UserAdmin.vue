<template>
  <div class="user-admin">
    <b-table hover stripped :items="users" :fields="fields">

    </b-table>
  </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'
export default {
  name: 'UserAdmin',
  data() {
    return {
      mode: 'save',
      user: {},
      users: [],
      fields: [
        { key: 'id', label: 'Código', sortable: true },
        { key: 'name', label: 'Nome', sortable: true },
        { key: 'email', label: 'E-mail', sortable: true },
        {
          key: 'admin',
          label: 'Administrador',
          sortable: true,
          formatter: (value) => (value ? 'Sim' : 'Não'),
        },
        {
          key: 'actions',
          label: 'Ações',
          class: 'text-center',
          thClass: 'text-center',
        },
      ],
    }
  },
  methods: {
    loadUsers() {
      axios.get(`${baseApiUrl}/users`).then(({ data }) => {
        this.users = data
      })
    },
  },
  mounted() {
    this.loadUsers()
  },
}
</script>

<style>
</style>
