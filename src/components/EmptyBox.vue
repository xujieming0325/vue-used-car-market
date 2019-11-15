<template>
	<div class="empty-box">

		<div class="empty" v-if="emptyTypes">
			<div>
				<img src="../assets/empty.png" alt="">
			</div>
		</div>
		<div class="empty" v-else>
			<div style="margin-bottom: 25px;">
				<img src="../assets/empty.png" alt="">
			</div>
			<div>
				<mt-button type="primary" class="btn kk-btn">现在去逛逛</mt-button>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: "EmptyBox",
		components: {

		},
		data() {
			return {
				emptyTypes:null
			}
		},
		methods: {

		},
		mounted() {
			this.emptyTypes=this.$route.meta.emptyTypes;
		}
	}
</script>

<style>
	.empty-box .empty {
		width: 100%;
		height: 500px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.empty-box .empty img {
		width: 20%;
		height: 100%;

	}

	.empty div {
		display: flex;
		justify-content: center;
	}

	.kk-btn {
		width: 8.125rem;
		height: 2.1875rem;

	}
</style>
