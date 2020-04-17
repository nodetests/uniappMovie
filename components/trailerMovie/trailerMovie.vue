<template>
	<view class="app">
		<view class="movie" v-for="(item,index) in trailerMovie" :key='item.id'>
			<view class="uni-padding-wrap uni-common-mt">
				<view>
					<!-- #ifdef MP-WEIXIN -->
						<image :src="item.cover" mode=""></image>
					<!-- #endif -->
					
					<video :id="item.id" :src="item.trailer" @error="videoErrorCallback" show-fullscreen-btn controls
					 objectFit:contain auto-pause-if-open-native @play="plays(item,index)" @pause="pause" :poster="item.cover"></video>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {
			trailerMovie: {
				type: Array
			}
		},
		data() {
			return {
				indexs: null
			}
		},
		methods: {
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			pause() {

			},
			plays(item, index) {
				console.log(item)
				let id = item.id;
				let arr =this.$props.trailerMovie
				let length =this.$props.trailerMovie.length
				this.videoContext = uni.createVideoContext(id)
				for (let i = 0; i <length; i++) {
					const tempid = arr[i].id
					if (tempid != id) {
						uni.createVideoContext(tempid).pause()
					}
				}
			}
		},
		onReady() {

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
	.app {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.app .movie {
		width: 50%;
	}
	/* #ifdef  MP-WEIXIN */	
		.app .movie image {
			width: 38%;
			height: 200px;
			position: absolute;
			margin-left: 5%;
		}
		.app .movie video {
			opacity: 0.6;
		}
		/* #endif */
	.app .movie video {
		width: 80%;
		margin-left: 10%;
		height: 200px;
	}
</style>
