<template>
  <div class="articles-by-category">
    <PageTitle icon="fa fa-folder-o" :main="category.name" sub="Categoria"></PageTitle>
    <ul>
        <li v-for="article in articles" :key="article.id">
            {{ article.name }}
        </li>
    </ul>
    <div class="load-more">
        <button v-if="loadMore" class="btn btn-lg btn-outline-primary" @click="getArticles">
            Carregar Mais Artigos
        </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'
import PageTitle from '@/components/template/PageTitle.vue'
export default {
  name: 'ArticlesByCategory',
  data() {
    return {
      articles: [],
      category: {},
      page: 1,
      loadMore: true,
    }
  },
  methods: {
    getCategory() {
      const url = `${baseApiUrl}/categories/${this.category.id}`
      axios.get(url).then((res) => {
        this.category = res.data
      })
    },
    getArticles() {
      const url = `${baseApiUrl}/categories/${this.category.id}/articles?page=${this.page}`
      axios.get(url).then((res) => {
        this.articles = this.articles.concat(res.data)
        this.loadMore = res.data.length >= 0
        this.page++
      })
    },
  },
  components: {
    PageTitle,
  },
  mounted() {
    this.category.id = this.$route.params.id
    this.getCategory()
    this.getArticles()
  },
}
</script>

<style>
.articles-by-category ul {
  list-style-type: none;
  padding: 0;
}
.articles-by-category .load-more {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
}
</style>
