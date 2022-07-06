<template>
	<div class="login">
		<TopBanner></TopBanner>
		<div class="title">
			<div><span>登录</span></div>
		</div>
		<div class="login-box">
			<div>
				<div class="login-box-left">
					<div class="QR-code-top"><img src="../../assets/img/e6f2388d454c82004905753802e9cfe709d80d08.png" /></div>
					<div class="QR-code">
						<img
							src="data:image/png;base64,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"
							style="display: block;"
						/>
					</div>
					<div class="login-box-left-footer">
						<p>扫描二维码登录</p>
						<p>
							请使用
							<a href="javascript:;">哔哩哔哩客户端</a>
							<br />
							扫码登录
							<br />
							或扫码下载APP
						</p>
					</div>
				</div>
				<div class="login-box-mid"></div>
				<div class="login-box-right">
					<div>
						<div class="login-type">
							<router-link to="/login">密码登录</router-link>
							<a href="#">短信登录</a>
						</div>
						<div class="username">
							<input type="text" v-model="phone" placeholder="你的手机号"/>
							<span>{{phoneError}}</span>
						</div>
						<div class="password">
							<input type="password" v-model="password" placeholder="密码"/>
							<span>{{passwordError}}</span>
						</div>
						<div class="remember">
							<label>
								<input type="checkbox" />
								<span>记住我</span>
								<span class="prompt">不是自己的电脑上不要勾选此项</span>
							</label>
							<div>
								<a href="javascript:;">无法验证？</a>
								<a href="javascript:;">忘记密码？</a>
							</div>
						</div>
						<div class="btn">
							<button class="login-btn" @click="login">登录</button>
							<button class="register-btn" @click="goRegisterPage">注册</button>
						</div>
						<div class="other-login">
							<a href="javascript:;" class="web">微博账号登录</a>
							<a href="javascript:;" class="qq">QQ账号登录</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="agree">
			<p>
				登录即代表你同意
				<a href="javascript:;">用户协议</a>
				和
				<a href="javascript:;">隐私政策</a>
			</p>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import TopBanner from '@/components/TopBanner.vue';
import Footer from '@/components/Footer.vue';
export default {
	name: 'Login',
	data(){
		return{
			phone:'',
			password:'',
			phoneError:'',
			passwordError:''
		}
	},
	methods:{
		login(){
			this.clearError()
			if(this.phone == ''){
				this.phoneError = '手机号不能为空'
			}else if(this.password == ''){
				this.passwordError = '密码不能为空'
			}else{
				let str = localStorage.getItem('user')
				var userList = Array()
				if(str){
					userList = JSON.parse(str)
				}
				for(var obj in userList){
					var temp = userList[obj]
					if(temp.phone == this.phone){
						if(temp.password == this.password){
							sessionStorage.setItem('username',temp.username)
							this.$router.push('/')
							return
						}else{
							this.passwordError = '密码错误'
							return
						}
					}
				}
				this.phoneError = '手机号不存在，请输入注册时用的手机号'
			}
		},
		clearError(){
			this.phoneError = ''
			this.passwordError = ''
		},
		goRegisterPage(){
			this.$router.push('/register')
		}
	},
	components: {
		TopBanner,
		Footer
	}
};
</script>

<style scoped>
* {
	padding: 0;
	margin: 0;
}
.login{
	background: white;
}
.title{
	max-width: 100%;
	min-width: 1500px;
}
.title div{
	width: 980px;
	height: 29px;
	margin: 0 auto;
	border-bottom: 1px solid #ddd;
	margin: 0 auto 28px;
	text-align: center;
}
.title span {
	height: 56px;
	margin: 0 auto;
	padding: 0 20px;
	font-size: 40px;
	background: #fff;
}
.login-box {
	max-width: 100%;
	min-width: 1518px;
	height: 376px;
	margin: 0 auto;
}
.login-box>div{
	width: 980px;
	height: 100%;
	margin: 0 auto;
}
.top-banner {
	margin-bottom: 20px;
}
.login-box-left {
	float: left;
	width: 489px;
	height: 100%;
}
.QR-code {
	margin: 0 auto;
	width: 140px;
	height: 140px;
}
.QR-code img {
	width: 100%;
	height: 100%;
}
.QR-code-top {
	width: 70px;
	height: 70px;
	margin: 0 auto;
	transform: translate(-42px, 14px);
}
.QR-code-top img {
	width: 100%;
	height: 100%;
}
.login-box-left-footer {
	width: 100%;
	height: 150px;
	background: url(../../assets/img/2233login.af9c53d.png) no-repeat;
}
.login-box-left-footer p {
	text-align: center;
	color: #717171;
	font-size: 14px;
}
.login-box-left-footer p a {
	color: #00a1d6;
}
.login-box-left-footer p:first-child {
	padding-top: 20px;
	color: #222;
	font-size: 18px;
	letter-spacing: 3px;
	margin-bottom: 5px;
}
.login-box-mid {
	float: left;
	height: 300px;
	margin-top: 28px;
	border-right: 1px solid #ddd;
}
.login-box-right {
	float: left;
	width: 489px;
	height: 100%;
}
.login-box-right > div {
	width: 414px;
	margin: 0 auto;
	margin-top: 40px;
}
.login-type {
	font-size: 14px;
	margin-bottom: 12px;
}
.login-type a {
	margin-left: 20px;
}
.login-type .router-link-active {
	color: #02a7de;
}
.username {
	width: 100%;
	height: 66px;
	margin-bottom: 10px;
}
.username input {
	box-sizing: border-box;
	width: 100%;
	border: 1px solid #ddd;
	font-size: 14px;
	padding: 10px;
	vertical-align: middle;
	height: 40px;
	border-radius: 4px;
	outline: none;
}
.username span {
	color: red;
	font-size: 12px;
	margin-top: 7px;
}
.password {
	width: 100%;
	height: 66px;
	margin-bottom: 10px;
}
.password input {
	box-sizing: border-box;
	width: 100%;
	border: 1px solid #ddd;
	font-size: 14px;
	padding: 10px;
	vertical-align: middle;
	height: 40px;
	border-radius: 4px;
	outline: none;
}
.password span {
	color: red;
	font-size: 12px;
	margin-top: 7px;
}
.remember {
	padding: 10px 0;
	font-size: 12px;
	width: 100%;
}
.remember label {
	float: left;
}
.remember label input {
	float: left;
}
.remember label span {
	display: block;
	float: left;
	margin-top: -1px;
	margin-left: 5px;
}
.remember .prompt {
	color: #bbb;
	margin-left: 10px;
}
.remember > div {
	float: right;
}
.remember > div a {
	margin-left: 10px;
	color: #00a1d6;
}
.btn {
	width: 100%;
	height: 38px;
	margin-top: 17px;
}
.login-btn {
	float: left;
	width: 186px;
	height: 38px;
	border: 1px solid #359ec1;
	background-color: #00a7de;
	border-radius: 2px;
	color: #fff;
	margin-right: 42px;
	outline: none;
}
.register-btn {
	float: left;
	width: 186px;
	height: 38px;
	border: 1px solid #359ec1;
	background-color: #fff;
	border-radius: 2px;
	outline: none;
}
.other-login {
	padding: 12px 0;
	font-size: 12px;
}
.web,
.qq {
	display: block;
	float: left;
	margin-right: 25px;
}
.web::before {
	content: '';
	display: inline-block;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAA+CAYAAADEfFBjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iRDVCMDQ2RkE3RDQ5MTRBNUI4NERBMDRGQzU5OUQ0ODIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0VBOTFFRjQzN0Y3MTFFNDlCMTQ5QzFDQkIyODlFQkUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDAyODc1ODIzN0QzMTFFNDlCMTQ5QzFDQkIyODlFQkUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjcyQjhGMkNEMkIyMDY4MTE4MjJBRkQ0MUM4MDYzRDFCIiBzdFJlZjpkb2N1bWVudElEPSJENUIwNDZGQTdENDkxNEE1Qjg0REEwNEZDNTk5RDQ4MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRG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);
	width: 21px;
	height: 21px;
	vertical-align: middle;
	margin-right: 5px;
}
.qq::before {
	content: '';
	display: inline-block;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAA+CAYAAADEfFBjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iRDVCMDQ2RkE3RDQ5MTRBNUI4NERBMDRGQzU5OUQ0ODIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0VBOTFFRjQzN0Y3MTFFNDlCMTQ5QzFDQkIyODlFQkUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDAyODc1ODIzN0QzMTFFNDlCMTQ5QzFDQkIyODlFQkUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjcyQjhGMkNEMkIyMDY4MTE4MjJBRkQ0MUM4MDYzRDFCIiBzdFJlZjpkb2N1bWVudElEPSJENUIwNDZGQTdENDkxNEE1Qjg0REEwNEZDNTk5RDQ4MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRG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);
	width: 21px;
	height: 21px;
	vertical-align: middle;
	margin-right: 5px;
	background-position: 0 -41px;
}
.agree{
		max-width: 100%;
		min-width: 1518px;
}
.agree p {
	width: 980px;
	margin: 24px auto 0;
	font-size: 12px;
	color: #99a2aa;
	line-height: 16px;
	text-align: center;
	margin-bottom: 25px;
}
.agree p a {
	color: #00a1d6;
}
</style>
