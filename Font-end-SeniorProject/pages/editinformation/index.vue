<template>
  <div>
    <v-app-bar color="grey lighten-5" dense flat dark outlined>
      <v-toolbar-title>EDIT INFORMATION</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row justify="center">
        <v-col cols="12">
          <div class="mt-8 text-primary text-title text-center">
            แก้ไขข้อมูลเพิ่มเติม
          </div>
        </v-col>
        <v-col cols="12">
          <v-form class="pt-5 pb-0">
            <v-text-field
              v-model="form.userFirstName"
              label="ชื่อ (กรุณาใส่คำนำหน้า)"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              v-model="form.userLastName"
              label="นามสกุล"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              v-model="form.userIdNumber"
              label="รหัสนักศึกษา / รหัสอาจารย์"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              v-model="form.email"
              label="อีเมล์"
              outlined
              dense
            ></v-text-field>
            <v-btn
              depressed
              color="second"
              dark
              class="w-100 mt-5 my-btn"
              @click="submit"
              >บันทึก</v-btn
            >
            <v-btn
              depressed
              color="third"
              dark
              class="w-100 mt-5 my-btn"
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
      form: {
        userFirstName: "",
        userLastName: "",
        userIdNumber: "",
        email: "",
      },
    };
  },

  methods: {
    validate() {
      let validated = true;
      const errors = [];
      const validatorField = [
        "userFirstName",
        "userLastName",
        "userId",
        "email",
      ];
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
        id: "6213e19f38386c22e8d2bb57",
        userFirstName: this.form.userFirstName,
        userLastName: this.form.userLastName,
        userIdNumber: this.form.userIdNumber,
        email: this.form.email,
      };
      if (this.validate()) {
        this.$store.dispatch("setRegister", this.form);
        // this.$router.push("/register/page2");
        Axios.post("https://server.dssi-ubu.cf/info/update", data).then((res) =>
          console.log(res.data.data)
        );
      }
    },
    cancel() {},
    get() {},
  },
  beforeMount() {
    Axios.get("https://server.dssi-ubu.cf/info/62172344b9525d3364fda46e").then(
      (res) => {
        console.log(res.data.data[0].id);
        this.form.userFirstName = res.data.data[0].userFirstName;
        this.form.userLastName = res.data.data[0].userLastName;
        this.form.userIdNumber = res.data.data[0].userIdNumber;
        this.form.email = res.data.data[0].email;
      }
    );
  },
};
</script>

<style lang="scss" scoped>
.v-form {
  padding: 0 30px;
}
</style>
