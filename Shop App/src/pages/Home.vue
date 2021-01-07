<template>
  <div id="slider">
    <h1>Destaques</h1>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" class="center" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      images: [
        'https://s3-blog.tattoo2me.com/wp-content/uploads/2020/01/1*KYyDnJfTyFVRKz7i9goYsg.jpeg',
        'https://uploads.metropoles.com/wp-content/uploads/2020/01/23155444/83530698_870871946665004_530327407439952577_n.jpg',
        'https://uploads.metropoles.com/wp-content/uploads/2020/01/23155445/84155538_101106404746687_2535003298939797956_n.jpg',
        'https://s3-blog.tattoo2me.com/wp-content/uploads/2020/01/1*3PYPo1seIEUEY1VA67VroQ.jpeg',
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 4000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.26);
  height: 500px;
}

h1 {
  text-align: center;
  color: #45006d;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: #45006d;
  font-weight: bold;
  font-size: 18px;
  transition: 0.5s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 100px;
}

.prev {
  left: 100px;
}

.prev:hover,
.next:hover {
  background-color: #45006d;
  color: white;
}
</style>