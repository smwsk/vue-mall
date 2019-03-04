<template>
  <div class="banner">
    <div
      ref="bg"
      class="bg"
      @mouseover="bgOver($refs.bg)"
      @mousemove="bgMove($refs.bg,$event)"
      @mouseout="bgOut($refs.bg)"
    >
      <transition name="fade">
        <div
          v-for="(item, i) in banner"
          v-if="i===mark"
          :key="i"
          style="position:absolute"
          @click="linkTo(item)"
          @mouseover="stopTimer"
          @mouseout="startTimer"
        >
          <img v-if="item.picUrl" :src="item.picUrl" class="img1">
          <img v-if="item.picUrl2" :src="item.picUrl2" class="img2 a">
          <img v-if="item.picUrl3" :src="item.picUrl3" class="img3 b">
        </div>
      </transition>
    </div>

    <div class="page">
      <ul class="dots">
        <li
          v-for="(item, i) in banner"
          :key="i"
          :class="{ 'dot':i!=mark }"
          class="dot-active"
          @click="change(i)"
        ></li>
      </ul>
    </div>
  </div>
</template>
<script>
import { setStore, getStore } from "@/utils/storage.js";
export default {
  data() {
    return {
      mark: 0,
      bgOpt: {
        px: 0,
        py: 0,
        w: 0,
        h: 0
      },
      timer: "",
      banner: [
        {
          name: "图片1",
          picUrl: "https://i.loli.net/2018/11/04/5bdebbd45a0b0.png"
        },
        {
          name: "图片2",
          picUrl2: "https://i.loli.net/2018/11/04/5bdebb109a29a.png"
        },
        {
          name: "图片3",
          picUrl3: "https://i.loli.net/2018/11/04/5bdebb41e11f4.png"
        }
      ]
    };
  },
  mounted() {
    this.showNotify();
  },
  methods: {
    autoPlay() {
      this.mark++;
      if (this.mark > this.banner.length - 1) {
        // 当遍历到最后一张图片置零
        this.mark = 0;
      }
    },
    play() {
      // 每2.5s自动切换
      this.timer = setInterval(this.autoPlay, 2500);
    },
    change(i) {
      this.mark = i;
    },
    startTimer() {
      this.timer = setInterval(this.autoPlay, 2500);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    linkTo(item) {
      if (item.type === 0 || item.type === 2) {
        // 关联商品
        this.$router.push({
          path: "/goodsDetails",
          query: {
            productId: item.productId
          }
        });
      } else {
        // 完整链接
        window.location.href = item.fullUrl;
      }
    },
    bgOver(e) {
      this.bgOpt.px = e.offsetLeft;
      this.bgOpt.py = e.offsetTop;
      this.bgOpt.w = e.offsetWidth;
      this.bgOpt.h = e.offsetHeight;
    },
    bgMove(dom, eve) {
      const bgOpt = this.bgOpt;
      let X, Y;
      const mouseX = eve.pageX - bgOpt.px;
      const mouseY = eve.pageY - bgOpt.py;
      if (mouseX > bgOpt.w / 2) {
        X = mouseX - bgOpt.w / 2;
      } else {
        X = mouseX - bgOpt.w / 2;
      }
      if (mouseY > bgOpt.h / 2) {
        Y = bgOpt.h / 2 - mouseY;
      } else {
        Y = bgOpt.h / 2 - mouseY;
      }
      dom.style["transform"] = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`;
      dom.style.transform = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`;
    },
    bgOut(dom) {
      dom.style["transform"] = "rotateY(0deg) rotateX(0deg)";
      dom.style.transform = "rotateY(0deg) rotateX(0deg)";
    },
    showNotify() {
      var value = getStore("notify");
      if (this.notify !== value) {
        this.dialogVisible = true;
        setStore("notify", this.notify);
      }
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .banner, .banner span, .banner div {
    font-family: "Microsoft YaHei";
    transition: all .3s;
    transition-timing-function: linear;
  }

  .banner {
    cursor: pointer;
    perspective: 3000px;
    position: relative;
    z-index: 19;
    margin: 0 auto;
    width: 1220px;
  }

  .bg {
    position: relative;
    width: 1220px;
    height: 500px;
    margin: 20px auto;
    background-size: 100% 100%;
    border-radius: 10px;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    transform: rotateY(0deg) rotateX(0deg);
    & div{
      position: relative;
      height: 100%;
      width: 100%;
    }
  }

  .img1 {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 10px;
  }

  .img2 {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 5px;
    left: 0;
    background-size: 95% 100%;
    border-radius: 10px;
  }

  .img3 {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 10px;
  }
 </style>
