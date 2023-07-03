<template>
  <div class="category-admin">
    <b-form>
      <input type="hidden" id="category-id" v-model="category.id">
      <b-row>
        <b-col>
          <b-form-group label="Nome:" label-for="category-name">
            <b-form-input
              id="category-name"
              v-model="category.name"
              type="text"
              placeholder="Informe o nome da categoria"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Categoria Pai" label-for="category-parent">
            <b-form-select
              id="category-parent"
              v-model="category.parentId"
              :options="categories"
              :value-field="'id'"
              :text-field="'path'"
              placeholder="Selecione a categoria pai"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button variant="primary" v-if="mode === 'save'" @click="save">
            Salvar
          </b-button>
          <b-button variant="danger" v-if="mode === 'remove'" @click="remove">
            Excluir
          </b-button>
          <b-button class="ml-2" @click="reset">
            Cancelar
          </b-button>
        </b-col>
      </b-row>
    </b-form>
    <hr /> 
    <b-table hover stripped :items="categories" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button
          variant="warning"
          size="sm"
          @click="loadCategory(data.item)"
          title="Editar"
        >
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button
          variant="danger"
          size="sm"
          class="ml-2"
          @click="loadCategory(data.item, 'remove')"
          title="Excluir"
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
  name: 'CategoryAdmin',
  data() {
    return {
      mode: 'save',
      category: {},
      categories: [],
      fields: [
        { key: 'id', label: 'Código', sortable: true },
        { key: 'name', label: 'Nome', sortable: true },
        { key: 'path', label: 'Caminho', sortable: true },
        { key: 'actions', label: 'Ações', class: 'text-center', thClass: 'text-center' },
      ],
    }
  },
  methods: {
    loadCategories() {
      axios.get(`${baseApiUrl}/categories`).then(({ data }) => {
        this.categories = data
      })
    },
    reset() {
      this.mode = 'save'
      this.category = {}
      this.loadCategories()
    },
    save() {
      const id = this.category.id ? `/${this.category.id}` : ''
      const url = `${baseApiUrl}/categories${id}`
      const method = this.category.id ? 'put' : 'post'

      const category = { ...this.category }
      delete category.path

      axios[method](url, category)
        .then(() => {
          this.reset()
          this.$toasted.global.defaultSuccess()
        })
        .catch(showError)
    },
    remove() {
      const url = `${baseApiUrl}/categories/${this.category.id}`
      axios
        .delete(url)
        .then(() => {
          this.reset()
          this.$toasted.global.defaultSuccess()
        })
        .catch(showError)
    },
    loadCategory(category, mode = 'save') {
      this.mode = mode
      this.category = { ...category }
    },
  },
  mounted() {
    this.loadCategories()
  },
}
</script>

<style>
</style>
