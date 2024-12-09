<template>
	<!--holds all navbar contents-->
	<div class="flex flex-col relative w-full z-10">
	<div class="w-full flex flex-col">
    <!-- component -->
	<nav id="navbar" class="w-full h-20 transition-all duration-500 relative top-0 flex flex-row bg-theme-color/40 hover:bg-theme-color shadow-xl px-4 py-4 justify-between items-center">
		<!--image logo-->
		<div class="">
			<img alt="Corporation logo" class="sticky top-2 hover:scale-125 hover:translate-x-4 hover:translate-y-4 transition-transform inline h-16 sm:mx-0 sm:shrink-0" v-bind:src="logoImage"/>
		</div>

		<div class="lg:hidden">
			<button class="navbar-burger flex items-center text-blue-600 p-3">
				<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
		<ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
			<li v-for="(item, index) in props.links" :key="index">
				<RouterLink :to="item.link" class="text-md text-theme-text-color hover:text-blue-800 hover:font-bold hover:text-xl">{{ item.name }}</RouterLink>
			</li>
			<!--
			<li class="text-gray-400">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			-->
		</ul>
		<a id="theme-switch-button" class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-700 text-sm text-gray-900 hover:text-white font-bold  rounded-xl transition duration-200"><FontAwesomeIcon :icon="faLightbulb"/> Theme</a>
		<a class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold rounded-xl transition duration-200" > Sign up </a>
	</nav>
	</div>
	<!-- mobile: sliding navbar by menu button-->
	<div class="navbar-menu relative z-50 hidden">
		<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav class="bg-gradient-to-br from-indigo-100 to-fuchsia-200 fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div class="flex items-center mb-8">
				<a class="mr-auto text-3xl font-bold leading-none">
					<img alt="Corporation logo" class="inline h-16 sm:mx-0 sm:shrink-0" v-bind:src="logoImage"/>
				</a>
				<button class="navbar-close">
					<svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul>
					<li v-for="(item, index) in props.links" :key="index">
						<RouterLink :to="item.link" class="text-md text-theme-text-color hover:text-blue-800 hover:font-bold hover:text-xl">{{ item.name }}</RouterLink>
					</li>
				</ul>
			</div>
			<div class="mt-auto">
				<div class="pt-6">
					<a class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
					<a class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</a>
				</div>
				<p class="my-4 text-xs text-center text-gray-400">
					<span>{{ trademarkDescription }}</span>
				</p>
			</div>
		</nav>
	</div>
</div>
</template>
<script setup>
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
	logoImage: {
	type:String,
	Required:true
	},
	trademarkDescription: {
	type:String,
	Required:true
	},
	links:{
	type:Array,
	Required:false
	}
});
// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // mobile menu open effect
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
					console.log('menu'+j+ '  : '+menu[j])
                }
            });
        }
    }

    //mobile menu close effect
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (let i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (let i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

	/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
	var lastScrollPos=window.scrollY;
	window.onscroll=function(){

		var currentScrollPos=window.scrollY;

		//element position should be relative; if not, it can be adjusted from JS
		var element = document.getElementById('navbar');

		//scrolled up
		if (currentScrollPos < lastScrollPos ){

			//position the relative element by page viewport

			element.style.top=element.style.top=window.visualViewport.pageTop.toString().concat('px')
			element.style.transitionDuration=String('0.3s');
			//element.style.position = 'relative';
		}
		//scroll down
		else{

			element.style.top = String('0px');

		}
		lastScrollPos=currentScrollPos;

	}

	document.getElementById('theme-switch-button').onclick=function() {

		if (document.documentElement.classList.contains("light")) {
			document.documentElement.classList.remove("light")
			document.documentElement.classList.add("dark")
		} else if (document.documentElement.classList.contains("dark")) {
			document.documentElement.classList.remove("dark")
			document.documentElement.classList.add("light")
		} else {
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add("dark")
			} else {
			document.documentElement.classList.add("light")
			}
		}

 }
});
</script>