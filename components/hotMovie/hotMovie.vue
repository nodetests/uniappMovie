<template>
	<view>
		<view class="msg">
			<scroll-view class="scroll-x" scroll-x="true" scroll-left="120">
				<view class="hotItem" v-for="item in hotMovie" :key='item.id'>
					<view class="img">
						<image :src="item.cover" mode=""></image>
					</view>
					<view class="name">
						{{item.name}}
					</view>
					<view class="star">
						<view class="rate">
							<uniRate text="1" size="18" margin="5" :value="item.score/2" @change="rateChange"></uniRate>
						</view>
						<view class="score">
							{{item.score}}
						</view>

					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import uniRate from '../wyc-rate/uni-rate.vue'
	export default {
		name: "",
		components: {
			uniRate
		},
		props: {
			hotMovie: {
				type: Array
			}
		},
		data() {
			return {}
		},
		methods: {

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
	.msg {
		width: 100%;
		margin-top: 20px;
	}

	.msg .scroll-x {
		width: 100%;
		display: flex;
		flex: 1;
		white-space: nowrap;
	}

	.msg .scroll-x .hotItem {
		width: 150px;
		height: 260px;
		display: inline-block;
		margin-left: 5px;
		overflow: hidden;
	}

	.msg .scroll-x .hotItem:nth-child(1) {
		margin-left: 0;
	}

	.msg .scroll-x .img {
		width: 150px;
		height: 200px;
	}

	.msg .scroll-x image {
		width: 150px;
		height: 200px;
	}

	.msg .scroll-x .hotItem .name {
		width: 150px;
		font-size: 14px;
		color: #353535;
		// 单行溢出隐藏
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		// 多行溢出隐藏
		// overflow: hidden;
		// text-overflow: ellipsis;
		// display: -webkit-box;
		// -webkit-line-clamp: 3;
		// -webkit-box-orient: vertical;
	}

	.msg .scroll-x .hotItem .star {
		width: 150px;
		height: 30px;
		font-size: 14px;
		display: flex;
		justify-content: flex-start;
	}

	.msg .scroll-x .hotItem .star .rate {
		line-height: 30px;
	}

	.msg .scroll-x .hotItem .star .score {
		height: 18px;
		margin-left: 15px;
	}

	::-webkit-scrollbar {
		display: none;
	}
</style>
