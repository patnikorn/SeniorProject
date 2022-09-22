<template>
  <div>
    <v-app-bar color="grey lighten-5" dense flat dark outlined>
      <v-toolbar-title>ANNOUNCEMENT</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row justify="center">
      <v-col cols="12">
        <div class="mt-8 text-primary text-announce text-center">
          คุณได้รับการอนุมัติ!
        </div>
      </v-col>
      <v-col cols="12">
        <div class="mt-8 text-center">
          กลุ่มวิชา {{this.$route.query.title}}
        </div>
      </v-col>
      <v-col cols="12">
        <div class="my-text-announce text-center">
          หรือสามารถยื่นเรื่องย้ายกลุ่มวิชาได้ ที่หน้าเมนูหลัก <br />
          เลือกฟังก์ชั่น “ยื่นเรื่องย้ายกลุ่มวิชา”
        </div>
      </v-col>
      </v-row>
    </v-container>
  </div>
</template>
  
