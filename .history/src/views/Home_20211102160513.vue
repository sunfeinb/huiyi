<template>
  <div>
    <el-container>
  <el-header style="  background-color: #333;">
    <div class="box">
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
  props:{},
  data () {
    return {
      name:''
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.box{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 18px;
  color: white;
}
</style>
