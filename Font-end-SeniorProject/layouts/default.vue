<template>
  <v-app>
    <nuxt>
      <Dialog />
    </nuxt>
  </v-app>
</template>

<script>
import Dialog from '~/components/Dialog'
export default {
  components: {
    Dialog
  }
}
</script>

<style lang="scss">
  .v-application{
    font-family: 'Kanit', sans-serif;
  }
  .v-toolbar__title{
    text-align: center;
    width: 100%;
    color: #000;
    font-weight: bold;
  }
  .v-application .primary{
    background-color: #fff !important;
    border-color: #fff !important;
  }
  .v-application .second{
    background-color: #010863 !important;
    border-color: #010863 !important;
  }
  .v-application .third{
    background-color: #BF0000 !important;
    border-color: #BF0000 !important;
  }
  .text-primary{
    color: #000;
  }
  .text-title{
    font-size: 20px;
    font-weight: bold;
  }
  .text-announce{
    font-size: 40px;
    font-weight: bold;
  }
  .text-title{
    font-weight: bold;
  }
  .w-100 {
    width: 100%;
  }
  .w-50 {
    width: 30%;
  }
  .my-btn {
    font-size: 20px !important;
    text-transform: none !important;
    height: auto !important;
    padding: 10px 0 !important;
  }

  .my-text-announce {
    margin-top: 200px;
  }
</style>>