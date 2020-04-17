如果有问题可以联系：QQ:474977841
##### 参数
| 属性名  |  类型 |  默认值 | 说明  |
| :------------: | :------------: | :------------: | :------------: |
|  isFill | Boolean  | true  |  形状是否镂空 |
|  color | String  | #CB003C  | 星星的颜色 （空心） |
|  activeColor | String  | #CB003C  | 星星选中状态颜色（实心）  |
|  size | Number  | 24  | 星星大小  |
|  value | Number  | 1  | 评分值  |
|  max | Number  | 5  | 显示星星的个数  |
|  disabled | Boolean  | false  | 是否禁用  |
|  margin | String  | '0 0 0 0'  | 间距(可以设置多个方向)  |
|  border | String  | none  | 边框设置  |

------------
##### 事件
| 事件  |  说明 |  返回参数 |
| :------------: | :------------: | :------------: | :------------: |
|  change | Function  |  value(目前选中的数量) |

------------
说明
如果想自定义形状可以进入[www.iconfont.cn](http://www.iconfont.cn "www.iconfont.cn")下载代码图片

[components/rate/font-rate](components/rate/font-rate "components/rate/font-rate")	已选择的形状
（⚠️注意：components/rate/font-rate/uni-icon.vue）是设置形状的组件，可以进行看里面的注释进行修改
[components/rate/font-rate](components/rate/font-rate "components/rate/heart-not-filled")	未选择的形状



------------
```
<template>
	<view class="rate-content">
			<uniRate text="1" size="34" margin="10" :value="rateValue" @change="rateChange"></uniRate>
			<view class="rate-tips">{{rateTitleArr[rateValue-1]}}</view>
	</view>
</template>

<script>
	import uniRate from '@/components/rate/uni-rate'
	export default {
		components:{uniRate},
		data() {
			return {
				rateValue:1,
				rateTitleArr:['很差','差','中','好','很好']
			}
		},
		methods: {
			rateChange(val){
			  this.rateValue=val.value
			}
		}
	}
</script>

<style lang="scss">
	.rate-content{
		margin-top: 60rpx;
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
		.rate-tips{
			margin-top: 10rpx;
			font-size: 32rpx;
		}
	}
</style>

```

