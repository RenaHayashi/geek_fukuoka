<template>
  <div>
    <div class="container">
      <div class="card">
        <h2>iPhone</h2>
        <i class="fas fa-arrow-right"></i>
        <p>provide convinience</p>
        <div class="pic"></div>
        <div class="social">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-github"></i>
        </div>
        <button>
          <router-link to="/products/iPhone">i</router-link>
        </button>
      </div>
      <div class="card card2">
        <h2>Game</h2>
        <i class="fas fa-arrow-right"></i>
        <p>seek freedom</p>
        <div class="pic"></div>
        <div class="social">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-github"></i>
        </div>
        <button>
          <router-link to="/products/Game">G</router-link>
        </button>
      </div>
      <div class="card card3">
        <h2>Web</h2>
        <i class="fas fa-arrow-right"></i>
        <p>make service</p>
        <div class="pic"></div>
        <div class="social">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-github"></i>
        </div>
        <button><router-link to="/products/Web">W</router-link></button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
$bg-color: #bdbcbb;
$shdow-gray: #d3d3d5;
$orange: #da4d1d;
$blue: #2b26c3;
$pink: rgb(192, 31, 71);

$img-url: "../assets/iphone.jpg";
$img-url2: "../assets/game.jpg";
$img-url3: "../assets/web.jpeg";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

i {
  opacity: 0;
  font-size: 18px;
  color: #fff;
  will-change: transform;
  -webkit-transform: scale(0.1);
  transform: scale(0.1);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

h2 {
  pointer-events: none;
}

body {
  background-color: $bg-color;
  width: 100vw;
  height: 100vh;
  margin: 0px, 80px;
}

.container {
  width: 100%;
  height: 100%;
  padding-top: 30px;
  .card {
    position: relative;
    width: 450px;
    height: 200px;
    background-color: #fff;
    overflow: hidden;
    margin-bottom: 4px;
    margin-left: 15px;
    margin-right: 0px;
    display: inline-block;

    &:before {
      content: "";
      z-index: 99;
      position: absolute;
      top: -10px;
      left: 32px;
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 16px;
      background-color: $bg-color;
    }
    &:after {
      content: "";
      z-index: 99;
      position: absolute;
      bottom: -10px;
      left: 32px;
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 16px;
      background-color: $bg-color;
    }
    ul {
      z-index: 99;
      position: absolute;
      left: 39px;
      top: 5px;
      list-style-type: none;
      li {
        width: 2px;
        height: 2px;
        border-radius: 2px;
        margin: 6px 0;
        background-color: $bg-color;
      }
    }
    h2 {
      z-index: 99;
      font-family: "Poppins", sans-serif;
      position: absolute;
      bottom: 0;
      right: 130px;
      font-size: 60px;
      font-weight: 700;
      color: #fff;
    }

    .fa-arrow-right {
      z-index: 100;
      position: absolute;
      right: 75px;
      bottom: 25px;
      font-size: 40px;
      cursor: pointer;
    }
    p {
      z-index: 99;
      position: absolute;
      top: 20px;
      right: 70px;
      color: white;
      opacity: 0.7;
      font-size: 12px;
      letter-spacing: 1px;
      writing-mode: vertical-lr;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }
    .pic {
      z-index: 100;
      width: 400px;
      height: 200px;
      background-image: url($img-url);
      background-size: 100% 100%;
      filter: grayscale(100%);
    }

    .social {
      position: absolute;
      left: 60px;
      top: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 180px;
      height: 64px;
      border-radius: 80px;
    }

    .social i:nth-of-type(1) {
      -webkit-transition-delay: 0.4s;
      transition-delay: 0.4s;
    }

    .social i:nth-of-type(2) {
      -webkit-transition-delay: 0.3s;
      transition-delay: 0.3s;
    }

    .social i:nth-of-type(3) {
      -webkit-transition-delay: 0.2s;
      transition-delay: 0.2s;
    }

    .social i:nth-of-type(4) {
      -webkit-transition-delay: 0.1s;
      transition-delay: 0.1s;
    }

    &:hover i {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    button {
      position: absolute;
      right: 14px;
      bottom: 14px;
      width: 30px;
      height: 30px;
      background-color: $orange;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      outline: none;
      transition: all 0.3s ease;
      mix-blend-mode: hard-light;
      color: white;

      i {
        font-size: 3rem;
      }
    }

    &:hover button {
      transform: scale(16.5);
    }

    &:hover p {
      color: #fff;
    }

    &:hover .pic {
      filter: grayscale(0);
    }
  }

  .card2 {
    .pic {
      background-image: url($img-url2);
    }
    button {
      background-color: $blue;
    }
  }

  .card3 {
    .pic {
      background-image: url($img-url3);
    }
    button {
      background-color: $pink;
    }
  }
}

.dr {
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 100px;
}
</style>
