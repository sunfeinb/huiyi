<template>
  <div>
    <el-container>
      <el-header style="  background-color: #333;">
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
      <el-main>
        <!-- 轮播图 -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      name: ""
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
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 14px;
  color: white;
  position: absolute;
}
.box1 {
  cursor: pointer;
  justify-content: space-around;
  width: 80%;
  display: flex;
}

.homeing:hover{
color: red;
}
.commit:hover{
  color: red;
}
.Speaker:hover{
  color: red;
}
.hist:hover{
  color: red;
}
.conta:hover{
  color: red;
}
</style>
