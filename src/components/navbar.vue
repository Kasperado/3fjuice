<template>
  <nav>
    <div class="nav_background">
      <div class="nav_content" :style="{'max-width': navWidth + 'px' }">

        <div class="logo">
          <a href="#">
            <div v-if='logo' class="img_flex">
              <img src="@/assets/logo.png" alt="logo" />
            </div>
            <p>{{ title }}</p>
          </a>
        </div>
        <ul ref="cm">
          <li v-for="n in navElements" :key="n">
            <a class="list_link" @click="toggleMenu" v-scroll-to="{el: '#'+(n.toLowerCase()), offset: -40}">{{n}}</a>
          </li>
        </ul>
        <div @click="toggleMenu" class="mobile_menu">
          <img src="@/assets/menu.svg" alt="menu">
        </div>

      </div>
    </div>
    <div class="nav_filler"></div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return{
      navOpen: false,
      navBusy: false
    }
  },
  props: {
    logo: {
      type: Boolean,
      default: false,
    },
    logoSrc: String,
    title: {
      type: String,
      default: 'title',
    },
    navElements: Array,
    navWidth: {
      type: Number,
      default: 1000,
    },
  },
  methods: {

    toggleMenu() {
        if(!this.navBusy && screen.width <= 730){
          var timer = 0;
          if (this.navOpen) {

            [].slice.call(document.querySelectorAll('li'), 0).reverse().forEach((e) => {
                setTimeout(() => {
                  e.classList.remove("list_element_active");
                },timer);
                timer += 100; });

            } else {

              document.querySelectorAll('li').forEach((e) => {
                  setTimeout(() => {
                    e.classList.add("list_element_active");
                  },timer);
                  timer += 100; });

            }

              this.navBusy = true;
            setTimeout(() => {
              this.navBusy = false;
            },550);
            this.navOpen = !this.navOpen;
      }
    },

    scrollFun() {
      //Closing Nav
      if(this.navOpen && window.innerWidth < 730) {
        var timer = 0;
          [].slice.call(document.querySelectorAll('li'), 0).reverse().forEach((e) => {
              setTimeout(() => {
                e.classList.remove("list_element_active");
              },timer);
              timer += 100; });
      }

      //Scrolling
      if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) || window.innerWidth < 730){
        document.querySelector('.nav_background').classList.add('navbar_scroll');
      } else {
        document.querySelector('.nav_background').classList.remove('navbar_scroll');
      }

    }

  },
  mounted() {
    this.scrollFun();
    document.addEventListener("scroll", this.scrollFun, false);
    window.addEventListener('resize', this.scrollFun, false);
  }
}
</script>

<style lang="scss" scoped>

  $navColor: #232425;
  $textColor: #EEE;
  $textShadow: #DDD;
  $borderColor: #FFA500;

  a {
    text-decoration: none;
  }

  .nav_filler {
    height: 10vh;
  }

  .nav_background {
    z-index: 9;
    user-select: none;
    position: fixed;
    width: 100%;
    margin: auto;
    top: 0;
    .nav_content {
      height: 10vh;
      margin: auto;
      display: flex;
      justify-content: space-between;
      .logo {
        a {
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          .img_flex{
            height: 100%;
            img {
              padding: 10px;
              height: 100%;
            }
          }
          p {
            font-style: italic;
            font-size: 3vh;
            color: orange;
            font-weight: bold;
            margin-left: 12px;
          }
        }
      }
      .mobile_menu {
        height: 100%;
        img {
          padding: 10px;
          height: 100%;
        }
      }
    }
  }

  //Desktop Menu
  ul {
    padding: 0;
    margin: 0;
    text-align: center;
    list-style-type: none;
    position: absolute;
    top: calc(100% + 1px);
    transform: translate(100%,0);
    width: 100%;
    align-items: center;
    flex-direction: column;
    li {
      padding: 4px 0;
      width: 100%;
      cursor: pointer;
      border-bottom: 1px solid $borderColor;
      transition: all 0.4s;
      background-color: $navColor;
      a {
        color: orange;
        padding: 8px;
        display: block;
        color: orange;
        font-weight: bold;
        font-style: italic;
      }
    }
  }

  .list_element_active {
    transform: translate(-100%,0);
  }

  .navbar_scroll {
    background-color: $navColor;
    border-bottom: 1px solid $borderColor;
  }

  //Anime
  img, .list_link, p, .nav_background, a{
    transition: 0.4s;
  }

  @media (min-width: 730px) {

    .nav_filler {
      height: 0;
    }

    .nav_background .nav_content {
        height: 8vh;
        .logo a p {
            margin-left: 18px;
        }

        ul {
          display: flex;
          top: 0;
          width: auto;
          position: static;
          flex-direction: row;
          margin-right: 18px;
          transform: translate(0,0);
          li {
            background-color: transparent;
            padding: 0 10px;
            width: auto;
            background-color: inherit;
            border: none;
            a {
              color: $textColor;
            }
          }
        }

        .mobile_menu  {
          display: none;
        }

      }

}
</style>
