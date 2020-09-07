<template>
  <div>
    <div class="cp_cont">
      <div class="cp_offcm01">
        <input type="checkbox" id="cp_toggle01" />
        <label for="cp_toggle01"><span></span></label>
        <div class="cp_menu">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <router-link to="/about">About</router-link>
            <li>
              <router-link to="/products/Web">Web Products</router-link>
            </li>
            <li>
              <router-link to="/products/iPhone">iPhone Products</router-link>
            </li>
            <li>
              <router-link to="/products/Game">Game Products</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
ol,
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
.cp_cont {
  height: 65vh;
}
.cp_offcm01 {
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-block;
}
/* menu */
.cp_offcm01 .cp_menu {
  position: fixed;
  top: 0;
  right: -100vw;
  width: 250px;
  height: 100%;
  cursor: pointer;
  -webkit-transition: 0.53s transform;
  transition: 0.53s transform;
  -webkit-transition-timing-function: cubic-bezier(0.38, 0.52, 0.23, 0.99);
  transition-timing-function: cubic-bezier(0.38, 0.52, 0.23, 0.99);
  background-color: #607d8b;
  opacity: 0.8;
}
.cp_offcm01 .cp_menu ul {
  margin: 0;
  padding: 0;
}
.cp_offcm01 .cp_menu li {
  list-style: none;
}
.cp_offcm01 .cp_menu li a {
  display: block;
  padding: 20px;
  text-decoration: none;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
}

.cp_offcm01 #cp_toggle01 {
  position: absolute;
  display: none;
  opacity: 0;
}
.cp_offcm01 #cp_toggle01:checked ~ .cp_menu {
  -webkit-transform: translateX(-100vw);
  transform: translateX(-100vw);
}
/* menu toggle */
.cp_offcm01 #cp_toggle01 ~ label {
  display: block;
  padding: 0.5em;
  cursor: pointer;
  -webkit-transition: 0.5s transform;
  transition: 0.5s transform;
  -webkit-transition-timing-function: cubic-bezier(0.61, -0.38, 0.37, 1.27);
  transition-timing-function: cubic-bezier(0.61, -0.38, 0.37, 1.27);
  text-align: center;
  color: #333333;
}
.cp_offcm01 #cp_toggle01:checked ~ label {
  -webkit-transform: translateX(-250px);
  transform: translateX(-250px);
}
.cp_offcm01 #cp_toggle01 ~ label::before {
  font-family: "FontAwesome";
  content: "\f0c9";
  font-size: 2em;
}
.cp_offcm01 #cp_toggle01:checked ~ label::before {
  content: "\f00d";
}
/* contents */
.cp_contents {
  color: #333333;
  text-align: center;
}
</style>
