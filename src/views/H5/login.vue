<template>
	<div id="login">
		<div class="header-box text-box-color text-title-color">
			<h1>
				{{state.title || "登陆"}}bilibili
			</h1>
		</div>

		<div class="form-group">
			<form>
				<ul class="list-group list-group-border">
					<li class="list-group-li" style="display: flex;">
						<div class="input-item clearfix text-box-color">
							<span class="float-left input-title text-title-color">账号</span>
							<input placeholder="用户名" v-model="phone" type="text" name="username" autocomplete="on" class="float-left input-text text-title-color long-width">
							<div class="float-left input-status clearfix">
								<span data-v-15db3d56="" @click="phone=''"></span>
								<!---->
							</div>
							<!---->
						</div>
					</li>
					<li class="list-group-li" style="display: flex;">
						<div class="input-item clearfix text-box-color">
							<span class="float-left input-title text-title-color">密码</span>
							<input placeholder="请输入密码" v-model="password" maxlength="20" type="password" autocomplete="on" class="float-left input-text text-title-color long-width">
							<div class="float-left input-status clearfix">
								<span data-v-15db3d56="" @click="password=''"></span>
								<!---->
							</div>
							<!---->
						</div>
					</li>
					<li class="list-group-li" style="display: flex;" v-show="state.state">
						<div class="input-item clearfix text-box-color">
							<span class="float-left input-title text-title-color">确认密码</span>
							<input placeholder="请输入密码" v-model="password2" maxlength="20" type="password" autocomplete="on" class="float-left input-text text-title-color long-width">
							<div class="float-left input-status clearfix">
								<span data-v-15db3d56="" @click="password2=''"></span>
								<!---->
							</div>
							<!---->
						</div>
					</li>
					<li class="list-group-li" style="display: flex;">
						<div class="input-item clearfix text-box-color codePut">
							<span class="float-left input-title text-title-color">验证码</span>
							<input placeholder="请输入验证码" v-model="code" style="width: 50%;" maxlength="20" type="password" autocomplete="on"
							 class="float-left input-text text-title-color long-width">

							<!---->
						</div>
						<div class="codeImg">
							<img class="code" @click="getCode()" :src="smsCode.imgUrl" />
						</div>
					</li>
				</ul>
			</form>
		</div>
		<div class="forget-group">
			<p><a href="javascript:;" class="pink-color">忘记密码</a></p>
		</div>
		<div class="btn-box clearfix">
			<a href="javascript:;" class="btn-primary btn-width" @click="switchover()">{{state.btn1 || "注册"}}</a>
			<div class="btn-default btn-width btn-default-disable" @click="toLogin()">{{state.btn2 || "登陆"}}</div>
		</div>
		<p class="explain tips">登录即代表你同意<a href="javascript:;">用户协议</a>和
			<a href="javascript:;">隐私政策</a></p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				state: {},
				login: {
					state: 0,
					title: '登陆',
					btn1: "注册",
					btn2: "登陆"
				},
				enroll: {
					state: 1,
					title: '注册',
					btn1: "登陆",
					btn2: "同意并注册"
				},
				phone: '',
				password: '',
				password2: '',
				code: '',
				smsCode: ''
			}
		},
		created() {
			this.state = this.login;
			this.getCode()
		},
		methods: {
			switchover() {
				this.state.state == 0 ? this.state = this.enroll : this.state = this.login;
				this.phone= ''
				this.password= ''
				this.password2= ''
				this.code= ''
			},
			toLogin() {
				if (this.state.state == 0) {
					// 登陆
					if (this.phone == '') {
						this.$toast("账号不能为空");
					} else if (this.password == '') {
						this.$toast("密码不能为空")
					} else if (this.smsCode.code != this.code) {
						this.$toast("验证码错误")
						this.getCode();
					} else {
						let str = localStorage.getItem('user')
						var userList = Array()
						if (str) {
							userList = JSON.parse(str)
						}
						for (var obj in userList) {
							var temp = userList[obj]
							if (temp.phone == this.phone) {
								if (temp.password == this.password) {
									sessionStorage.setItem('username', temp.username)
									this.$router.push('/')
									return
								} else {
									this.$toast("密码错误")
									return
								}
							}
						}
						this.$toast('账号不存在，请先注册账号')
					}
				} else {
					// 注册
					if (this.username == '') {
						this.$toast('用户名不能为空')
					} else if (this.password == '') {
						this.$toast('密码不能为空')
					} else if (this.phone == '') {
						this.$toast('账号不能为空')
					} else {
						// let str = sessionStorage.getItem('smsCode')
						// let smsCode = JSON.parse(str)
						if (this.password != this.password2) {
							this.$toast('确认密码不一致')
						} else if (this.smsCode.code != this.code) {
							this.$toast("验证码错误")
							this.getCode();
						} else {
							let str = localStorage.getItem('user')
							var userList = Array()
							if (str) {
								userList = JSON.parse(str)
							}
							for (var obj in userList) {
								var temp = userList[obj]
								if (temp.username == this.username) {
									this.$toast('用户名已存在')
									return
								}
								if (temp.phone == this.phone) {
									this.$toast('手机号码已被注册')
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
							this.switchover()
							this.getCode()
							// this.$router.push('/login')
						}
					}
				}
			},
			getCode() {
				this.HttpService.get('/code', res => {
					this.smsCode = res
				}, err => {
					console.error(err)
				})
			}
		},

	}
</script>

<style scoped>
	.text-box-color {
		border-bottom: 1px solid #e7e7e7;
		border-top: 1px solid #e7e7e7;
	}

	.header-box {
		box-sizing: border-box;
		/* width: 10rem; */
		/* min-height: 1.173333rem; */
		padding: 0 .32rem;
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.text-box-color {
		background: #fff;
	}

	.text-title-color {
		color: #212121;
	}

	.header-box h1,
	.text-ellipsis {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.header-box h1 {
		flex: 1 1 100%;
		font-size: 4.5vw;
		text-align: center;
		line-height: 10vw;
		padding: .32rem 0;
		word-break: break-all;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: 400;
	}

	.form-group {
		width: 100%;
		margin: 0 auto;
		padding-top: 5vw;
	}

	.list-group {
		width: 100%;

		box-sizing: border-box;
	}

	.list-group-border {
		border-bottom: 1px solid #e7e7e7;
	}

	.list-group-li {
		background: #fff;
	}

	.list-group>li .input-item {
		border-bottom: none;
	}

	.text-box-color {
		border-bottom: 1px solid #e7e7e7;
		border-top: 1px solid #e7e7e7;
	}

	.input-item {
		position: relative;
		/* width: 10rem; */
		min-height: 14vw;
		padding: 0 3vw;
		box-sizing: border-box;
	}

	.text-box-color {
		background: #fff;
	}

	.input-item .input-title {
		/* min-height: 1.173333rem; */
		line-height: 14vw;
		width: 20vw;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		font-family: PingFangSC-Regular;
		font-size: 4vw;
	}

	.text-title-color {
		color: #212121;
	}

	.float-left {
		float: left;
	}

	.input-item .long-width {
		width: 68vw;
	}

	.input-item .input-text {
		line-height: .533333rem;
		padding: .32rem 0;
		height: 14vw;
		border: none;
		width: 68vw;
		background: none;
		box-sizing: border-box;
		font-family: PingFangSC-Regular;
		font-size: 4vw;
	}

	.input-item .input-status {
		width: 6vw;
		min-height: 14vw;
	}

	.input-item .input-status span[data-v-15db3d56] {
		width: 4.2vw;
		height: 4.2vw;
		margin-top: 4vw;
		float: right;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAAAXNSR0IArs4c6QAAA2hJREFUWAntV8tqk0EUjvVGEqGtiuDCeImu1IVk78IbZBEIJFAXyVp9BjdufAORqi/QNg3xAXQveFtIEDRR0wREKUkMuWiqid83/udnZjL5W0RBpAMnZ851zpyZOf9JKGSNHR6dEP6MTMbj8TPObY26KExg+lB+6OOcLibjpc6w54fAoMUeEUgYFCQQyifgmX6//5o0lUShTWIwGLwjDofDJ4j/zNhpuTkDehbQFL6kZg6MuDA9/JxYgownk8nZhYWFA71eb8lT8DNOWqUOwrdQuiI0BeIh1Gq17kaj0audTuc7BTIkBtKGS9AqBlH8e1gPQVZxpURkI0yM2+Bv0tPgPuJra2s3mTKxIkYSFoGoT52jADV0BzwlNWKx2G1mixcZN2cJsDI/P39d5MAHtbk/PYUZvSvgmcCwigO8AEdj63yoo4adA15mPSpPbQK9AmdIru1ANLlHV5i+oSj+B3haDlgVmId9gA3AZw+AzOFyEHQSVZirAiJu7CfP83U5Ff39mAwAX4Whn7l/Pdvt9gNRIE6n03ONRuMW5xh26fjFxS9XV9Dtdt/gFr4nDeOLvImZTOaSyIFZKCeG7wCShDhxGFPPfzf6FgyPuVzuBirsMVTbD8VisWUIQ6HdQjsdcM+lUulRNpu9PBqNNrCdVTHwcNeiFelvwQ6b20FiWUhEx/966EdG5lmXZ4tnVCX9HvyAIoGlP2i80IV6BMKfFsk6FGqitI3/nQy4DtEVHQ/2MMBVp136PPCPAFX4XQrC2ywAPvojovybuA47FlTnmBYAd3wa4HzqTk/BTD6+MmAiI64F5B0ZsmazeQclgl/6Vbtt4NqsP+y+qIOycZ88bdAXqwR9bzqMDgHaUn8S7BJYl1irWK/ZLbBes4vweFWrbvu2nh/6NobrCIK+acqY/WahUFhEx6gcskHO5/PXHGXbWAyEUQcp1GuhKPOm7xLCxkz18vLyPS7OhYfD4XokEjmZSqXOVyqVx+Vymd/MaYN3YOqFFCP1vwCEkb6gVLuOxrb3aOenVBbWMT/wRgC1Wq2AHvVp0BkzEFzWJ/V6/aFtD9pvGvSFXHdA5EGdtuhsFU/0Q2IYFIDoMJDjAONZijAA88KxszEaMVt/KwHoNnzHDIgf7b0AaU7YPn4DfAFwwYmCA972cGbgJwj4TU7f2qE8AAAAAElFTkSuQmCC);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.forget-group {
		padding: 2vw 3vw;
	}

	.forget-group p {
		text-align: right;
		/* line-height: .426667rem; */
		font-family: PingFangSC-Regular;
		font-size: 4vw;
	}

	.pink-color {
		color: #fb7299;
	}

	.btn-box {
		width: 100%;
		box-sizing: border-box;
		margin: 5vw auto 0;
		padding: 0 3vw;
		overflow: hidden;
	}

	.btn-box .btn-width {
		float: left;
		width: 39vw;
		margin-right: 2.7vw;
	}

	.btn-box .btn-primary {
		background: transparent;
	}

	.btn-primary {
		border: 1px solid #fb7299;
	}

	.btn-primary {
		background: transparent;
		color: #fb7299;
	}

	.btn-default,
	.btn-primary {
		height: 12vw;
		min-width: 44vw;
		text-align: center;
		line-height: 12vw;
		font-size: 4vw;
		cursor: pointer;
		border-radius: 1vw;
		display: inline-block;
		box-sizing: border-box;
		padding: 0 .266667rem;
	}

	.btn-default-disable {
		background: #ff9db5;
		color: #fff;
	}

	.explain {
		font-family: PingFangSC-Regular;
		font-size: 3vw;
		text-align: center;
		line-height: 10vw;
		margin: .64rem auto 0;
	}

	a {
		color: #fb7299;
	}

	.code {
		width: 100%;
		height: 14vw;
	}

	.codePut {
		display: flex;
		flex: 1;
	}

	.codeImg {
		width: 30%;
	}
</style>
