<script setup>
import { reactive } from 'vue';
import Title from '@/components/Title.vue';
import WidgetIconBox from '@/components/WidgetIconBox.vue';
import Gallery from '@/components/Gallery.vue';
import WallGallery from '@/components/WallGallery.vue';

const props=reactive({
  Title:{
        title:"Your work is unique.",
        description:"Because we cutting and fitting the fabrics.",
    }
})

const whatDoWeDo=reactive(
    [
        {
            title:"1 Robustness",
            description:`As a skilled tailor with years of experience in
             creating and altering garments;
             ensuring precision and quality in every stitch.`,
             icon:""
        },
        {
            title:"2 Casting desires to fabric",
            description:"personalized fittings and style advice, making it convenient for all clients.",
            icon:"/src/resources/sketch2.jpg"
        },
        {
            title:"3 Alteration",
            description:`Professional alteration services for all types of clothing,
             from hems to full adjustments, ensuring the perfect fit.`,
            icon:"/src/resources/alteration.jpg"
        },
        {
            title:"4 Our Portfolio",
            description:`Have a look at our showcase of previous works, illustrating the variety of
             styles and projects undertaken, including before-and-after shots.`,
             icon:"/src/resources/portfolio.jpg"
        }
    ]
)

//dynamic binding to boxes on "whatdowedo widget"
//set periodic back process to dynamically change the context
//at section "What do we do"
class DynamicBoxes{
    static TEXT_CHANGE_INTERVAL_MS=6600
    static BOX_ANIM_DURATION=600
    textCounter=0

    bindings=reactive([
        {
            title:"",
            description:"",
            icon:""
        },
        {
            title:"",
            description:"",
            icon:""
        },
        {
            title:"",
            description:"",
            icon:""
        }
    ])

    constructor(context){
        this.contextRef=context

        //initialize the dynamic text
        this.textCounter= this.bindings.length<context.length? this.bindings.length : context.length

        for (let nth_box = 0; nth_box < this.textCounter; nth_box++) {

            this.bindings[nth_box].title=context[nth_box].title
            this.bindings[nth_box].description=context[nth_box].description
            this.bindings[nth_box].icon=context[nth_box].icon

        }
    }

    update() {

        setInterval(() => {

            this.changeContext()

    }, DynamicBoxes.TEXT_CHANGE_INTERVAL_MS);
    }

    changeContext(){
        //bind texts to dynamic Vue properties which updates view, respectively
        for (let nth_box = 0; nth_box < this.bindings.length; nth_box++) {

        //delay the rendering of the boxes respectively
        setTimeout(()=>{
            //get every box element to re-render
            const boxElement=document.getElementById( String('whatdowedo').concat(nth_box+1) )

            if(boxElement==null)
                return;
            //1. rescale the boxes to disappear
            let boxAnim=boxElement.animate([
                    {transform:`rotateY(0turn)`},
                    {transform:`rotateY(0.25turn)`}, // keyframe
                ],
                    {duration:DynamicBoxes.BOX_ANIM_DURATION})


            boxAnim.onfinish=(event)=>{

                //2. update dynamic reference to change content
                let calcIdx=(this.textCounter+nth_box) % this.contextRef.length

                this.bindings[nth_box].title = this.contextRef[ calcIdx ].title
                this.bindings[nth_box].description = this.contextRef[ calcIdx ].description
                this.bindings[nth_box].icon = this.contextRef[ calcIdx ].icon

                //3. resize the boxes to show
                boxElement.animate([
                    {transform: `rotateY(0.25turn)` },
                    { transform: "rotateY(0turn)" }, // keyframe
                ],
                    {duration:DynamicBoxes.BOX_ANIM_DURATION})
            }
        },300*nth_box)

        }
            //skip as much as dynamic box sizes, which is the limit of number of text at a time
            this.textCounter=(this.textCounter + this.bindings.length) % this.contextRef.length
    }
}
const dynamicBoxes=new DynamicBoxes(whatDoWeDo)
dynamicBoxes.update()

</script>
<template>

    <div class="w-full items-center">

        <div class="flex flex-col
        md:grid md:grid-cols-12
        bg-cover bg-center bg-[url('../resources/tailoring.jpg')] bg-fixed h-[29rem] relative"
        >
                    <!--title positioned as absolute-->
                    <Title class="relative md:absolute mx-5 my-20 md:m-20 rounded-md md:p-2 border-cyan-900 border-[12px] overflow-scroll
                    bg-black/20 z-0 text-white mix-blend-color-dodge"
                            :title=props.Title.title
                            :description=props.Title.description
                    />

                    <!-- left split when enlarged-->
                    <!-- flex box on small screens-->
                    <div class="absolute md:static flex md:col-span-5 bg-black/80 h-full w-full mix-blend-overlay">
                    </div>

                    <!-- right split when enlarged-->
                    <div class="hidden md:flex md:col-span-7
                    bg-pink-800/90 mix-blend-overlay">
                    </div>
        </div>

        <!--context-->
        <div class="gap-8 p-4 md:p-8 bg-gradient-to-br from-white from-30% via-sky-300 via-50% to-purple-400 to-70% bg-fixed animate-gradient-xy">

            <!--introduction-->
            <div class="flex flex-col md:grid md:grid-cols-12 bg-transparent gap-8">

                <!-- left for visual-->
                <!-- todo: image gallery maybe-->
                <div class="flex flex-col md:col-span-5">

                    <img src="../resources/tailoring2.jpg"
                    class=" m-auto block rounded-md">


                </div>

                <!-- right for context-->
                <div class="flex flex-col md:col-span-7">

                    <p class="bg-transparent text-center p-8 md:pt-40 text-5xl">
                        Let us introduce Ourselves.
                    </p>

                    <p class="text-lg">
                        We’re all about making good, lovely custom clothing to
                        be worn on most memorable days. We’re passionate about
                        changing the way you look at clothing. We want to share
                        our years of experience of cutting and sewing to suit your appearance.
                        It’s time to start wearing clothes that fashionable,
                        share your enthusiasm of trends with us.

                    </p>


                </div>
            </div>

        <!-- brief explanation of what company does-->
        <div class="m-16 md:mt-32 gap-8 flex flex-col md:grid md:grid-cols-12">
        <!-- left side-->
        <div class="col-span-6">

            <p class="text-4xl p-8 md:pt-40">What Do We Do</p>

            <p class="text-lg">
                        We’re all about making good, lovely custom clothing to
                        be worn on most memorable days. We’re passionate about
                        changing the way you look at clothing. We want to share
                        our years of experience of cutting and sewing to suit your appearance.
                        It’s time to start wearing clothes that fashionable,
                        share your enthusiasm of trends with us.

            </p>

        </div>

        <!-- right side-->
         <div class="relative xl:-top-16 gap-8 items-center col-span-6">

            <WallGallery class=""/>

         </div>


        </div>

        <!-- basic portfolio-->
         <div class="flex flex-row gap-8 items-center">

            <Gallery/>
         </div>
    </div>
</div>
</template>