<template lang="pug">
  main.home(aria-labelledby='main-title')
    header
      logo
    section.hero
      img(v-if='data.heroImage' :src='$withBase(data.heroImage)' :alt="data.heroAlt || 'hero'")
      h1#main-title(v-if='data.heroText !== null')
        | {{ data.heroText || $title || &apos;Hello&apos; }}
      p.description(v-if='data.tagline !== null')
        | {{ data.tagline || $description || &apos;Welcome to your VuePress site&apos; }}
      p.action(v-if='(data.shareText && data.shareLink) || (data.documentationText && data.documentationLink)')
        NavLink.action-button.is-decent(v-if="data.shareText && data.shareLink" :item='share')
        NavLink.action-button(v-if="data.documentationText && data.documentationLink" :item='documentation')
    .features(v-if='data.features && data.features.length')
      .feature(v-for='(feature, index) in data.features' :key='index')
        h2 {{ feature.title }}
        p(v-html="feature.details")
    content.theme-default-content.custom
      .footer(v-if='data.footer')
        | {{ data.footer }}
        span(v-if="data.copyright") &nbsp;| Copyright © {{ year }}
</template>

<script>

import NavLink from '@theme/components/NavLink.vue'
import Logo from '@theme/components/Logo.vue'

export default {
  name: 'Home',

  components: { NavLink, Logo },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    documentation () {
      return {
        link: this.data.documentationLink,
        text: this.data.documentationText
      }
    },

    share () {
      return {
        link: this.data.shareLink,
        text: this.data.shareText
      }
    },

    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display block
  header
    text-align: center
  #main-title
    font-weight: 300
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
      // color: #7b7b7b
      margin-bottom: 2rem
      font-weight: 300
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
      & + .action-button
        margin-left: 6px
      &.is-decent
        background-color $alternativeAccentColor
        border-bottom 1px solid darken($alternativeAccentColor, 10%)
        &:hover
          background-color lighten($alternativeAccentColor, 10%)
      &.external svg
        display: none
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
