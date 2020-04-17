export default {
 getBanners(){
    uni.request({
    	url: '/index/carousel/list',
    	method: 'POST',
    	data: {qq:'5858310'},
		header: {
			'content-type': 'application/x-www-form-urlencoded', 
		},
    	success: res => {
			console.log(res)
		},
    	fail: (err) => {
			console.log(err)
		},
    	complete: () => {}
    });
 }
}