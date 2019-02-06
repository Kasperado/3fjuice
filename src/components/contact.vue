<template>
  <section id="contact">
    <div class="contact_containter">
      <div class="contact_info">
        <h1>Got a <i>question</i> ? Contact <i>us</i> !</h1>
        <p>Phone number: <i>+26 235 235 235</i></p>
        <p>Email: contact@3f.juice</p>
        <p>899-851 W 25 St, Kansas City, MO 64108, United States</p>
      </div>
    </div>
    <div class="flex_img">
      <img src="@/assets/contact.svg" alt="contact">
    </div>
  </section>
</template>

<script>
export default {
  name: 'contact',
};
</script>

<style lang="scss" scoped>

.contact_containter, .flex_img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.contact_containter {
  order: 2;
    .contact_info {
      width: 90%;
    }
}

.flex_img {
  order: 1;
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

h1 {
  margin-top: 24px;
  text-align: left;
}

p {
  text-align: left;
  padding: 0 8px;
  font-size: 24px;
}

section {
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 732px) {

  .contact_containter {
    min-height: 80vh;
    width: 50%;
    order: 1;
    .contact_info {
      width: 80%;
    }
  }

  .flex_img {
    order: 2;
    width: 50%;
    -webkit-clip-path: polygon(39% 19%, 68% 14%, 100% 12%, 100% 100%, 6% 100%, 2% 64%, 14% 31%);
    clip-path: polygon(39% 19%, 68% 14%, 100% 12%, 100% 100%, 6% 100%, 2% 64%, 14% 31%);
  }

  section {
    justify-content: space-between;
    flex-direction: row;
  }

  h1 {
    margin-top: 32px;
  }


}

</style>
