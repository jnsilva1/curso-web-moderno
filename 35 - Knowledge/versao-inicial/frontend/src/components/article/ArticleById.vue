<template>
  <div class="article-by-id">
    <PageTitle icon="fa fa-file-o" :main="article.name" :sub="article.description"></PageTitle>
    <div class="article-content" v-html="article.content"></div>
  </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'
import PageTitle from '@/components/template/PageTitle.vue'
export default {
  name: 'ArticleById',
  components: {
    PageTitle,
  },
  data() {
    return {
      article: {},
    }
  },
  mounted() {
    const id = this.$route.params.id
    const url = `${baseApiUrl}/articles/${id}`
    axios.get(url).then((res) => {
      this.article = res.data
    })
  },
}
</script>

<style>
.article-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 25px;
}

.article-content pre {
  padding: 20px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-family: 'Courier New', Courier, monospace;
  background-color: #000c;
  color: #fffc;
}

.article-content img {
  max-width: 100%;
}

.article-content :last-child {
  margin-bottom: 0;
}
</style>
