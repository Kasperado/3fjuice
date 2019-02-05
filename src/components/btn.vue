<template>
  <div class="btn">{{ text }}</div>
</template>

<script>
export default {
  name: 'btn',
  props: {
    text: String
  }
};
</script>

<style lang="scss" scoped>

    .btn {
      border: 2px #A70 solid;
      width: 50%;
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

</style>
