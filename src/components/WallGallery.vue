<script setup>
import { onBeforeUnmount, onMounted, reactive } from 'vue';


var images=['alteration.jpg',
'logo.png', 'logo.svg', 'portfolio.jpg',
'sewing-alterations.jpg', 'sketch2.jpg', 'sketch2.png',
'sketch3.jpg', 'tailoring.jpg', 'tailoring2.jpg',
'svg/needle.svg', 'website agency/logo.png']


const props=reactive([
    '',     //img1 ...
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''      //img10
])

defineProps({
    srcDirectory:{
        type: String,
        required: false
    }
})

class WallGallery{

    ANIM_DURATION=400
    CHANGE_INTERVAL_MS=2000

    IMG_IDX=0

    updater;

    constructor(context){

        this.context=context

        this.IMG_IDX=context.length-1//border-blue-500 border-double border-4
        var imageElements=document.getElementById('wall').getElementsByTagName('img')

        for (let index = 0; index < context.length; index++){

            //deafult image to show if not any dir given
            //add border with random color to images
            const elem=imageElements[index %imageElements.length]

            elem.style.border="double"
            elem.style.padding="2px"
            elem.style.borderWidth='16px'
            elem.style.borderColor="#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")

            context[index]="/src/resources/".concat(images[index% images.length])//"/src/resources/portfolio.jpg"
        }
    }

    update(){

        this.updater=setInterval(()=>{

            this.changeImages()
        }, this.CHANGE_INTERVAL_MS)
    }

    changeImages(){
        //TODO: search given directory for images, then show all content respectively

        var imageElements=document.getElementById('wall').getElementsByTagName('img')

        setTimeout(() => {

            const elem=imageElements[this.IMG_IDX %imageElements.length]

            elem.animate([
                {transform:`scale(1)`} ,
                {transform:`scale(0)`}, // keyframe
            ],
                {
                    duration:this.ANIM_DURATION,
                     easing:'cubic-bezier( 0.455, 0.03, 0.515, 0.955)'

                }).onfinish=(event)=>{

                    //add border with random color to images
                    elem.style.border="double"
                    elem.style.padding="2px"
                    elem.style.borderWidth='16px'
                    elem.style.borderColor="#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")

                         //deafult image to show if not any dir given
                    this.context[this.IMG_IDX%this.context.length]="/src/resources/".concat(images[this.IMG_IDX%images.length])//"/src/resources/portfolio.jpg"

                    this.IMG_IDX = ++this.IMG_IDX % (this.context.length*images.length);

                    elem.animate([
                        {transform:`scale(0)`} ,
                        {transform:`scale(1)`}, // keyframe
                    ],
                        {
                            duration:this.ANIM_DURATION,
                            easing:'cubic-bezier( 0.455, 0.03, 0.515, 0.955)'
                        })

                }

        }, (this.CHANGE_INTERVAL_MS/images.length)*this.IMG_IDX);
    }

    stop(){
        clearInterval(this.updater);
    }
}

let wallGallery=null;//global variable for un/mount properties
onMounted(()=>{
    wallGallery=new WallGallery(props)
    wallGallery.update()
})


onBeforeUnmount(()=>{
    wallGallery.stop()
})

</script>

<template>
    <div id="wall" class="relative gap-8 items-center grid grid-cols-3">

        <div class="relative top-[8%] lg:top-[16%] gap-8 items-center flex flex-col md:grid md:grid-rows-4">
            <img id="img1" :src="props[0]" class="border-double min-w-8 min-h-8 md:min-w-40 md:min-h-32">
            <img :src="props[1]">
            <img :src="props[2]">

        </div>

        <div class="relative top-[0%] gap-8 items-center flex flex-col md:grid md:grid-rows-4">
            <img :src="props[3]" class="min-w-24 min-h-24 md:min-w-40 md:min-h-32">
            <img :src="props[4]">
            <img :src="props[5]">
            <img :src="props[6]">
        </div>

        <div class="relative top-[4%] lg:top-[8%] gap-8 items-center flex flex-col md:grid md:grid-rows-4">
            <img :src="props[7]" class="min-w-24 min-h-24 md:min-w-40 md:min-h-32">
            <img :src="props[8]">
            <img :src="props[9]">

        </div>
    </div>
</template>