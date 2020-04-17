<template>
	<view class="app">
		<view class="contian">
			<!--  -->
			<view class="header">
				<view class="iconBack">
					<image src="../../static/iconBack.png" mode="" @click="iconBack"></image>
				</view>
			</view>
			<view class="contents">
				<view class="userImg">
					<image src="../../static/uerUlogin.png" mode=""></image>
				</view>
				<view class="username">
					账号<input type="text" value="" @input="getUsername" />
				</view>
				<view class="password">
					密码<input type="text" value="" @input="getPassword" />
				</view>
			</view>
			<view class="logins">
				<button type="primary" @click="login">登录/注册</button>
			</view>
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
			return {
				username: '',
				password: '',
				userInfo: {}
			}
		},
		methods: {
			iconBack() {
				uni.switchTab({
					url: '../my/my'
				})
			},
			getUsername(e) {
				this.username = e.detail.value
			},
			getPassword(e) {
				this.password = e.detail.value
			},
			login() {
				let userBOs = {
					username: this.username,
					password: this.password
				}
				uni.request({
					url: `https://www.imovietrailer.com/superhero/user/registOrLogin?qq=2684425594`,
					method: 'POST',
					data: {
						password: this.password,
						username: this.username
					},
					success: res => {
						console.log(res)
						if (res.data.status === 200) {
							// var pages = getCurrentPages();
							// var currPage = pages[pages.length - 1]; //当前页面
							// var prevPage = pages[pages.length - 2]; //上一个页面
							// //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
							// prevPage.setData({
							//         isDoRefresh:true
							// })	
							uni.showToast({
								title: '登录成功',
								icon: 'success'
							})
							let userInfo = res.data.data
							let usernames = res.data.data.username
							uni.setStorageSync('username', usernames)
							uni.setStorageSync('userinfo', userInfo)
							this.$store.state.username = usernames
							this.$store.state.userInfo = userInfo
							console.log(this.$store.state.username)
							uni.switchTab({
								url: '../my/my',
								
							})
							uni.hideToast()
						}
						if (res.data.status === 500) {
							uni.showToast({
								title: '用户名或密码错误',
								icon: 'none'
							})
							uni.hideToast()
						}
					},
					fail: (err) => {
						console.log(err)
					},
					complete: () => {}
				});
			}
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
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.contian {
		width: 96%;
		margin-left: 2%;
	}

	.header {
		width: 100%;
		margin-top: 30px;

		image {
			width: 40px;
			height: 40px;
		}
	}

	.contents {
		width: 100%;

		.userImg {
			width: 100%;
			height: 100px;
			display: flex;
			justify-content: center;

			image {
				width: 100px;
				height: 100px;
				border-radius: 50px;

			}

		}

		.username,
		.password {
			width: 100%;
			display: flex;
			font-size: 15px;
			justify-content: flex-start;
			margin-top: 20px;
			border-bottom: 1px solid #ccc;

			input {
				width: 80%;
				height: 30px;
				text-indent: 10px;
				// border-radius: 30px;
				// border: 1px solid #666;
				margin-left: 20px;
			}
		}

	}

	.logins {
		margin-top: 50px;
	}
</style>
