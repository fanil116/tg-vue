<template>
    <div class="current-work">
        <div class="current-work__container">
            <i @click="goBack()" class="arrow left"></i>
            <Flicking  ref="flickingWork" :options="options">
                <div v-for="(photo, index) in photos" class="flicking-panel slider__wrapper" :key="index"><img :src="getImagePath(photo.src)" class="slider_work__item"/></div>
            </Flicking>
            <button @click="goPrev()">prev</button>
            <button @click="goNext()">next</button>
            <div class="cuurent-work__title">
                <div>{{currentWork.name}}</div>
                <div>{{currentWork.price}} ₽</div>
            </div>
            <div class="current-work__info">
                <p>Информация о товаре</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Flicking } from "@egjs/vue-flicking";
interface Data {
    options: any;
}

const CurrentWork = Vue.extend({
    name: "CurrentWork",
    props: {
        currentWork: {
            type: Object || null,
            required: true
        }
    },

    data(): Data {
        return {
            options: {
                renderOnlyVisible: true, 
                align: 'center'
            }
        };
    },

    components: {
        Flicking: Flicking
    },

    computed: {
        photos(): Photo[] | null {
            if (this.currentWork && this.currentWork.slider) return this.currentWork.slider;
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
        goPrev() {
            const flickingInstance = this.$refs.flickingWork as Flicking;
            const index = flickingInstance.getStatus().index;
            if (index == 0) return
            flickingInstance.prev();
        },
        goNext() {
            const flickingInstance = this.$refs.flickingWork as Flicking;
            const index = flickingInstance.getStatus().index;
            const length = flickingInstance.getStatus().panels.length
            if (index && length - index == 1 || index && length - index == 0) return
            flickingInstance.next();
        },
        goBack() {
            this.$emit("close")
        }

    },

});

export default CurrentWork;
</script>
