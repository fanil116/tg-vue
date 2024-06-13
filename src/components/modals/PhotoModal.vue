<template>
    <div class="slider">
        <div class="slider__container" v-if="photos">
            <Flicking  ref="flicking" :options="options">
                <div v-for="(photo, index) in photos" class="flicking-panel slider__wrapper" :key="index"><img :src="getImagePath(photo.src)" class="slider__item"/></div>
            </Flicking>
            <button @click="previos()">prev</button>
            <button @click="next()">next</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Flicking } from "@egjs/vue-flicking";
import type { Photo } from "@/models/masters"
interface Data {
    list: number[];
    options: any;
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
            list: [0, 1, 2, 3, 4],
            options: {
                renderOnlyVisible: true, 
                align: 'center'
            }
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
        },
        previos() {
            
            const index = this.$refs.flicking.getStatus().index;
            if (index == 0) return
            this.$refs.flicking.prev();
        },
        next() {
            const index = this.$refs.flicking.getStatus().index;
            const length = this.$refs.flicking.getStatus().panels.length
            if (length - index == 1 || length - index == 0) return
            this.$refs.flicking.next();
        }
    },

});

export default PhotoModal;
</script>
