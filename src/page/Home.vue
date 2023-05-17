<template>
  <br>
  <div class="home">
    <div class="header">
      <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
        alt="uber_eats_logo">
      <div class="wrapper--input">
        <input v-model="user_search" type="text" placeholder="Rechercher">

        <div class="search rounded">
          <router-link class="restaurant--wrapper" v-for="(restaurant, i) in search_restaurant" :key="i"
            :to="{name:'Restaurant', params :{name:restaurant.name}}">
            <div class="container--restaurant--search">
              <div class="wrapper--img rounded-3"> <img :src="restaurant.image" alt="" srcset="">
              </div>
              <h3>
                {{ restaurant.name }}
              </h3>
            </div>
          </router-link>

        </div>
      </div>
    </div>
    <div class="bannier rounded-3">

    </div>
    <br> <br> <br> <br>

    <h1 class="title text-dark">
      <u>
        <center> <strong> Nos Restaurants </strong></center>
      </u>
    </h1>
    <br>
    <RestaurantRow v-for="(card,i) in DataRestaurant " :key="i" :three_restaurant="card" />
  </div>
  <br><br>
  <div>
    <footer class="pt-4 my-md-5 pt-md-5 border-top bg-light expand-lg position-bottom ">
      <div class="row">
        <div class="col-12 col-md">
          <div class="ftco-footer-widget mb-4">
            <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
              alt="uber_eats_logo">
            <a href="#" class="logo text-decoration-none text-warning fs-4"></a>
            <br> <br>
          </div>
        </div>

        <div class="col-4 col-md text-success">
          <router-link to="/" class="text-decoration-none">
            <h6 class="text-success ">Nos restaurants</h6>
          </router-link>
        </div>

        <div class="col-4 col-md text-success">

          <router-link to="/Commander" class="text-decoration-none">
            <h6 class="mb-1"><a class="link-secondary text-decoration-none text-success" href="#">Contactez-nous</a></h6>
          </router-link>
          <div style="justify-content: space-between;width: 70%;" class="col-10" >
<img  class="rounded-3" src="data:image/png;base64,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"  style="width: 23%;padding-top: 2px;" alt="">
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2Gg8RG7zgWYd486wzZHjpp-edPp5HdLoOg&usqp=CAU" class="rounded-3" style=" width: 21%;" alt="">
 <img class="rounded-3" src="https://img.freepik.com/vecteurs-premium/icone-instagram-logo-insigne-moderne_578229-124.jpg" style="width: 25%;" alt="">
 <img class="rounded-3" src="https://thumbs.dreamstime.com/b/ic%C3%B4ne-du-logo-facebook-voronezh-russie-novembre-carr%C3%A9e-en-bleu-164585769.jpg" style="width: 20%;" alt="">
</div>

          
        </div>
        <div class="col-4 col-md text-success" >
          <router-link to="/Apropos" class="text-decoration-none">

          <h6 class="text-success" style="padding-left: 12px;">A propos</h6>
          <ul class="list-unstyled text-small text-secondary">
            <li class="mb-1 text-decoration-none" href="#"> <p>
              Description du site </p></li>
          </ul>
        </router-link>

        </div>
      </div>
      <small class="d-block mb-3 text-body-warning text-success text-center">&copy; ABIONAN Cédric</small>
    </footer>
  </div>
</template>

<script>
  import BDD from '../BDD.js'
  import {
    onMounted,
    ref,
    watch
  } from 'vue'
  import RestaurantRow from '@/components/RestaurantRow.vue';
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Home",
    components: {
      RestaurantRow,
    },
    setup() {
      class Restaurant {
        constructor(name, note, image, drive_time, logo, description) {
          this.name = name
          this.note = note
          this.image = image
          this.drive_time = drive_time
          this.logo = logo
          this.description = description
        }
      }
      let DataRestaurant = ref([]);
      let all_restaurant = [];
      let stared_restaurant = ref([]);
      const makeDataRestaurant = () => {
        let three_restaurant = [];
        let two_restaurant = [];

        for (const restaurant of BDD) {
          const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant
            .drive_time)
          all_restaurant.push(new_restaurant)
          if (new_restaurant.note > 3.9) {
            two_restaurant.push(new_restaurant);
            if (three_restaurant.length === 2) {

              stared_restaurant.value.push(two_restaurant);
              two_restaurant = [];
            }
          }


          if (three_restaurant.length === 2) {
            three_restaurant.push(new_restaurant)
            DataRestaurant.value.push(three_restaurant);
            three_restaurant = [];
          } else {
            three_restaurant.push(new_restaurant);
          }
        }
      }
      //user search: observer la variable du input à chaque ajout
      let user_search = ref("");
      let search_restaurant = ref([]);
      watch(user_search, (new_value) => {
        let regex = RegExp(new_value.toLocaleLowerCase());
        let new_search_restaurant = all_restaurant.filter(restaurant => regex.test(restaurant.name
          .toLocaleLowerCase()));
        /*  if(new_value==0 ){
          search_restaurant.value=[]
        }
else{search_restaurant.value = new_search_restaurant;
   } La forme ternaire sous dessous*/
        new_value == 0 ? search_restaurant.value = [] : search_restaurant.value = new_search_restaurant;
      }), console.log(stared_restaurant)

      onMounted(makeDataRestaurant)
      return {
        DataRestaurant,
        user_search,
        search_restaurant,
        stared_restaurant,
      }

    }

  }
</script>

<style lang="scss">
  .home {
    .header {
      height: 101px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 200px;
      }

      .wrapper--input {
        position: relative;
        margin-left: 30px;


        input {
          background-color: #f6f6f6;
          border: none;
          height: 60%;
          width: 100%;
          outline: none;
          padding-left: 20px;
        }

        .search {
          position: absolute;
          top: 100%;
          width: 100%;
          background-color: #ffffff;
          border: solid 1px;
          color: #000;
          // border-radius: 25%;

          .container--restaurant--search {
            display: flex;
            align-items: center;
            padding: 05px;
            text-decoration: none!important;
            color: #000;

            &:hover {
              background: #f6f6f6;
            }

            .wrapper--img {
              height: 50px;
              width: 50%;
              margin-right: 20px;
              // border-radius: 50%;
              overflow: hidden;

              .img {
                height: 50%;
                width: 50%;
              }
            }
          }
        }
      }
    }

    .bannier {
      height: 200px;
      width: 100%;
      background-image: url("data:image/jpeg;base64,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");
      background-size: cover;
      background-position: center center;
    }
  }
</style>