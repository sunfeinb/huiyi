<template>
  <div>
          <el-main style="padding:0px">
        <!-- 轮播图 -->
        <div>
          <el-carousel style="height:300px">
            <el-carousel-item v-for="item in data" :key="item.value" style="height:100%">
              <img :src="item.name" style="width:100%;height:100%" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-main>
  </div>
</template>

<script>
import one from "../assets/VCG211247746810.jpg";
import tow from "../assets/VCG211241875295.jpg";
import three from "../assets/VCG41N1124651573.jpg";
import four from "../assets/VCG211149762808-YKW.jpg";
export default {
  name: '',
  props:{},
  data () {
    return {
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

</style>