<script setup>
import { useCycleList } from '@vueuse/core'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCards } from 'swiper'
import 'swiper/css/effect-cards'
import AppHeader from './components/AppHeader.vue'

const clues = ['Clue 1', 'Clue 2', 'Clue 3']
const { state: clue, prev, next } = useCycleList(clues)
</script>

<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div class="card shadow-md relative bg-base-100 p-5 rounded-lg border-gray-100 border-[1px]">
      <AppHeader />
      <div class="text-center">
        <p class="text-lg">#{{ clue }}</p>

        <template v-if="clue === clues[0]">
          <swiper :effect="'cards'" :modules="[EffectCards]" class="w-96 h-48">
            <swiper-slide class="card bg-yellow-500 grid items-center text-white">Slide 1</swiper-slide>
            <swiper-slide class="card bg-orange-500 grid items-center text-white">Slide 2</swiper-slide>
            <swiper-slide class="card bg-red-500 grid items-center text-white">
              <div>
                <p>Slide 3</p>
                <p>Lorem ipsum</p>
                <button @click="next()">next</button>
              </div>
            </swiper-slide>
          </swiper>
        </template>
        <template v-if="clue === clues[1]">
          <p class="text-white">Lorem ipsum</p>
          <button data-toggle-theme="dark,light" class="btn btn-info text-white">toggle</button>
        </template>
        <template v-if="clue === clues[2]"> </template>
      </div>
      <h4 class="mt-10 text-gray-400 text-center text-sm">
        This challenge brought to you by <a href="https://vueschool.io/" class="underline">Vue School</a>
      </h4>
    </div>
  </div>
</template>
