<template>
    <div class="slider">
        <div class="slider__container">
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";



const CurrentWork = Vue.extend({
    name: "CurrentWork",
    props: {
        currentWork: {
            type: Object || null,
            required: true
        }
    },

    computed: {
        /* photos(): Photo[] | null {
            if (this.currentMaster && this.currentMaster.services) return this.currentMaster.services;
            return null
        } */
    },

    methods: {
        getImagePath(image: string): string {
            try {
                return `/tg-vue/src/assets/img${image}`;
            } catch (error) {
                console.error("Error loading image:", error);
                return '';
            }
        },

    },

});

export default CurrentWork;
</script>
