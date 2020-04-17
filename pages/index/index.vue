<template>
	<view class="content">
		<view class="app">
			<view class="header">
				电影推荐
			</view>

			<!-- 轮播图 -->
			<view class="banners">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="item in banners" :key='item.id' class="bannerItem">
						<image :src="item.image" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
			<!-- 热门可以左右滑动 -->
			<view class="hotHero">
             <hotMovie :hotMovie='hotMovie'></hotMovie>
			</view>
		    <!--推荐 -->
			<view class="recommend">  	
		    	<trailerMovie :trailerMovie='trailerMovie'></trailerMovie>
		    </view>
			<view class="guessLike">
				<guessLike :guessLike='guessLike'></guessLike>
			</view>
			
			<view class="space">
				
			</view>
		</view>
	</view>
</template>

<script>
	// import http from '../../http/index.js';
	import hotMovie from '../../components/hotMovie/hotMovie.vue'
	import trailerMovie from '../../components/trailerMovie/trailerMovie.vue'
	import guessLike from '../../components/guessLike/guessLike.vue'
	export default {
		name: "",
		components: {
			hotMovie,trailerMovie,guessLike
		},
		props: {},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				banners: [],
				hotMovie: [],
				trailerMovie:[],
				guessLike:[]
			}
		},
		methods: {

		},
		onNavigationBarButtonTap(e) {
			console.log(11111)
		},
		mounted() {
			// console.log(this.$store.state)
			// 获取顶部轮播图
			uni.request({
				url: this.$api('index/carousel/list'),
				method: 'POST',
				data: {
					// 这里填写参数
					// qq: '2684425594'
				},
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					// console.log(res)
					if (res.statusCode === 200) {
						this.banners = res.data.data
						// console.log(this.banners)
					}
				},
				fail: (err) => {
					console.log(err)
				},
				complete: () => {}
			});
			// 获取热门
			uni.request({
				url: this.$api('index/movie/hot'),
				method: 'POST',
				data: {
					type: 'superhero'
				},
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					// console.log(res)
					if (res.statusCode === 200) {
						this.hotMovie = res.data.data
						// console.log(this.hotMovie)
					}
			
				},
				fail: () => {},
				complete: () => {}
			});
			uni.request({
				url: this.$api('index/movie/hot'),
				method: 'POST',
				data: {
					type:'trailer'
				},
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					if (res.statusCode === 200) {
						this.trailerMovie=res.data.data
					}
					// console.log(this.trailerMovie)
				},
				fail: () => {},
				complete: () => {}
			});
			uni.request({
				url: this.$api('index/guessULike'),
				method: 'POST',
				data: {},
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					if (res.statusCode === 200) {
						this.guessLike=res.data.data
					}
					console.log(this.guessLike)
				},
				fail: () => {},
				complete: () => {}
			});
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

<style lang="scss">
	.header{
		margin-top: 30px;
		text-align: center;
		}
	.content {
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.app {
		width: 96%;
		margin-left: 2%;
	}

	.banners {
		width: 100%;
		height: 230px;

		.swiper {
			width: 100% !important;
			height: 230px;

			.bannerItem {
				width: 100% !important;
				height: 230px;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

.space{
	height: 50px;
}
</style>
