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
            :src="boat.写真"
            :alt="boat.名前"
            @click="openPreview(boat)"
          >
          <q-card-section>
            <div class="text-h6">{{ boat.名前 }}</div>
            <div class="text-subtitle2">{{ boat.用途 }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-dialog v-model="previewDialog">
      <q-card class="preview-card">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ selectedBoat?.名前 }}</div>
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
            :src="selectedBoat?.写真"
            :alt="selectedBoat?.名前"
            class="preview-image"
          >
          <div class="text-h6">{{ selectedBoat?.用途 }}</div>
          <div class="row">
            <div class="col-9 text-subtitle2">{{ selectedBoat?.値段 }}
            </div>
            <div class="col-9 text-subtitle3">{{ selectedBoat?.検船場所 }}
            </div>
            <div class="col-3 float-right">
              <q-btn
                color="red"
                label="今すぐ購入"
                class="float-right"
              ></q-btn>
            </div>
          </div>
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
    名前: '普通のヨット',
    用途: '沿岸クルージング用の美しいヨット',
    値段: '500万円',
    写真: 'https://images.unsplash.com/photo-1552353617-3bfd679b3bdd',
    検船場所: '香川県小豆島'
  },
  {
    id: 2,
    名前: '中型のヨット',
    用途: '沿岸クルージング用の美しいヨット',
    値段: '2500万円',
    写真: 'https://images.unsplash.com/photo-1552353617-3bfd679b3bdd'
  },
  {
    id: 3,
    名前: '釣り船',
    値段: '600万円',
    用途: '友人との釣り旅行に最適',
    写真: 'images/boats/boat.png'
  },
  {
    id: 4,
    名前: 'カタマラン遊覧船',
    値段: '4400万円(税込）',
    用途: '遊覧船に最適',
    写真: 'http://www.chukotei.jp/photo/21472-1.jpg?97374',
    検船場所: '香川県小豆島'
  },
  {
    id: 5,
    名前: 'スピードボート',
    値段: '1500万円',
    用途: '家族旅行用の安定した広々としたカタマラン',
    写真: 'images/boats/sunsail-505-catamaran.png'
  },
  {
    id: 6,
    名前: 'カヌー',
    用途: '川の探検用の伝統的なカヌー',
    写真: 'https://images.unsplash.com/photo-1440993443326-9e9f5aea703a'
  }
]

/*
const boats = [
  { id: 1, 名前: 'boat1', src: 'images/boats/240215200038-65cdeed604558_m.jpg', 値段: 2000, 総トン数: '18トン', 用途: '旅客船', 定員: '48+2ｐ' },
  { id: 2, 名前: 'boat2', src: 'images/boats/230107152238-63b90fae263b0_m.jpg', 値段: 4000, 総トン数: '18トン', 用途: '旅客船', 定員: '48+2ｐ' },
  { id: 3, 名前: 'boat3', src: 'images/boats/240126092243-65b2fb53ea222_m.jpg', 値段: 10000, 総トン数: '18トン', 用途: '旅客船', 定員: '48+2ｐ' },
]
*/

const previewDialog = ref(false)
const selectedBoat = ref(null)

const openPreview = (boat) => {
  selectedBoat.value = boat
  previewDialog.value = true
}
</script>

<style>
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
