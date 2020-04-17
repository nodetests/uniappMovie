<template>
	<view class="app">
		<view class="contains">
			<view class="header">
				<view class="iconBack" @click="iconBack">
					<image src="../../static/iconBack.png" mode=""></image>
				</view>
				<view class="texts">我的账号</view>
			</view>
			<view class="info">
				<view class="sets" @click="userimg">
					<view class="">
						头像
					</view>
					<view class="detail">
						<image :src="userInfo.faceImage" mode=""></image>
					</view>
				</view>
				<view class="sets" @click="usernick">
					<view class="">
						昵称
					</view>
					<view class="detail">
						{{userInfo.nickname}}
					</view>
				</view>
				<view class="sets" @click="userbir">
					<view class="">
						生日
					</view>
					<view class="detail">
						{{userInfo.birthday}}
					</view>
				</view>
				<view class="sets" @click="usersex">
					<view class="">
						性别
					</view>
					<view class="detail" v-if="userInfo.sex===0">
						男
					</view>
					<view class="detail" v-if="userInfo.sex===1">
						女
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<button type="default" @click="exit">退出登录</button>
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
			return {
				userInfo: {},
				imgFiles: '',
				id: '',
				sex: '',
				birthday: ''
			}
		},
		methods: {
			iconBack() {
				console.log(1)
				uni.switchTab({
					url:'../my/my'
				})
			},
			userimg() {
				let user = this.userInfo
				let that =this
				uni.chooseImage({
					count: 1,
					sizeType: ['copressed'],
					success(res) {
						console.log(res)
						//因为有一张图片， 输出下标[0]， 直接输出地址
						let imgFiles = res.tempFilePaths[0]
						// this.imgFiles = imgFiles
						// console.log(this.imgFiles)
						// console.log(ids)
						uni.uploadFile({
							url: 'https://www.imovietrailer.com/superhero/user/uploadFace?qq=2684425594', //仅为示例，非真实的接口地址
							filePath: imgFiles,
							name: 'file',
							formData: {
								userId: user.id,
							},
							header: {
								'headerUserId': user.id,
								'headerUserToken': user.userUniqueToken,
								'consumes': 'multipart/form-data',
							},
							success: (res) => {
								console.log(res);
								let jsons = JSON.parse(res.data)
								// that.userInfo = jsons
								that.$store.state.userInfo=jsons.data
							   console.log(that.$store.state.userInfo)
							   that.userInfo=jsons.data
							}
						});
					}	 
				})
			},
			usernick() {
				uni.navigateTo({
					url: '../usernickname/usernickname'
				})
			},
			userbir() {
			  uni.navigateTo({
				url: '../userbirthday/userbirthday'
			  })
			},
			usersex() {
            uni.navigateTo({
            	url:'../usersex/usersex'
            })
			},
			exit() {

			},
		},
		mounted() {
			// console.log(this.$store.state.userInfo)
			// console.log(uni.getStorageSync('userinfo'))
			this.userInfo = this.$store.state.userInfo
			// this.userInfo = uni.getStorageSync('userinfo')
			// console.log(this.userInfo.id)
		},
		activated() {
			this.userInfo = this.$store.state.userInfo
			console.log('我被触发没？')
		},
		onHide() {
		this.ifOnShow=true	
		},
		onShow() {
			if(this.ifOnShow){
				this.userInfo = this.$store.state.userInfo
			}
			console.log('onShow？')
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
		background: #F7F7F7;
	}

	.contains {
		width: 96%;
		margin-left: 2%;

	}

	.header {
		width: 100%;
		height: 70px;

		display: flex;
		justify-content: flex-start;
		background: #FFB40E;

		.iconBack {
			width: 30px;
			height: 30px;
			margin-top: 20px;

			image {
				width: 30px;
				height: 30px;
			}
		}

		.texts {
			width: 100%;
			height: 30px;
			margin-top: 20px;
			font-size: 18px;
			text-align: center;
			color: #FFFDEF;
		}
	}

	.info {
		background: #fff;
	}

	.sets {
		display: flex;
		justify-content: space-between;
		font-size: 18px;
		margin-top: 25px;
		height: 50px;
		line-height: 50px;

		.detail {
			margin-right: 30px;
			height: 50px;
			line-height: 50px;
		}

		image {
			width: 30px;
			height: 30px;
			border-radius: 50%;
			margin-top: 10px;
		}
	}
</style>
