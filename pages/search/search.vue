<template>
	<view class="app">
		<view class="headers">
			<view class="img">
				<image src="../../static/searchIcon.png" mode=""></image>
			</view>
			<view class="aInput">
				<input type="text" value="" placeholder="请输入搜索内容" cursor-spacing=10 @confirm="search" />
			</view>
			<view class="text">
				搜索
			</view>
		</view>
       <view class="contents">
       	 <view class="item" v-for="item in list" :key="item.id">
       	 	<view class="img">
       	 		<image :src="item.cover" mode=""></image>
       	 	</view>
			<view class="name">
				{{item.name}}
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
		props: {},
		data() {
			return {
				keyword: '',
				list:[],
				searchList:[]
			}
		},
		methods: {
			search(e) {
				this.keyword = e.detail.value
				uni.request({
					url:`https://www.imovietrailer.com/superhero/search/list?&qq=2684425594&keywords=${this.keyword}&page&pageSize`,
					method: 'POST',
					data: {
						// keywords:this.keyword,
						// qq:'',
						// page: 1,
						// pasize: 10,
					},
					success: res => {
						 this.list=res.data.data.rows
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		mounted() {
			uni.request({
				// url: this.$api('/search/list'),
				url:`https://www.imovietrailer.com/superhero/search/list?qq=2684425594&keywords&page&pageSize`,
				method: 'POST',
				data: {
					// keywords:this.keyword,
					// qq:'',
					// page: 1,
					// pasize: 10,
				},
				success: res => {
					// console.log(res)
					if(res.statusCode===200){
					  this.list=res.data.data.rows
					}
				
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

<style scoped lang="scss">
	.app {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.headers {
		width: 100%;
		height: 30px;
		display: flex;
		justify-content: space-around;
		margin-top: 30px;

		.img {
			width: 10%;
			position: absolute;
			left: 11px;

			image {
				width: 25px;
				height: 25px;
				margin-top: 2.5px;
			}
		}

		.aInput {
			width: 80%;
			height: 30px;

			input {
				width: 90%;
				height: 30px;
				border: 1px solid #ccc;
				border-radius: 20px;
				text-indent: 30px;
			}
		}

		.text {
			width: 10%;
			height: 30px;
			font-size: 15px;
			line-height: 32px;
		}
	}
	.contents{
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-top: 30px;
		.item{
			width: 30%;
			height: 200px;
			margin-top: 10px;
			margin-left: 3%;
			.img{
				width:100%;
				height: 150px;
				image{
					width:100%;
					height: 150px;
				}
			}
			.name{
				font-size: 15px;
			}
		}
	}
</style>
