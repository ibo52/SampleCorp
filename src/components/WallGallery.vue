<script setup>
import { reactive } from 'vue';


var images=['alteration.jpg',
'logo.png', 'logo.svg', 'portfolio.jpg', 'sample.jpg',
'sewing-alterations.jpg', 'sketch2.jpg', 'sketch2.png',
'sketch3.jpg', 'tailoring.jpg', 'tailoring2.jpg',
'svg/needle.svg', 'website agency/logo.png']


const props=reactive({
    img1:'',
    img2:'',
    img3:'',
    img4:'',
    img5:'',
    img6:'',
    img7:'',
    img8:'',
    img9:'',
    img10:''
})

defineProps({
    srcDirectory:{
        type: String,
        required: false
    }
})

class WallGallery{

    ANIM_DURATION=400
    CHANGE_INTERVAL_MS=6000

    IMG_IDX=0

    constructor(context){

        this.context=context

        for(let key in context){

            //deafult image to show if not any dir given
            this.IMG_IDX= ++this.IMG_IDX % images.length
            context[key]="/src/resources/".concat(images[this.IMG_IDX])//"/src/resources/portfolio.jpg"

        }
    }

    update(){

        setInterval(()=>{

            this.changeImages()
        }, this.CHANGE_INTERVAL_MS)
    }

    changeImages(){
        //TODO: search given directory for images, then show all content respectively

        var imageElements=document.getElementById('wall').getElementsByTagName('img')

        for(let key in this.context){

            let imgIdx=Number(key.split('img')[1])-1

            setTimeout(() => {

                const elem=imageElements[imgIdx]
                elem.animate([
                    {transform:`scale(1)`} ,
                    {transform:`scale(0)`}, // keyframe
                ],
                    {
                        duration:this.ANIM_DURATION,
                        easing:'cubic-bezier( 0.455, 0.03, 0.515, 0.955)'

                    }).onfinish=(event)=>{
                         //deafult image to show if not any dir given
                        this.context[key]="/src/resources/".concat(images[this.IMG_IDX])//"/src/resources/portfolio.jpg"

                        this.IMG_IDX = ++this.IMG_IDX % images.length;

                        elem.animate([
                            {transform:`scale(0)`} ,
                            {transform:`scale(1)`}, // keyframe
                        ],
                            {
                                duration:this.ANIM_DURATION,
                                easing:'cubic-bezier( 0.455, 0.03, 0.515, 0.955)'
                            })

                    }

            }, (this.CHANGE_INTERVAL_MS/images.length)*imgIdx);
        }


    }
}

const wallGallery=new WallGallery(props)
wallGallery.update()
</script>

<template>
    <div id="wall" class="relative gap-8 items-center grid grid-cols-3">

        <div class="relative top-[8%] lg:top-[16%] gap-8 items-center flex flex-col md:grid md:grid-rows-4">
            <img id="img1" :src="props.img1" class="min-w-8 min-h-8 md:min-w-40 md:min-h-32">
            <img :src="props.img4">
            <img :src="props.img7">

        </div>

        <div class="relative top-[0%] gap-8 items-center flex flex-col md:grid md:grid-rows-4">
            <img :src="props.img2" class="min-w-24 min-h-24 md:min-w-40 md:min-h-32">
            <img :src="props.img5">
            <img :src="props.img8">
            <img :src="props.img10">
        </div>

        <div class="relative top-[4%] lg:top-[8%] gap-8 items-center flex flex-col md:grid md:grid-rows-4">
            <img :src="props.img3" class="min-w-24 min-h-24 md:min-w-40 md:min-h-32">
            <img :src="props.img6">
            <img :src="props.img9">

        </div>
    </div>
</template>