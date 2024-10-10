<script setup>
import { reactive } from 'vue';
import ReferenceComment from './ReferenceComment.vue';

const references={
    "John smith":{
        "img":"src/resources/sketch2.jpg",
        "comment":"It was a great opportunity to work with her/him. It was a great opportunity to work with her/himIt was a great opportunity to work with her/him"
    },

    "Jane doe":{
        "img":"src/resources/alteration.jpg",
        "comment":"The dresses have a goergeous design."
    },

}

const props=reactive([
    {
        logoSrc:"",
        name:"",
        description:""
    }
])
class ShiftingBox{
    POS=0
    FPS=60
    ANIM_VELOCITY=200
    SHIFT_DIRECTION="right"

    constructor(shiftTo, animVelocity=200){

        this.ANIM_VELOCITY=animVelocity

        if(typeof shiftTo=='string'){
            this.SHIFT_DIRECTION=shiftTo
        }
    }

    update(){

        setTimeout(() => {

            const canvas=document.getElementById('canvas')

            /*for (let key in references) {
               console.log(references[key].img)


                var element=document.createElement("div")
                element.style.width="96px"
                element.style.height="40px"

                var img=document.createElement(`img`)
                img.src=references[key].img
                img.style.width="96px"
                img.style.height="40px"
                var comment=document.createElement("p")
                comment.innerHTML="deneme kotrol"
                element.appendChild(img)
                element.appendChild(comment)

                canvas.appendChild(element)

            }*/
        }, 1000);

        setInterval(() => {

            var element=document.getElementById('canvas')
            var viewport=document.getElementById('viewport')

            if(element===null)
                return;

            switch(this.SHIFT_DIRECTION){
                case 'up':
                case 'down':
                    this.moveY(this.SHIFT_DIRECTION, element, viewport)
                    break;

                case 'left':
                case 'rigth':
                    this.moveX(this.SHIFT_DIRECTION, element, viewport)
                    break;
                default:
                case 'up':
                case 'down':
                    this.moveX("right", element, viewport)
                    break;
            }

        }, 1000/this.FPS);
    }

    moveY(direction, scrollElement, viewportElement){

        scrollElement.style.top = String(this.POS).concat('px')

        switch (direction) {
            case 'up':
                this.POS = this.POS > viewportElement.clientHeight? -scrollElement.scrollHeight: this.POS+this.ANIM_VELOCITY/this.FPS
                break;

            case 'down':
            this.POS = this.POS < -scrollElement.scrollHeight? viewportElement.clientHeight : this.POS-this.ANIM_VELOCITY/this.FPS
                break;

            default://up
                this.POS = this.POS > scrollElement.offsetHeight? -scrollElement.scrollHeight: this.POS-this.ANIM_VELOCITY/this.FPS
                break;
        }
    }

    moveX(direction, scrollElement, viewportElement){
        scrollElement.style.left = String(this.POS).concat('px')

        switch (direction) {
            case 'right':
                this.POS = this.POS > viewportElement.clientWidth? -scrollElement.scrollWidth: this.POS + this.ANIM_VELOCITY/this.FPS
                break;

            case 'left':
                this.POS = this.POS < -scrollElement.scrollWidth?  viewportElement.clientWidth : this.POS - this.ANIM_VELOCITY/this.FPS
                break;

            default://left
                this.POS = this.POS > viewportElement.clientWidth? -scrollElement.scrollWidth: this.POS + this.ANIM_VELOCITY/this.FPS
                break;
        }
    }

}

const l=new ShiftingBox('right', 50)
l.update()

</script>
<template>
    <!--scroll view-->
    <div id="viewport" class="relative items-start flex flex-row overflow-hidden gap-8">
        <!--canvas to put lemeents-->
        <div id="canvas" class="relative flex flex-col md:flex-row gap-8 md:grid md:grid-cols-2 xl:grid-cols-4">

            <!--Add reference image and descriptions from work partners or anything-->
            <div class="items-start flex flex-row" v-for="(item, key) in references">
                <ReferenceComment :img="item.img" :comment="item.comment" :name="key"></ReferenceComment>

            </div>

        </div>

    </div>
</template>