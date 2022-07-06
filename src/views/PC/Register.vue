<template>
	<div class="register">
		<TopBanner></TopBanner>
		<div class="title">
			<div><span>注册</span></div>
		</div>

		<div class="from-box">
			<div class="form">
				<div class="username">
					<input type="text" placeholder="昵称" v-model="username">
				</div>
				<div class="username-error"><span>{{usernameError}}</span></div>
				<div class="password">
					<input type="password" placeholder="密码" v-model="password">
				</div>
				<div class="password-error"><span>{{passwordError}}</span></div>
				<div class="phone">
					<input type="text" placeholder="填写常用的手机号" v-model="phone">
				</div>
				<div class="phone-error"><span>{{phoneError}}</span></div>
				<div class="sms-code">
					<input type="text" placeholder="请输入验证码" v-model="code" style="width: 60%; vertical-align: top;">
					<!-- <button @click="getSmsCode">点击获取</button> -->
					<div style="display: inline-block;width: 30%;margin-left: 40px;">
						<img :src="smsCode.imgUrl" style="width: 100%; height: 40px;margin: 0;display: inline-block;" @click="getCode()" />
					</div>
				</div>
				<div class="register-agree">
					<label>
						<input type="checkbox" v-model="btnIsAvailable">
						<span>
							我已同意<a href="javascript:;">《哔哩哔哩弹幕网用户使用协议》</a>
							和<a href="javascript:;">《哔哩哔哩隐私政策》</a>
						</span>
					</label>
				</div>
				<div class="login-btn">
					<button @click="register" :disabled="!btnIsAvailable" :class="{'btn-color':!btnIsAvailable}">注册</button>
				</div>
				<div class="have-user">
					<router-link to="/login">已有账号，直接登录</router-link>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import TopBanner from '@/components/TopBanner.vue'
	import Footer from '@/components/Footer.vue'
	export default {
		name: 'Register',
		data() {
			return {
				username: '',
				phone: '',
				password: '',
				code: '',
				smsCode: '',
				btnIsAvailable: false,
				usernameError: '',
				phoneError: '',
				passwordError: '',
			}
		},
		created() {
			this.getCode()
		},
		methods: {
			register() {
				this.clearError()
				if (this.username == '') {
					this.usernameError = '用户名不能为空'
				} else if (this.password == '') {
					this.passwordError = '密码不能为空'
				} else if (this.phone == '') {
					this.phoneError = '手机号不能为空'
				} else {
					console.log(this.smsCode)
					if (this.smsCode.code!=this.code) {
						this.phoneError = '验证码错误'
					} else {
						let str = localStorage.getItem('user')
						var userList = Array()
						if (str) {
							userList = JSON.parse(str)
						}
						for (var obj in userList) {
							var temp = userList[obj]
							if (temp.username == this.username) {
								this.usernameError = '用户名已存在'
								return
							}
							if (temp.phone == this.phone) {
								this.phoneError = '手机号码已被注册'
								return
							}
						}
						let user = {
							username: this.username,
							password: this.password,
							phone: this.phone
						}
						userList.push(user)
						localStorage.setItem('user', JSON.stringify(userList))
						alert('注册成功，即将前往登录页面')
						this.$router.push('/login')
					}
				}

			},
			clearError() {
				this.usernameError = ''
				this.passwordError = ''
				this.phoneError = ''
			},
			getCode() {
				this.HttpService.get('/code', res => {
					this.smsCode = res
				}, err => {
					console.error(err)
				})
			}
		},
		components: {
			TopBanner,
			Footer
		}
	}
</script>

<style scoped>
	.register {
		background: white;
	}

	.top-banner {
		margin-bottom: 20px;
	}

	.title {
		max-width: 100%;
		min-width: 1518px;
	}

	.title div {
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

	.from-box {
		max-width: 100%;
		min-width: 1518px;
	}

	.form {
		width: 980px;
		margin: 0 auto;
		margin-top: 100px;
	}

	.form div {
		width: 420px;
		height: 40px;
		margin: 0 auto;
	}

	.form div>input {
		border-radius: 4px;
		border: 1px solid #dcdfe6;
		color: #606266;
		height: 40px;
		line-height: 40px;
		outline: 0;
		width: 100%;
		font-size: 16px;
		padding-left: 15px;
		box-sizing: border-box;

	}

	.username-error span,
	.password-error span,
	.phone-error span {
		display: block;
		line-height: 40px;
		color: red;
		font-size: 12px;
	}

	.sms-code {
		position: relative;
	}

	.sms-code button {
		width: 130px;
		height: 36px;
		position: absolute;
		right: -15px;
		top: 3px;
		border: 0;
		background-color: #00a1d6;
		color: #fff;
		border-radius: 4px;
		outline: none;
	}

	label {
		display: block;
		margin-top: 4px;
		font-size: 12px;
		margin-top: 10px;
	}

	label a {
		color: #00a1d6;
	}

	.login-btn .btn-color {

		background-color: #f5f5f5;
		border-color: #d9d9d9;
		color: #00000040;
	}

	.login-btn button {
		width: 100%;
		height: 100%;
		border: 0;
		color: #fff;
		outline: none;
		background-color: #00a1d6;
		padding: 0 15px;
	}

	.have-user {
		font-size: 12px;
		text-align: right;
		line-height: 40px;
	}

	.have-user a {
		color: #00a1d6;
	}

	.card-content {
		width: 532px;
		margin-top: 10px;

		box-sizing: border-box;
		padding-right: 0;
		padding-bottom: 20px;
	}
</style>
