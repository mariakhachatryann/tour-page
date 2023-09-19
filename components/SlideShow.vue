<template>
    <div>
      <div class="container">
        <div v-for="(slide, index) in slides" :key="index" :class="{ 'mySlides': true, 'hidden': index !== currentSlide }">
          <div class="numbertext">{{ index + 1 }} / {{ slides.length }}</div>
          <img src="~/assets/img/frame1.png" style="width:100%" :alt="slide.caption">
        </div>
        
        <a class="prev" @click="prevSlide">❮</a>
        <a class="next" @click="nextSlide">❯</a>
        
        <div class="caption-container">
          <p id="caption">{{ currentCaption }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentSlide: 0,
        slides: [
          { image: "~/assets/img/frame1.png", caption: "Caption 1" },
          { image: "~/assets/img/frame1.png", caption: "Caption 2" },
        ],
      };
    },
    computed: {
      currentCaption() {
        return this.slides[this.currentSlide].caption;
      },
    },
    methods: {
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      },
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your Tailwind CSS styles go here */
  </style>
  