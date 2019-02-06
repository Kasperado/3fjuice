<template>
  <section id="plan">
    <div class="plan_img">
      <img src="@/assets/plan.svg" alt="deliveryman">
    </div>
    <div class="plan_container">
      <div class="plan">
        <h1>Choose your <i>plan</i></h1>
        <p ref="time">Every <i>week</i></p>
        <input type="range" min="1" max="7" value="4" class="slider" @input="timeChange">
        <p ref="size"><i>Six</i> pack</p>
        <input type="range" min="1" max="5" value="3" class="slider" @input="sizeChange">
        <p class="info_helper">Fill this information to see if we can meet your demands</p>
        <formOrange></formOrange>
      </div>
    </div>
  </section>
</template>

<script>
import formOrange from "./form.vue"

export default {
  name: 'plan',
  components: {
    formOrange
  },
  methods: {

    timeChange (event) {
      switch (parseInt(event.target.value)) {
        case 1: this.$refs.time.innerHTML = "Every <i>day</i>"; break;
        case 2: this.$refs.time.innerHTML = "Every <i>3 days</i>"; break;
        case 3: this.$refs.time.innerHTML = "Every <i>5 days</i>"; break;
        case 4: this.$refs.time.innerHTML = "Every <i>week</i>"; break;
        case 5: this.$refs.time.innerHTML = "Every <i>2 weeks</i>"; break;
        case 6: this.$refs.time.innerHTML = "Every <i>month</i>"; break;
        case 7: this.$refs.time.innerHTML = "<i>Custom</i>"; break;
      }
    },

    sizeChange (event) {
      switch (parseInt(event.target.value)) {
        case 1: this.$refs.size.innerHTML = "<i>Two </i> pack"; break;
        case 2: this.$refs.size.innerHTML = "<i>Four </i> pack"; break;
        case 3: this.$refs.size.innerHTML = "<i>Six </i> pack"; break;
        case 4: this.$refs.size.innerHTML = "Double <i>six</i> pack"; break;
        case 5: this.$refs.size.innerHTML = "<i>Custom</i>"; break;
      }
    },

  }
};
</script>

<style lang="scss" scoped>

section {
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.plan_img, .plan_container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.plan_img {
  margin-top: 20px;
  padding: 10px;
  -webkit-clip-path: polygon(30% 0, 70% 0, 100% 7%, 100% 91%, 74% 100%, 22% 100%, 0 92%, 0 9%);
clip-path: polygon(30% 0, 70% 0, 100% 7%, 100% 91%, 74% 100%, 22% 100%, 0 92%, 0 9%);
  background: rgb(231,171,59);
  background: linear-gradient(16deg, rgba(231,171,59,1) 0%, rgba(209,129,24,1) 48%, rgba(210,95,0,0.98) 100%);
  img {
    width: 80%;
  }
}

.plan_container {
  .plan {
    width: 90%;
  }
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 12px;
  background: #d3d3d3;
  outline: none;
  transition: all 0.4s;
  padding: 0;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: calc(100%/7);
  height: 24px;
  border-radius: 6px;
  background: orange;
  cursor: pointer;
}

input[type=range]::-moz-range-track {
    -webkit-appearance: none;
    width: 100%;
    height: 12px;
    background: #d3d3d3;
    outline: none;
    transition: all 0.4s;
    padding: 0;
}

input[type=range]::-moz-range-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: calc(100%/7);
  height: 24px;
  border-radius: 6px;
  background: orange;
  cursor: pointer;
}

p {
  text-align: left;
  font-size: 24px;
  margin: 12px;
  font-weight: bold;
}

.info_helper {
  margin: 0;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 400;
}

@media only screen and (min-width: 732px) {

  section {
    min-height: 80vh;
    justify-content: space-between;
    flex-direction: row;
  }

  .plan_img {
    width: 40%;
    -webkit-clip-path: polygon(22% 3%, 49% 12%, 80% 7%, 95% 49%, 79% 100%, 0 100%, 0% 70%, 0 14%);
    clip-path: polygon(22% 3%, 49% 12%, 80% 7%, 95% 49%, 79% 100%, 0 100%, 0% 70%, 0 14%);
  }

  .plan_container {
    width: 60%;
    .plan {
      width: 80%;
    }
  }

}

</style>
