<template>
	<view class="app">
		<view class="contains">
			<view class="header">
				<view class="iconBack">
					<image src="../../static/iconBack.png" mode="" @click="iconBack"></image>
				</view>
			</view>
			<view class="aInput">
				<input type="text" :value="values" @focus="birth" placeholder="请选择日期" />
			</view>
			<view class="submit">
				<button type="primary" @click="submit">提交</button>
			</view>
			<view class="uniCalendar">
				<uniCalendar @change="change"></uniCalendar>
			</view>
		</view>
	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		name: "",
		components: {
			uniCalendar
		},
		props: {},
		data() {
			return {
				dayControl: 0,
				values: ''
			}
		},
		methods: {
			iconBack() {
				uni.navigateBack()
			},
			submit() {
				   let user =this.userinfo
				uni.request({
					url: `https://www.imovietrailer.com/superhero/user/modifyUserinfo?qq=2684425594`,
					method: 'POST',
					data: {
						birthday: this.values,
						nickname: user.names,
						sex: user.sex,
						userId: user.id
					},
					header: {
						'headerUserId': user.id,
						'headerUserToken': user.userUniqueToken,
						'Content-Type': 'application/json'
					},
					success: res => {
						console.log(res)
						if (res.data.status === 200) {
							this.$store.state.userInfo = res.data.data
							uni.navigateBack()
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			change(e) {
				console.log(e);
				this.values = e.fulldate
			}
		},
		mounted() {
			this.userinfo = this.$store.state.userInfo
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
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.contains {
		width: 94%;
		margin-left: 3%;
	}

	.header {
		width: 100%;
		margin-top: 30px;

		image {
			width: 40px;
			height: 40px;
		}
	}

	.aInput {
		width: 100%;
		height: 30px;
		margin-top: 30px;

		input {
			width: 100%;
			height: 30px;
			border: 1px solid #ccc;
		}
	}

	.uniCalendar {
		margin-top: 20px;
		border-top: 2px solid #007AFF;
	}

	.submit {
		margin-top: 20px;
	}
</style>
