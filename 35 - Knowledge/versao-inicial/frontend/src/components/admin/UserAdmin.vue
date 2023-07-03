<template>
  <div class="user-admin">
    <b-form>
        <input type="hidden" id="user-id" v-model="user.id">
        <b-row>
            <b-col md="6" sm="12">
                <b-form-group label="Nome:" label-for="user-name">
                    <b-form-input id="user-name" v-model="user.name" type="text" placeholder="Informe o nome do usuário" required :readonly="readonly"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col md="6" sm="12">
                <b-form-group label="E-mail:" label-for="user-email">
                    <b-form-input id="user-email" v-model="user.email" type="email" placeholder="Informe o e-mail do usuário" required :readonly="readonly"></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>
        <b-form-checkbox id="user-admin" v-model="user.admin" class="mt-3 mb-3" v-show="!readonly">
            Administrador?
        </b-form-checkbox>
        <b-row v-show="!readonly">
            <b-col md="6" sm="12">
                <b-form-group label="Senha:" label-for="user-password">
                    <b-form-input id="user-password" v-model="user.password" type="password" placeholder="Informe a senha do usuário" required></b-form-input>
                </b-form-group>
            </b-col>
            <b-col md="6" sm="12">
                <b-form-group label="Confirmação de senha:" label-for="user-confirm-password">
                    <b-form-input id="user-confirm-password" v-model="user.confirmPassword" type="password" placeholder="Confirme a senha do usuário" required></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-button 
                    variant="primary" 
                    v-if="mode === 'save'"
                    @click="save"
                    >
                    Salvar
                </b-button>
                <b-button 
                variant="danger" 
                    v-if="mode === 'remove'"
                    @click="remove"
                >
                Excluir
                </b-button>
                <b-button 
                    class="ml-2"
                    @click="reset"
                    >
                Cancelar
                </b-button>
        </b-col>
    </b-row>
    </b-form>
    <hr/>
    <b-table hover stripped :items="users" :fields="fields">
        <template slot="actions" slot-scope="data">
            <b-button 
                variant="warning" 
                size="sm"
                class="mr-2"
                @click="loadUser(data.item, 'save')"
            >
            <i class="fa fa-pencil"></i>
            </b-button>
            <b-button 
                variant="danger" 
                size="sm"
                @click="loadUser(data.item, 'remove')"
            >
            <i class="fa fa-trash"></i>
            </b-button>
        </template>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl, showError } from '@/global'
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
  computed: {
    readonly() {
      return this.mode != 'save'
    },
  },
  methods: {
    loadUsers() {
      axios.get(`${baseApiUrl}/users`).then(({ data }) => {
        this.users = data
      })
    },
    reset() {
      this.mode = 'save'
      this.user = {}
      this.loadUsers()
    },
    save() {
      const method = this.user.id ? 'put' : 'post'
      const id = this.user.id ? `/${this.user.id}` : ''
      const url = `${baseApiUrl}/users${id}`

      axios[method](url, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess()
          this.reset()
        })
        .catch(showError)
    },
    remove() {
      const url = `${baseApiUrl}/users/${this.user.id}`

      axios
        .delete(url)
        .then(() => {
          this.$toasted.global.defaultSuccess()
          this.reset()
        })
        .catch(showError)
    },
    loadUser(user, mode = 'save') {
      this.mode = mode
      this.user = { ...user }
    },
  },
  mounted() {
    this.loadUsers()
  },
}
</script>

<style>
</style>
