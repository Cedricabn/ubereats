<template>
    <div   class="restaurant--card rounded-3">
        <div :style="changeBackground" class="restaurant--image rounded-3">

        </div>  

        <div class="restaurant--informations">
    
 <div class="top">
    <div class="name">
        {{info_restaurant.name}}
        
        <div class="time"> 
         {{info_restaurant.drive_time}}
        </div>
 

    </div>
    
    <p class="note">
         <span>{{ info_restaurant.note }}</span> 
        </p>
 </div>

    </div>
    </div>
</template>
<script >
import { computed } from 'vue'
export default{
name:"RestaurantCard",
props:{
    info_restaurant:Object
},
setup(props) {
    const changeBackground = computed(()=>{
        return {
            backgroundImage:   `url(${props.info_restaurant.image}) `
        }
    })

    return {
        changeBackground
    }
}
}

</script>

<style lang="scss">
.restaurant--card {
    margin: none;
    width: 100%;
height: 26vh;
box-shadow:0px 0px 50px 0px rgba(0, 0, 255, .2);
//@at-rootborder-radius: 10%;

p{
    margin: 0px;
 }
 .restaurant--image{
    background-image: url("https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==");
    height: 60%;
    background-size: cover;
    background-position: center;
   // border-top-left-radius: 10%;
   // border-top-right-radius: 10%;
    
 }
 .restaurant--informations{
   margin: 0px;
    .top{ 
        margin: 10px 0px;
        display: flex;
 align-items: center;
justify-content: space-between;
.note{background-color: #eeeeee;
height: 30px;
width: 30px;
display: flex;
justify-content: center;
align-items: center;font-size: 0.8rem;
border-radius: 50%;

}
.name{
    .time{
    font-size: 0.9rem;
   
}
}
}


    }
}
</style>