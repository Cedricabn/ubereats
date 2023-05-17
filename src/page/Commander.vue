<template>
    <br>
    <router-link to="/" >
<img  src="https://cdn-icons-png.flaticon.com/512/93/93634.png?w=360" style="width: 6%;" alt="" title="retour" onMouseOver="document.all.texte.innerText='Retour !'" value="Ok !">
    </router-link>
    <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" style="padding-left: 8px;"
        alt="uber_eats_logo">
    <br>
 <br>
 <br>

    <div class="app">
      <h1>Formulaire de contact</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label class="form-label" for="name">Nom :</label>
          <input class="rounded-3" type="text" id="name" v-model="formData.name" required>
        </div>
        <div>
          <label class="form-label" for="email">Email :</label>
          <input  class="rounded-3" type="email" id="email" v-model="formData.email" required>
        </div>
        <div>
          <label class="form-label" for="message">Message :</label>
          <textarea class="rounded-3" id="message" rows="7" cols="20" v-model="formData.message" required></textarea>
        </div>
        <br>
        <br>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">Valider</button>
        </div>
      </form>
  
      <div v-if="isPopupVisible" class="popup">
        <h2>Pop-up</h2>
      
      <p>Votre message a été envoyé avec succès !</p>
     <router-link to="/">
      <button @click="closePopup">Fermer</button>
    </router-link>
    </div>
    </div>
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
          <div style="justify-content: space-between;" >
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
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Commander',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: '',
        },
        isPopupVisible: false,
      };
    },
    methods: {
      submitForm() {
        this.isPopupVisible = true;
      },
      closePopup() {
        this.isPopupVisible = false;
      },
    },
  };
  </script>
  
  <style>
  .app {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  h1 {
    text-align: center;
  }
  form div {
    margin-bottom: 10px;
  }
  label {
    display: block;
    font-weight: bold;
  }
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 5px;
  }
  button[type="submit"] {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  .popup {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    color: #fff;
    font-family: Arial, sans-serif;
  }
  .popup h2 {
    margin-top: 0;
  }
  </style>
  