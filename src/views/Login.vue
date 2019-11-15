<template>
	<div>
		<Head></Head>
		<div class="mains">
			<div class="mains-login">
				<h3>欢迎您的加入</h3>
				<div class="mains-login-boder">
					<input type="text" maxlength="11" placeholder="手机号" name="" id="">
				</div>
				<div class="mains-login-yzm mains-login-boder">
					<input type="text" maxlength="6" placeholder="验证码" name="" id="">
					<span>获取验证码</span>
				</div>
			</div>
			<div class="mains-login">
				<mt-button>登录</mt-button>
				<span class="xy">登录即为同意<a href="">《用户使用协议》</a>及<a href="">《隐私权条款》</a></span>
			</div>
		</div>
	</div>
</template>

<script>
	import Head from "../components/Head.vue"
	export default {
		name: "Login",
		components: {
			Head
		},
		data() {
			return {
				LoggingStatus: false
			}
		}
	}
</script>

<style>
	.mains-login {
		width: 100%;
		display: flex;
		flex-direction: column;
		color: #252825;
		margin-top: 1.25rem;
	}

	.mains-login h3 {
		text-align: center;
		line-height: 3.125rem;
		color: #ff5722;
	}

	.mains-login-boder {
		border-bottom: 1px solid #dde4ea;
		margin-bottom: 1rem;
	}

	.mains-login input {
		width: 100%;
		padding: 0.75rem 0;
		font-size: 1rem;
		color: #495056;
	}

	.mains-login input::placeholder {
		color: #495056;
	}

	.mains-login-yzm {
		display: flex;
		justify-content: space-between;
	}

	.mains-login-yzm span {
		color: #02c386;
		width: 100%;
		line-height: 43px;
		margin-left: 168px;
	}

	.mains-login button {
		width: 100%;
		background-color: #02c386;
		color: #fff;
	}


	.mains-login .xy {
		font-size: 0.75rem;
		color: #8f96a0;
		line-height: 2.60rem;
		text-align: center;
	}

	.mains-login .xy a {
		color: #22ac38;
	}
</style>
