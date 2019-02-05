<template>
  <section id="plan">
    <h1>Choose your <i>plan</i></h1>
    <div class="plan_container">
      <div class="plan">
        <p ref="time">Every <i>day</i></p>
        <input type="range" min="1" max="7" value="1" class="slider" @input="timeChange">
        <p ref="size"><i>Two</i> pack</p>
        <input type="range" min="1" max="5" value="1" class="slider" @input="sizeChange">
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
        case 6: this.$refs.time.innerHTML = "Every <i>3 weeks</i>"; break;
        case 7: this.$refs.time.innerHTML = "Every <i>month</i>"; break;
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

.plan_container {
  display: flex;
  align-items: center;
  justify-content: center;
  .plan {
    width: 50%;
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

}

</style>
