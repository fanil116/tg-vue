<template>
    <div class="slider">
        <div class="slider__container" v-if="photos">
            <Flicking :options="{ renderOnlyVisible: true }">
                <div v-for="(photo, index) in photos" class="flicking-panel slider__wrapper" :key="index"><img :src="getImagePath(photo.src)" class="slider__item"/></div>
            </Flicking>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Flicking } from "@egjs/vue-flicking";
import type { Photo } from "@/models/masters"
interface Data {
    list: number[];
}

const PhotoModal = Vue.extend({
    name: "PhotoModal",
    components: {
    Flicking: Flicking
    },
    props: {
        currentMaster: {
            type: Object || null,
            required: true
        }
    },
    data(): Data {
        return {
            list: [0, 1, 2, 3, 4]
        };
    },

    computed: {
        photos(): Photo[] | null {
            if (this.currentMaster && this.currentMaster.works) return this.currentMaster.works
            return null
        }
    },

     methods: {
    getImagePath(image: string): string {
      try {
        return `/tg-vue/img${image}`;
      } catch (error) {
        console.error("Error loading image:", error);
        return '';
      }
    }
  },

});

export default PhotoModal;
</script>
