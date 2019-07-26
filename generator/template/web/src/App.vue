<template>
  <div id="app"> 
    <router-view></router-view>
  </div>
</template>
<script> 

export default { 
  methods: {
     
  }, 
};
</script>

<style>
@import "./assets/css/variable.scss";
@import "./assets/css/common.css";

.xd-maxheight {
  height: 60px;
}
.xd-maxwidth {
  max-width: 640px;
  margin: auto;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
</style>
