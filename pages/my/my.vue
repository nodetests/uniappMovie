<template>
	<view class="app">
		<view class="ulogin" v-if="!usernameFlag">
			<view class="header">
				<view class="img">
					<image src="../../static/uerUlogin.png" mode=""></image>
				</view>
				<view class="login" @click="login">
					登录/注册
				</view>
			</view>
			<view class="text">
				请先去注册/登录
			</view>
			<view class="oTherlogin">
				<view class="texts">
					第三方登录
				</view>
				<view class="way">
					<view class="qq">
						<image src="../../static/QQ.png" mode="" @click="loginqq"></image>
					</view>
					<view class="weixin">
						<image src="../../static/weixin.png" mode="" @click="loginweixin"></image>
					</view>
					<view class="weibo">
						<image src="../../static/weibo.png" mode="" @click="loginweibo"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="alogin" v-if="usernameFlag" @click="setMyinfo">
			<view class="img">
				<image :src="userInfo.faceImage" mode=""></image>
			</view>
			<view class="my">
				用户{{userInfo.nickname}},您好
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
				usernameFlag: '',
				userInfo: {},
				ifOnShow: false
			}
		},
		methods: {
			login() {
				uni.navigateTo({
					url: '../login/login',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			setMyinfo() {
				uni.navigateTo({
					url: '../myinfo/myinfo',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			loginqq(){
				uni.navigateTo({
					url: '../login-qq/login-qq',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			loginweixin(){
				uni.navigateTo({
					url: '../login-weixin/login-weixin',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			loginweibo(){
				uni.navigateTo({
					url: 'wei',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			getUserinfo(){
				uni.login({
					provider: 'weixin',
					success: res => {
						let data ={}
						console.log(res)
						// // #ifdef MP-WEIXIN
						// data ={code:res.code}
						// // #endif
					},
					fail: () => {},
					complete: () => {}
				});
			}
			// getUserinfo() {
			// 	let _self  = this;
			// 	// #ifdef APP-PLUS
			// 	uni.login({
			// 		success: (res) => {
			// 			// console.log(JSON.stringify(res))
			// 			// 第三方登陆
			// 			// res 对象格式
			// 			//{"code":"***",
			// 			//"authResult":{
			// 			//"openid":"***",
			// 			//"scope":"snsapi_userinfo",
			// 			//"refresh_token":"**",
			// 			//"code":"****",
			// 			//"unionid":"***",
			// 			//"access_token":"***",
			// 			//"expires_in":7200
			// 			//},
			// 			//"errMsg":"login:ok"}

			// 			uni.getUserInfo({
			// 				success: (info) => {
			// 					// console.log(JSON.stringify(info))
			// 					// info 对象格式
			// 					// {"errMsg":"getUserInfo:ok",
			// 					// "rawData":"...
			// 					// "userInfo":{
			// 					//"openId":"***",
			// 					//"nickName":"***",
			// 					//"gender":1,
			// 					// "city":"Xi'an",
			// 					// "province":"Shaanxi",
			// 					// "country":"China",
			// 					// "avatarUrl":"头像",
			// 					// "unionId":"oU5Yyt_agt547zWyA0v0eLfFPqxo"
			// 					//},"signature":""}
			// 					// 与服务器交互将数据提交到服务端数据库
			// 					uni.request({
			// 						url: _self.apiServer + 'member&m=login',
			// 						method: 'POST',
			// 						header: {
			// 							'content-type': "application/x-www-form-urlencoded"
			// 						},
			// 						data: {
			// 							openid: info.userInfo.openId,
			// 							name: info.userInfo.nickName,
			// 							face: info.userInfo.avatarUrl,
			// 						},
			// 						success: res => {
			// 							console.log(JSON.stringify(res))
			// 							res = res.data;
			// 							if (res.status == 'ok') {
			// 								uni.showToast({
			// 									title: '登陆成功',
			// 									mask: false,
			// 									duration: 1500
			// 								});
			// 								uni.setStorageSync('SUID', res.data.u_id + '');
			// 								uni.setStorageSync('SRAND', res.data.u_random + '');
			// 								uni.setStorageSync('SNAME', res.data.u_name + '');
			// 								uni.setStorageSync('SFACE', res.data.u_face + '');

			// 								// 判断跳转方式
			// 								if (options.backtype == '1') {
			// 									uni.redirectTo({
			// 										url: options.backpage
			// 									});
			// 								} else {
			// 									uni.switchTab({
			// 										url: options.backpage
			// 									});
			// 								}
			// 							} else {

			// 								uni.showToast({
			// 									title: res.data
			// 								});
			// 							}
			// 						},
			// 						fail: () => {
			// 							console.log('登陆失败')
			// 						},
			// 						complete: () => {}
			// 					});

			// 				},
			// 				fail: () => {
			// 					uni.showToast({
			// 						title: "微信登录授权失败"
			// 					});
			// 				}
			// 			})
			// 		},
			// 		fail: () => {
			// 			uni.showToast({
			// 				title: "微信登录授权失败"
			// 			});
			// 		}
			// 	})
			// 	// #endif
			// }
		},
		mounted() {
			this.usernameFlag = this.$store.state.userInfo.username
			this.userInfo = this.$store.state.userInfo
			this.$forceUpdate();
			// console.log('我被激活了')
		},
		activated() {

			console.log('实例被激活时使用，用于重复激活一个实例的时候')
			this.usernameFlag = this.$store.state.userInfo.username
			this.userInfo = this.$store.state.userInfo
		},
		onLoad(options) {
			console.log(options)
		},
		onHide() {
			this.ifOnShow = true
		},
		onShow() {
			if (this.ifOnShow) {
				this.usernameFlag = this.$store.state.userInfo.username
				this.userInfo = this.$store.state.userInfo
				console.log('手机app触发')
			}
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

	.ulogin .header {
		display: flex;
		justify-content: flex-start;
		background: #0077AA;
		height: 200px;

		.img {
			width: 30%;
			margin-top: 50px;

			image {
				width: 100px;
				height: 100px;
				border-radius: 50px;
				margin-left: 20px;
			}
		}

		.login {
			width: 70%;
			height: 100px;
			line-height: 100px;
			margin-top: 50px;
			margin-left: 20px;
			font-size: 20px;
		}
	}

	.text {
		width: 100%;
		height: 100px;
		text-align: center;
		font-weight: 600;
		font-size: 15px;
		line-height: 100px;
		color: #F0AD4E;
	}

	.alogin {
		display: flex;
		justify-content: flex-start;
		height: 200px;

		.img {
			width: 30%;
			margin-top: 50px;

			image {
				width: 100px;
				height: 100px;
				border-radius: 50px;
				margin-left: 20px;
			}
		}

		.my {
			margin-left: 50px;
			line-height: 200px;
			font-size: 20px;
		}
	}

	.oTherlogin {
		width: 100%;

		// margin-top: 20px;
		.texts {
			font-size: 15px;
			color: #3F536E;
			text-align: center;
		}

		.way {
			display: flex;
			justify-content: space-around;

			image {
				width: 50px;
				height: 50px;
			}
		}
	}
</style>
