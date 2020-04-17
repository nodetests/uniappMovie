<template>
	<view class="app">
		<view class="contains">
			<view class="header">
				<view class="iconBack">
					<image src="../../static/iconBack.png" mode="" @click="iconBack"></image>
				</view>
			</view>
			<view class="aInput">
				<label v-for="(item,index) in values" :key="item.id" class="sex">
					<checkbox :value="item.value" @click="change(item,index)" :checked="actived==index" />{{item.name}}
				</label>

			</view>
			<view class="submit">
				<button type="primary" @click="submit">提交</button>
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
				values: [{
						value: 'male',
						name: '男'
					},
					{
						value: 'female',
						name: '女'
					}
				],
				actived: null,
				sex:''
			}
		},
		methods: {
			iconBack() {
				uni.navigateBack()
			},
			change(item, index) {
				console.log(item)
				console.log(index)
				this.actived = index
				this.sex=index
			},
			submit() {
				let user = this.userinfo
				console.log(this.userinfo.userUniqueToken)
				uni.request({
					url: `https://www.imovietrailer.com/superhero/user/modifyUserinfo?qq=2684425594`,
					method: 'POST',
					data: {
						birthday: user.birthday,
						nickname: user.names,
						sex: this.sex,
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
			}
		},
		mounted() {
			this.userinfo = this.$store.state.userInfo
			this.actived=this.$store.state.userInfo.sex
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
		display: flex;
		justify-content: flex-start;

		input {
			width: 100%;
			height: 30px;
			border: 1px solid #ccc;
		}
	}

	.submit {
		margin-top: 20px;
	}

	.sex {}
</style>
