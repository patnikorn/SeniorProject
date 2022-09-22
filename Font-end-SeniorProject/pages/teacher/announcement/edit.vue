<template>
  <div>
    <v-app-bar color="grey lighten-5" dense flat dark outlined>
      <v-toolbar-title>CREATE ANNOUNCEMENT</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <div class="pt-5 pb-0 text-primary text-title text-center">
            สร้างประกาศรับและเงื่อนไขของกลุ่มวิชา
          </div>
        </v-col>
        <v-col cols="12">
          <v-form class="pt-0 pb-0">
            <v-text-field
              v-model="title"
              label="ชื่อหัวเรื่อง"
              auto-grow
              outlined
              dense
            ></v-text-field>
            <v-textarea
              outlined
              auto-grow
              v-model="subTitle"
              label="เขียนที่นี้"
            ></v-textarea>
            <v-btn
              depressed
              color="second"
              dark
              class="w-100 my-btn"
              @click="submit()"
              >บันทึกและลงประกาศ</v-btn
            >
            <v-btn
              depressed
              color="third"
              dark
              class="mt-2 mb-0 w-100 my-btn"
              @click="cancel"
              >ยกเลิก</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    cancel() {
      this.$router.push("/teacher/announcement");
    },
    submit() {
      const data = {
        id: this.id,
        title: this.title,
        subTitle: this.subTitle,
      };
      console.log(this.id, this.title, this.subTitle);
      Axios.post("https://server.dssi-ubu.cf/annoucement/update", data).then(
        (res) => {
          console.log(res.data.data);
          this.$router.push("/teacher/announcement");
        }
      );
    },
  },
  beforeMount() {
    console.log(
      this.$route.query.id,
      this.$route.query.title,
      this.$route.query.subTitle
    );
    this.title = this.$route.query.title;
    this.subTitle = this.$route.query.subTitle;
    this.id = this.$route.query.id;
  },
};
</script>

<style lang="scss" scoped>
.v-form {
  padding: 0 30px;
}
</style>
