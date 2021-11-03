<template>
  <div>
    <el-container>
      <el-header style="  background-color: #333;" class="headering">
        <div class="box">
          <div>
            <i class="el-icon-video-camera-solid" style="font-size:30px"></i>
          </div>
          <div class="box1">
            <div class="homeing">HOME&nbsp;|&nbsp;首页</div>
            <div class="commit">COMMITTEE&nbsp;|&nbsp;组委会</div>
            <div class="Speaker">SPEAKER&nbsp;|&nbsp;发言人</div>
            <div class="hist">HISTORY&nbsp;|&nbsp;历史</div>
            <div class="conta">CONTACT &nbsp;|&nbsp;联系我们</div>
          </div>
        </div>
      </el-header>
      <div style="height:60px"></div>
      <el-main>
        <!-- 轮播图 -->
        <div style="width:80%">
          <el-carousel style="height:300px" :autoplay=false> 
            <el-carousel-item v-for="item in data" :key="item">
              <img :src="item.name" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-main>
      <div>
        123
      </div>
    </el-container>
  </div>
</template>

<script>
import one from "../assets/VCG211247746810.jpg"
import tow from "../assets/VCG2182ba126dd.jpg"
import three from "../assets/VCG41N1124651573.jpg"
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
        }
      ]
    };
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.headering {
  position: fixed;
  width: 100%;
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
.commit:hover {
  color: red;
}
.Speaker:hover {
  color: red;
}
.hist:hover {
  color: red;
}
.conta:hover {
  color: red;
}
</style>
