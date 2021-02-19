<template>
  <div id="app">
  

  <vHeader/>
  <vContent/>
  <vCnt/>
  <vFooterNotation/>
  </div>
</template>

<script>

import vHeader from './components/header'
import vContent from './components/content'
import vCnt from './components/cnt'
import vFooterNotation  from './components/footerNotation'

export default {
  name: 'App',
  components: {
    vHeader,
    vContent,
    vCnt,
    vFooterNotation
  }  
}
</script>

<style lang="scss">

*{
  width: 100%;
  height: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-decoration: none;
  outline: none;
}


// body::-webkit-scrollbar {
//   width: 1em;
//   background: #fff;
//   /* display: none; */
// }
 
// body::-webkit-scrollbar-track {
//   box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
// }
 
// body::-webkit-scrollbar-thumb {
//   background-color: #F7654A;;
//   outline: 1px solid slategrey;
// }


@font-face {
	font-family: 'Montserrat';
	src: url('./assets/fonts/Montserrat/fonts/montserrat_alternates_extralight.eot'); /* IE 9 Compatibility Mode */
	src: url('./assets/fonts/Montserrat/fonts/montserrat_alternates_extralight.ttf') format('embedded-opentype'), /* IE < 9 */
		url('./assets/fonts/Montserrat/fonts/montserrat_alternates_extralight.woff2') format('woff2'), /* Super Modern Browsers */
		url('./assets/fonts/Montserrat/fonts/montserrat_alternates_extralight.woff') format('woff'), /* Firefox >= 3.6, any other modern browser */
		url('./assets/fonts/Montserrat/fonts/montserrat_alternates_extralight.ttf') format('truetype'), /* Safari, Android, iOS */
		url('./assets/fonts/Montserrat/fonts/montserrat_alternates_extralight.svg') format('svg'); /* Chrome < 4, Legacy iOS */
}


@font-face {
	font-family: 'Playfair Display';
	src: url('./assets/fonts/Playfair Display/fonts/playfair_display_regular.eot'); /* IE 9 Compatibility Mode */
	src: url('./assets/fonts/Playfair Display/fonts/playfair_display_regular.eot') format('embedded-opentype'), /* IE < 9 */
		url('./assets/fonts/Playfair Display/fonts/playfair_display_regular.woff2') format('woff2'), /* Super Modern Browsers */
		url('./assets/fonts/Playfair Display/fonts/playfair_display_regular.woff') format('woff'), /* Firefox >= 3.6, any other modern browser */
		url('./assets/fonts/Playfair Display/fonts/playfair_display_regular.ttf') format('truetype'), /* Safari, Android, iOS */
		url('./assets/fonts/Playfair Display/fonts/playfair_display_regular.svg') format('svg'); /* Chrome < 4, Legacy iOS */
}
</style>
