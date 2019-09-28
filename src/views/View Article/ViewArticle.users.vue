<template>
  <div>
    <div class="mt-3 ml-3 mr-3" v-for="(user, key) in data" :key="key">
      <div class="mt-1 view-article-user">
        <div class="d-flex align-items-center">
          <img
            class="avatar"
            src="https://cdna.artstation.com/p/assets/images/images/016/840/134/large/leonard-grosoli-render-01.jpg?1553674810"
          />
          <div class="ml-3">{{ user.name }}</div>
        </div>

        <div class="view-article-user-input">
          <a
            v-theme="{
                    color: 'secondaryFont',
                    background: 'button',
                    shadow: false,
                    focus: {
                      background: 'primaryFocus',
                      border: 'primaryFocus'
                    },
                    hover: {
                      background: 'primaryHover',
                      border: 'primaryHover'
                    },
                    border: 'button'
                  }"
            target="_blank"
            rel="noopener noreferrer"
            class="btn mb-1 mt-1"
            :href="'mailto:'.concat(user.email)"
          >Contact</a>
          <base-input
            class="input-group-alternative mb-1 mt-1 view-article-user-input-mail"
            placeholder="Email"
            :value="user.email"
          />
          <i
            v-if="showDelete"
            class="fas fa-trash mb-1 mt-1"
            style="cursor: pointer;"
            @click="$emit('remove', key)"
          />
          <!--  <div class="d-flex align-items-center"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    data: {},
    showDelete: Boolean
  }
})
export default class ViewArticleUsers extends Vue {}
</script>

<style lang="sass">
.view-article-user
  display: grid
  grid-template-columns: auto 1fr
.view-article-user-input
  display: flex
  align-items: center
  justify-content: flex-end
.view-article-user-input-mail
  margin: 1rem 2rem
  width: 300px
@media screen and ( max-width: 1000px )
  .view-article-user
    grid-template-columns: auto
  .view-article-user-input
    justify-content: flex-start
  .view-article-user-input-mail
    width: 280px

  .btn
    padding: 0.3rem
@media screen and ( max-width: 600px )
  .view-article-user-input
    margin-top: 1rem
    flex-direction: column
  .view-article-user-input-mail
    margin: 1rem 0.2rem
    width: 270px
</style>