<template>
  <section id="home">
    <div class="productText">
      <div class="flex_item">
        <h1>What is <i>3F Juice</i> ?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <btn v-scroll-to="'#plan'" text="Wow! Sign me up!"></btn>
      </div>
    </div>
    <div class="productImage">
      <img src="@/assets/intro.svg" alt="">
    </div>
  </section>
</template>

<script>
import btn from "./btn.vue"

export default {
  name: 'intro',
  components: {
    btn
  }
};
</script>

<style lang="scss" scoped>

i {
  color: #FFA500;
}

section {
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.productText, .productImage {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
}

.productText {
  order: 2;
  color: #FFF;
  text-align: center;
  .flex_item {
    max-width: 500px;
    padding-bottom: 12px;
    p {
      line-height: 30px;
      font-size: 22px;
      width: 90%;
      margin: auto;
      padding: 8px;
    }
    .btn {
      border: 2px #A70 solid;
      width: 200px;
      text-align: center;
      border-radius: 10px;
      padding: 10px;
      margin: auto;
      font-weight: bold;
      transition: all 0.4s;
      cursor: pointer;
      user-select: none;
      &:hover {
        background-color: #D90;
      }
    }
  }
}

.productImage {
  order: 1;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 60% 78%, 26% 64%, 6% 31%);
  background: rgb(231,171,59);
  background: linear-gradient(16deg, rgba(231,171,59,1) 0%, rgba(209,129,24,1) 48%, rgba(210,95,0,0.98) 100%);
  img {
    width: 80%;
    margin-left: 20%;
  }
}

@media only screen and (min-width: 732px) {

section {
  justify-content: space-between;
  flex-direction: row;
  height: 100vh;
}

.productText, .productImage {
  height: 100vh;
}

.productText {
  order: 1;
  width: 40%;
}

.productImage {
  order: 2;
  width: 60%;
}

.flex_item {
  height: 50vh;
}

}

</style>
