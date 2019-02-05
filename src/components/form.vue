<template>
  <form>
    <input class="small" type="text" name="name" value="" placeholder="Name">
    <input class="small" type="text" name="surname" value="" placeholder="Surname">
    <input type="text" name="address" value="" placeholder="Address">
    <input type="email" name="email" value="" placeholder="Email">
    <input type="text" name="phone" value="" placeholder="Phone number">
    <textarea placeholder="Custom demands"></textarea>
    <btn text="Send"></btn>
  </form>

</template>

<script>
import btn from "./btn.vue"

export default {
  name: 'formOrange',
  components: {
    btn
  }
};
</script>

<style lang="scss" scoped>

form {
  width: 100%;
}

textarea, input {
  outline: none;
  resize: vertical;
  font-style: italic;
  font-family: 'Vollkorn', serif;
  color: white;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
  border-radius: 4px;
  border: 2px transparent solid;
  transition: all 0.4s;
  background-color: #343536;
  &:focus {
    border-color: orange;
  }
}

textarea {
  min-height: 100px;
}

.small {
  width: 49%;
  &:nth-child(2) {
    margin-left: 2%;
  }
}

@media only screen and (min-width: 732px) {

}

</style>
