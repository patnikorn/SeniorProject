<template>
  <div>
    <v-app-bar color="grey lighten-5" dense flat dark outlined>
      <v-toolbar-title>ANNOUNCEMENT</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="pt-5 pb-0">
          <div class="text-primary text-title text-center">
            ประกาศรับและเงื่อนไขของกลุ่มวิชา
          </div>
        </v-col>
        <v-col cols="12" class="pt-2 pb-0">
          <v-btn
            small
            depressed
            color="success"
            class="edit-btn"
            @click="addAnnouncement"
          >
            <v-icon left> mdi-plus-circle-outline </v-icon>
            เพิ่ม
          </v-btn>
          <br />
          <br />
          <div v-for="(item, n) in this.data" :key="item.id">
            <v-row justify="center">
              <v-col cols="1"> {{ n + 1 }} </v-col>
              <v-col cols="6" md="auto">
                {{ item.title }}
              </v-col>
              <v-col cols="3">
                <v-btn
                  icon
                  color="indigo"
                  @click="editAnnouncement(item.id, item.title, item.subTitle)"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>

                <v-dialog
                  v-model="deleteAnnoucement"
                  persistent
                  max-width="290"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      small
                      v-bind="attrs"
                      v-on="on"
                      color="error"
                      @click="setid(item.id)"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="text-primary">
                      ยืนยันการลบ
                    </v-card-title>
                    <v-card-text
                      >คุณแน่ใจหรือว่าต้องการลบประกาศนี้?</v-card-text
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="indigo"
                        text
                        @click="deleteAnnoucement = false"
                      >
                        ยกเลิก
                      </v-btn>
                      <v-btn 
                      color="error" 
                      text 
                      @click="deleteData()">
                        ยืนยัน
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
          </div>
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
      deleteAnnoucement: false,
      data: [],
      id: null,
    };
  },
  methods: {
    addAnnouncement() {
      this.$router.push("/teacher/announcement/create");
    },
    editAnnouncement(id, title, subTitle) {
      console.log(id, title, subTitle);
      this.$router.push({
        path: "/teacher/announcement/edit",
        query: { id: id, title: title, subTitle: subTitle },
      });
      // this.$router.push("/teacher/announcement/edit");
    },
    setid(id) {
      this.id = id;
    },
    deleteData() {
      console.log(this.id);
      this.deleteAnnoucement = false;
      Axios.get("https://server.dssi-ubu.cf/annoucement/delete/"+this.id).then(
        (res) => {
          console.log(res.data.data);
          const removeIndex = this.data.findIndex((t) => t.id === this.id);
          // remove object
          this.data.splice(removeIndex, 1);
        }
      );
    },
  },
  beforeMount() {
    Axios.get("https://server.dssi-ubu.cf/annoucement/getAll").then((res) => {
      console.log(res.data.data);
      this.data = res.data.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.edit-btn {
  float: right;
}
</style>
