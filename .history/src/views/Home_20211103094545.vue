<template>
  <div>
    <el-container>
      <el-header style="  background-color: #333;" class="headering">
        <div class="box">
          <div>
            <i class="el-icon-video-camera-solid" style="font-size:30px"></i>
          </div>
          <div class="box1">
            <div class="homeing">
              <a href>HOME&nbsp;|&nbsp;首页</a>
            </div>
            <div class="commit" @click="butt">
              <a href>COMMITTEE&nbsp;|&nbsp;组委会</a>
            </div>
            <div class="Speaker">
              <a href>SPEAKER&nbsp;|&nbsp;发言人</a>
            </div>
            <div class="hist">
              <a href>HISTORY&nbsp;|&nbsp;历史</a>
            </div>
            <div class="conta">
              <a href>CONTACT &nbsp;|&nbsp;联系我们</a>
            </div>
          </div>
        </div>
      </el-header>
      <div style="height:60px"></div>
      <el-main style="padding:0px">
        <!-- 轮播图 -->
        <div>
          <el-carousel style="height:300px">
            <el-carousel-item v-for="item in data" :key="item" style="height:100%">
              <img :src="item.name" style="width:100%;height:100%" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-main>
      <div id="confer">
        <div class="Conference">Conference Committees</div>
      </div>
      <div></div>
    </el-container>
  </div>
</template>

<script>
import one from "../assets/VCG211247746810.jpg";
import tow from "../assets/VCG211241875295.jpg";
import three from "../assets/VCG41N1124651573.jpg";
import four from "../assets/VCG211149762808-YKW.jpg";
export default {
  props: {},
  data() {
    return {
      name: "",
      data: [
        {
          name: one
        },
        {
          name: tow
        },
        {
          name: three
        },
        {
          name: four
        }
      ]
    };
  },
  components: {},
  methods: {
    butt() {

    }
  },
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.headering {
  position: fixed;
  width: 100%;
  z-index: 999;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 14px;
  color: white;
  // position: fixed;
}
.box1 {
  cursor: pointer;
  justify-content: space-around;
  width: 80%;
  display: flex;
}

.homeing:hover {
  color: red;
}
a:link {
  text-decoration: none;
  color: white;
}
a:visited {
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: none;
  color: red;
}
a:active {
  text-decoration: none;
  color: white;
}
a:active {
  text-decoration: none;
}
.el-carousel {
  overflow-x: hidden;
  overflow-y: hidden;
}
.Conference {
  justify-content: center;
  display: flex;
  padding: 2%;
  font-size: 28px;
  font-weight: 700;
}
</style>
