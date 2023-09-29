<template>
    <div class="text-2xl flex">
        <span v-for="(star, index) in stars" :key="index" @click="rate(index)" @mouseover="hover(index + 1)" @mouseleave="resetHover" :class="{ filled: index < currentRating, hovered: index < hoverRating }">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :fill="getStarColor(index)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.227 3.71683L15.2574 7.58233C15.4564 7.96181 15.8405 8.22495 16.2859 8.28584L20.8282 8.90889C21.9504 9.06329 22.397 10.3594 21.5848 11.1021L18.3002 14.1096C17.9774 14.4054 17.8305 14.8305 17.9068 15.2481L18.682 19.4942C18.8729 20.5445 17.6997 21.3459 16.6967 20.849L12.6369 18.8428C12.2389 18.646 11.7622 18.646 11.3631 18.8428L7.30334 20.849C6.30026 21.3459 5.1271 20.5445 5.31916 19.4942L6.09316 15.2481C6.16952 14.8305 6.02259 14.4054 5.6998 14.1096L2.4152 11.1021C1.60302 10.3594 2.0496 9.06329 3.17185 8.90889L7.71406 8.28584C8.15949 8.22495 8.54475 7.96181 8.74375 7.58233L10.773 3.71683C11.2752 2.76106 12.7248 2.76106 13.227 3.71683Z"/>
            </svg>
        </span>
    </div>
</template>

<script>
export default {
  props: {
    maxRating: {
      type: Number,
      default: 5,
    },
    initialRating: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentRating: this.initialRating,
      hoverRating: 0,
      stars: Array(this.maxRating).fill(null),
    };
  },
  methods: {
    rate(rating) {
      this.currentRating = rating === 0 ? 1 : rating+1;
    },
    hover(rating) {
      this.hoverRating = rating;
    },
    resetHover() {
      this.hoverRating = 0;
    },
    getStarColor(index) {
      // Change the fill color based on the rating
      if (index < this.currentRating) {
        return '#1467C2'; // Rated color
      } else if (index < this.hoverRating) {
        return '#1467C2'; // Hovered color
      } else {
        return '#CCCED0'; // Default color
      }
    },
  },
};
</script>

<style scoped>
.hovered {
  cursor: pointer;
}
</style>
