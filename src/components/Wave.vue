<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28"
    preserveAspectRatio="none"
  >
    <defs>
      <path
        id="gentle-wave"
        d="M-160 44c30 0 
          58-18 88-18s
          58 18 88 18 
          58-18 88-18 
          58 18 88 18
          v44h-352z"
      />
    </defs>
    <g class="waves">
      <use
        xlink:href="#gentle-wave"
        x="50"
        y="0"
        fill="#E5F3FD"
        fill-opacity=".2"
      />
      <use
        xlink:href="#gentle-wave"
        x="50"
        y="3"
        fill="#9ABDDC"
        fill-opacity=".5"
      />
      <use
        xlink:href="#gentle-wave"
        x="50"
        y="6"
        fill="#D1E5F4"
        fill-opacity=".9"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "WaveBanner",
};
</script>

<style>
body {
  margin: 0;
  font-family: "Euclid Circular A", "Poppins";
  color: #ddfdfd;
  background: #050808;
}

@media (min-width: 420px) {
  /* Corrected media query syntax */
  .banner > img {
    width: 40vw;
  }
}

@media (min-width: 648px) {
  /* Corrected media query syntax */
  .banner {
    text-align: left;
    flex-direction: row;
    justify-content: space-between;
  }
}

.waves > use {
  animation: move-forever 2s -2s linear infinite;
}

.waves > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 6s;
}
.waves > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 3s;
}

@keyframes move-forever {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}

svg {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30vw;
  max-height: 200px;
}
</style>
