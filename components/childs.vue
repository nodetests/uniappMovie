<template>
	<view class="">
		<view @click="iconBack">
			返回
		</view>
		<view class="">
			222222222
		</view>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {},
		data() {
			return {}
		},
		methods: {
		  iconBack(){
			 uni.navigateBack() 
		  }
		},
		onNavigationBarButtonTap(e){
			// console.log(11111)
		},
		mounted() {

		},
		
		onLoad() {

		},
		filters: {

		},
		computed: {

		},
		watch: {

		},
		directives: {

		}
	}
</script>

<style scoped lang="scss">

</style>
