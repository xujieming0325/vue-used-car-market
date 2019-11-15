<template>
	<div id="app" style="overflow-x: hidden;">
		<transition>
			<router-view />
		</transition>
		
		<div class="footer" v-if="$route.meta.showFooter" >
			<ul class="Hfooter">
				<li>
					<router-link to="/">
						<i class="el-icon-s-home icon"></i>
						<p class="ziti">首页</p>
					</router-link>
				</li>
				<li>
					<router-link to="/BuyCars">
						<i class="el-icon-s-shop icon"></i>
						<p class="ziti">买车</p>
					</router-link>
				</li>
				<li>
					<router-link to="/SellCar"><i class="el-icon-s-finance icon"></i>
						<p class="ziti">卖车</p>
					</router-link>
				</li>

				<li>
					<router-link to="/Information"><i class="el-icon-s-comment icon"></i>
						<p class="ziti">消息</p>
					</router-link>
				</li>

				<li>
					<router-link to="/UserCenter"><i class="el-icon-user-solid icon"></i>
						<p class="ziti">我的</p>
					</router-link>
				</li>

			</ul>
		</div>

	</div>
</template>

<style>
	article,
	aside,
	blockquote,
	body,
	button,
	code,
	dd,
	details,
	div,
	dl,
	dt,
	fieldset,
	figcaption,
	figure,
	footer,
	form,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	header,
	hgroup,
	hr,
	input,
	legend,
	li,
	menu,
	nav,
	ol,
	p,
	pre,
	section,
	td,
	textarea,
	th,
	ul,
	a {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
		border: 0;
		outline: 0;
		vertical-align: baseline;
		color: #252825;

	}

	.hs {
		color: #b4b9bd;
	}

	input::-webkit-input-placeholder {
		color: #b4b9bd;
	}

	img {
		width: 100%
	}

	.footer {
		height: 50px;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: whitesmoke;
		z-index: 99;
	}

	.Hfooter {

		display: flex;
		width: 100%;
		justify-content: space-evenly;
	}

	.Hfooter>li {
		box-sizing: border-box;
		padding: 5px 0;
		text-align: center;
		width: 30%;
	}

	.Hfooter .ziti {
		font-size: 12px;
		color: #5f6670;
	}

	.Hfooter .icon {
		font-size: 25px;
		color: #5f6670;
	}

	.router-link-exact-active .icon,
	.router-link-exact-active .ziti {
		color: #1cad35;
	}
	/* 动画 */
	.v-enter{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 0.5s ease;
	}
</style>
