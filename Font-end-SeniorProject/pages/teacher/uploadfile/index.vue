<template>
  <div>
    <v-app-bar color="grey lighten-5" dense flat dark outlined>
      <v-toolbar-title>UPLOAD FILE</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="pt-5 pb-0">
          <div class="text-primary text-title text-center">
            อัพโหลดไฟล์เกรดของนักศึกษา
          </div>
        </v-col>
        <v-col cols="12">
          <div class="text-center">
            หมายเหตุ* กรุณาอัพโหลดเป็นไฟล์ .xlsx เท่านั้น
          </div>
          <v-form class="pt-5 pb-0">
            <v-file-input
              label="File input"
              outlined
              dense
              accept=".xlsx"
              @change="uploadFile"
            ></v-file-input>
          </v-form>
        </v-col>
      </v-row>
      <v-row justify="center">
      <v-col cols="12">
        <v-form class="pt-0 pb-0">
          <div class="text-center pt-0 pb-5">
            กรุณาทำตารางรายชื่อตามที่ตัวอย่างได้ให้ไว้
          </div>
          <v-img
            max-height="500"
            max-width="700"
            src="https://cdn.discordapp.com/attachments/962111901213556756/973451884885069854/examplefile.png"
          ></v-img>
        </v-form>
      </v-col>
      <v-col cols="12">
        <v-form class="pt-0 pb-0">
          <v-btn
            depressed
            color="second"
            dark
            class="w-100 mt-5 my-btn"
            @click="handleSubmit"
            >อัพโหลดไฟล์</v-btn
          >
        </v-form>
      </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      files: null,
    };
  },
  methods: {
    uploadFile(event) {
      this.files = event;
    },
    handleSubmit() {
      const formData = new FormData();
      formData.append("files", this.files);
      axios
        .post("https://server.dssi-ubu.cf/filedata/upload", formData, {})
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.v-form {
  padding: 0 30px;
}
</style>
