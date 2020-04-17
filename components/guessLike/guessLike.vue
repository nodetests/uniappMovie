<template>
	<view class="">
		<view class="guesslikeItem" v-for="item in guessLike" :key="item.id">
			<view class="contents">
				<view class="img">
					<image :src="item.cover" mode=""></image>
				</view>
				<view class="introce">
					<view class="name">
						{{item.name}}
					</view>
					<view class="basicInfo">
						{{item.basicInfo}}
					</view>
					<view class="time">
						上映时间:{{item.createTime | getTime}}
					</view>
				</view>
				<view class="zan">
					<image src="../../static/zan2.png" mode="" @click="zan"></image>
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
			guessLike: {
				type: Array
			}
		},
		data() {
			return {}
		},
		methods: {
			zan() {
				uni.showToast({
					title: '点了一下赞',
					duration: 2000
				})
			}
		},
		mounted() {

		},
		onLoad() {

		},
		filters: {
			getTime: function() {
				var date = new Date(),
					year = date.getFullYear(),
					month = date.getMonth() + 1,
					day = date.getDate(),
					hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
					minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
					second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				month >= 1 && month <= 9 ? (month = "0" + month) : "";
				day >= 0 && day <= 9 ? (day = "0" + day) : "";
				var timer = year + '-' + month + '-' + day
				return timer;
			},
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
	.guesslikeItem {
		width: 100%;
		margin-top: 20px;
	}

	.guesslikeItem .contents {
		width: 100%;
		height: 200px;
		display: flex;
		justify-content: space-around;
	}

	.guesslikeItem .contents .img {
		width: 40%;
		height: 200px;
	}



	.guesslikeItem .contents .introce {
		width: 40%;
		height: 200px;

		view {
			margin-top: 20px;
		}

		.name {
			font-size: 16px;
			font-weight: 600;

		}

		.basicInfo {
			font-size: 14px;
			color: #666;
		}

		.time {
			font-size: 14px;
		}
	}

	.guesslikeItem .contents .zan {
		width: 20%;
		height: 200px;
	}

	.guesslikeItem .contents .img image {
		width: 150px;
		height: 200px;
		/* #ifdef  APP-PLUS */
		width: 80%;
		height: 100%;
		/*  #endif  */
		
	}

	.guesslikeItem .contents .zan image {
		width: 50px;
		height: 50px;
		margin-top: 75px;
	}
</style>
