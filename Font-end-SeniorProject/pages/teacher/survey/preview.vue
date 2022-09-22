<template>
  <div>
    <v-app-bar color="grey lighten-5" dense flat dark outlined>
      <v-toolbar-title>SURVEY</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row justify="center">
        <v-col cols="11">
          <div class="mt-2 text-primary text-title text-center">
            {{ title }}
          </div>
        </v-col>
        <v-col cols="11">
          <div>
            <p>
              {{ subTitle }}
            </p>
          </div>
        </v-col>
        <v-col cols="11">
          <hr />
          <p class="mt-4">โปรดเลือกเพียง 1 กลุ่มวิชา</p>
          <v-radio-group v-model="subject" column>
            <v-radio
              label="กลุ่มวิชาวิทยาการข้อมูล (Data Science)"
              value="DataScience"
            ></v-radio>
            <v-radio
              label="กลุ่มวิชานวัตกรรมซอฟต์แวร์ (Software Innovation)"
              value="SoftwareInnovation"
            ></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="11">
          <hr />
          <p class="mt-4">
            {{ question }}
          </p>
          <v-radio-group v-model="accept" column>
            <v-radio label="ยอมรับ" value="Yes"></v-radio>
          </v-radio-group>
          <v-btn
            depressed
            color="second"
            dark
            class="w-100 mt-5 my-btn"
            @click="submit"
            >บันทึกแบบสำรวจ</v-btn
          >
          <v-btn
            depressed
            color="third"
            dark
            class="w-100 mt-5 my-btn"
            @click="back"
            >ย้อนกลับ</v-btn
          >
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
      subject: null,
      accept: null,
    };
  },
  methods: {
    back() {
      // this.$router.push("/teacher/survey/create");
      this.$router.push({
        path: "/teacher/survey/create",
        query: {
          // id: this.id,
          title: this.title,
          subTitle: this.subTitle,
          question: this.question,
          numberStudentDS: this.numberStudentDS,
          numberStudentSI: this.numberStudentSI,
        },
      });
    },
    submit() {
      const data = {
        title: this.title,
        subTitle: this.subTitle,
        question: this.question,
        numberStudentDS: this.numberStudentDS,
        numberStudentSI: this.numberStudentSI,
      };
      console.log(
        this.title,
        this.subTitle,
        this.question,
        this.numberStudentDS,
        this.numberStudentSI
      );
      Axios.post("https://server.dssi-ubu.cf/survey", data).then((res) => {
        console.log(res.data.data);
        this.$router.push("/teacher/survey");
      });
    },
  },
  beforeMount() {
    console.log(
      this.$route.query.title,
      this.$route.query.subTitle,
      this.$route.query.question,
      this.$route.query.numberStudentDS,
      this.$route.query.numberStudentSI
    );
    this.title = this.$route.query.title;
    this.subTitle = this.$route.query.subTitle;
    this.question = this.$route.query.question;
    this.numberStudentDS = this.$route.query.numberStudentDS;
    this.numberStudentSI = this.$route.query.numberStudentSI;
  },
};
</script>
