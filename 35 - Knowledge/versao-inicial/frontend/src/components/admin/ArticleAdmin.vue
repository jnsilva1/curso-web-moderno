<template>
  <div class="article-admin">
    <b-form>
      <input type="hidden" id="article-id" v-model="article.id">
          <b-form-group label="Nome" label-for="article-name">
            <b-form-input
              id="article-name"
              v-model="article.name"
              type="text"
              placeholder="Informe o Nome do Artigo"
              :readonly="mode === 'remove'"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Descrição" label-for="article-description">
            <b-form-input
              id="article-description"
              v-model="article.description"
              type="text"
              placeholder="Informe o Descrição do Artigo"
              :readonly="mode === 'remove'"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Imagem (URL)" label-for="article-imageUrl" v-if="mode === 'save'">
            <b-form-input
              id="article-imageUrl"
              v-model="article.imageUrl"
              type="text"
              placeholder="Informe a URL da Imagem"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Categoria" label-for="article-category" v-if="mode === 'save'">
            <b-form-select
              id="article-categoryId"
              v-model="article.categoryId"
              :options="categories"
              :value-field="'id'"
              :text-field="'path'"
              placeholder="Selecione a Categoria"
            ></b-form-select>
          </b-form-group>

          <b-form-group label="Autor" label-for="article-userId" v-if="mode === 'save'">
            <b-form-select
              id="article-userId"
              v-model="article.userId"
              :options="users"
              :value-field="'id'"
              :text-field="'name'"
              placeholder="Selecione o Autor"
            ></b-form-select>
          </b-form-group>

          <b-form-group label="Conteúdo" label-for="article-content" v-if="mode === 'save'">
            <VueEditor v-model="article.content" placeholder="Informe o Conteúdo do Artigo..."/>
          </b-form-group>


          <b-button variant="primary" v-if="mode === 'save'" @click="save">
            Salvar
          </b-button>
          <b-button variant="danger" v-if="mode === 'remove'" @click="remove">
            Excluir
          </b-button>
          <b-button class="ml-2" @click="reset">
            Cancelar
          </b-button>

    </b-form>
    <hr /> 
    <b-table hover stripped :items="articles" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button
          variant="warning"
          size="sm"
          @click="loadarticle(data.item)"
          title="Editar"
        >
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button
          variant="danger"
          size="sm"
          class="ml-2"
          @click="loadarticle(data.item, 'remove')"
          title="Excluir"
        >
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import axios from 'axios'
import { baseApiUrl, showError } from '@/global'
export default {
  name: 'ArticleAdmin',
  components: {
    VueEditor,
  },
  data() {
    return {
      mode: 'save',
      article: {},
      articles: [],
      categories: [],
      users: [],
      page: 1,
      limit: 0,
      count: 0,
      fields: [
        { key: 'id', label: 'Código', sortable: true },
        { key: 'name', label: 'Nome', sortable: true },
        { key: 'description', label: 'Descrição', sortable: true },
        { key: 'actions', label: 'Ações', class: 'text-center', thClass: 'text-center' },
      ],
    }
  },
  methods: {
    loadarticles() {
      axios.get(`${baseApiUrl}/articles`).then(({ data: res }) => {
        this.articles = res.data
        this.count = res.count
        this.limit = res.limit
      })
    },
    loadCategories() {
      axios.get(`${baseApiUrl}/categories`).then(({ data }) => {
        this.categories = data
      })
    },
    loadUsers() {
      axios.get(`${baseApiUrl}/users`).then(({ data }) => {
        this.users = data
      })
    },
    reset() {
      this.mode = 'save'
      this.article = {}
      this.loadarticles()
    },
    save() {
      const id = this.article.id ? `/${this.article.id}` : ''
      const url = `${baseApiUrl}/articles${id}`
      const method = this.article.id ? 'put' : 'post'

      axios[method](url, this.article)
        .then(() => {
          this.reset()
          this.$toasted.global.defaultSuccess()
        })
        .catch(showError)
    },
    remove() {
      const url = `${baseApiUrl}/articles/${this.article.id}`
      axios
        .delete(url)
        .then(() => {
          this.reset()
          this.$toasted.global.defaultSuccess()
        })
        .catch(showError)
    },
    loadarticle(article, mode = 'save') {
      this.mode = mode
      axios.get(`${baseApiUrl}/articles/${article.id}`).then(({ data }) => {
        this.article = data
      })
    },
  },
  mounted() {
    this.loadarticles()
    this.loadCategories()
    this.loadUsers()
  },
}
</script>

<style>
</style>
