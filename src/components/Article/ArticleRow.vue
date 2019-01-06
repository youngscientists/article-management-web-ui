<template>
  <tr class="clickable-row" :modal="article.id">
    <td>{{article.title}}</td>
    <td>{{article.date}}</td>
    <td>{{article.name}}</td>
    <td>{{article.subject}}</td>
    <td>{{article.type}}</td>
    <td class="status-cell" value="+ articles[i].status +">{{article.status}}</td>
  </tr>
</template>

<script>
export default {
  name: "ArticleRow",
  props: {
    article: Object
  }
};
</script>

<style>
</style>
