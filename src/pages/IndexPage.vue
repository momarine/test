<template>
  <q-page class="flex flex-center">
    <div>
      <img
        alt="Quasar logo"
        src="~assets/boat.png"
        style="width: 200px;"
      >
    </div>
    <div
      class="q-pa-md"
      style="width: 400px;"
    >
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
      >
        <q-carousel-slide
          v-for="slide in slides"
          :key="slide.id"
          :name="slide.name"
          :img-src="slide.src"
        />
      </q-carousel>
    </div>

    <div><br>
      momarine
    </div>
    <div class="text-center full-width">
      芦屋市新浜町２番２-203号 よろしくお願いいたします
    </div>
    <q-btn
      class="q-ma-xl"
      label="クリックしてね"
      color="red"
      @click="push"
    >
    </q-btn>
    <q-btn
      class="q-ma-xl"
      round
      color="amber"
      glossy
      text-color="black"
      icon="layers_clear"
    />
    <q-btn
      @click="push2"
      class="q-ma-xl glossy"
      rounded
      color="deep-orange"
      label="Glossy Rounded"
    />
    <q-btn
      class="q-ma-xl"
      href="https://momarine-c.jp/"
      target="_blank"
      label="ホームページー"
      color="purple"
    />

    <div>

      <img
        alt="Quasar logo"
        src="~assets/40910.jpg"
        style="width: 300px;"
      >
    </div>

  </q-page>
</template>
<script setup>
import { ref } from 'vue'
const slide = ref(2)

const slides = [{ id: 1, name: 'slide1', src: '~assets/40910.jpg', price: 2000 }, { id: 2, name: 'slide2', src: '~assets/boat.png', price: 4000 }, { id: 3, name: 'slide3', src: '~assets/40910.jpg', price: 10000 }]
</script>
