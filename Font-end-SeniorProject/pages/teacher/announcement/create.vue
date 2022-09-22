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
              v-model="form.title"
              label="ชื่อหัวเรื่อง"
              auto-grow
              outlined
              dense
            ></v-text-field>
            <v-textarea
              outlined
              auto-grow
              v-model="form.subTitle"
              label="เขียนที่นี้"
            ></v-textarea>
            <v-btn
              depressed
              color="second"
              dark
              class="w-100 mt-5 my-btn"
              @click="submit"
              >ลงประกาศ</v-btn
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
      form: {
        title: "",
        subTitle: "",
      },
    };
  },
  methods: {
    validate() {
      let validated = true;
      const errors = [];
      const validatorField = ["title", "subTitle"];
      validatorField.forEach((field) => {
        if (this.form[field] == "") {
          validated = false;
          errors.push(`${field} ไม่สามารถว่างได้`);
        }
      });
      if (!validated) {
        this.$store.dispatch("setDialog", {
          isShow: true,
          title: "กรอกข้อมูลไม่สำเร็จ",
          message: errors.map((error) => error + "<br />").join(""),
        });
      }
      return validated;
    },
    submit() {
      const data = {
        title: this.form.title,
        subTitle: this.form.subTitle,
      };
      if (this.validate()) {
        this.$store.dispatch("setAnnoucement", this.form);
        // this.$router.push("/information/page2");
        Axios.post("https://server.dssi-ubu.cf/annoucement", data).then((res) => {
          console.log(res.data.data);
          this.$router.push("/teacher/announcement");
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-form {
  padding: 0 30px;
}
</style>
