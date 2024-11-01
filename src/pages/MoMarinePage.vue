<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div
        v-for="boat in boats"
        :key="boat.id"
        class="col-12 col-sm-6 col-md-4"
      >
        <q-card class="my-card">
          <img
            :src="boat.image"
            :alt="boat.name"
            @click="openPreview(boat)"
          >

          <q-card-section>
            <div class="text-h6">{{ boat.name }}</div>
            <div class="text-subtitle2">{{ boat.description }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-dialog v-model="previewDialog">
      <q-card class="preview-card">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ selectedBoat?.name }}</div>
          <q-space />
          <q-btn
            icon="close"
            flat
            round
            dense
            v-close-popup
          />
        </q-card-section>

        <q-card-section>
          <img
            :src="selectedBoat?.image"
            :alt="selectedBoat?.name"
            class="preview-image"
          >
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const boats = [
  {
    id: 1,
    name: 'ヨット',
    description: '沿岸クルージング用の美しいヨット',
    image: 'src/assets/boat.png'
  },
  {
    id: 2,
    name: '大型ヨット',
    description: '外洋冒険用の豪華なヨット',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 3,
    name: '釣り船',
    description: '友人との釣り旅行に最適',
    image: 'https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80'
  },
  {
    id: 4,
    name: 'スピードボート',
    description: 'ウォータースポーツ用の高速で機敏なボート',
    image: 'https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 5,
    name: 'カタマラン',
    description: '家族旅行用の安定した広々としたカタマラン',
    image: 'https://images.unsplash.com/photo-1588401273872-959d2076283a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 6,
    name: 'カヌー',
    description: '川の探検用の伝統的なカヌー',
    image: 'https://images.unsplash.com/photo-1440993443326-9e9f5aea703a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }
]

const previewDialog = ref(false)
const selectedBoat = ref(null)

const openPreview = (boat) => {
  selectedBoat.value = boat
  previewDialog.value = true
}
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 350px;
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
}

.preview-card {
  width: 90vw;
  max-width: 800px;
}

.preview-image {
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
}
</style>
