<template>
	<div>
		<Head></Head>
		<EmptyBox></EmptyBox>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Head from "@/components/Head.vue"
	import EmptyBox from "@/components/EmptyBox.vue"
	export default {
		name: 'Information',
		components: {
			Head,
			EmptyBox
		},
		data() {
			return {
			}
		},
		methods: {

		}

	}
</script>

<style>

</style>
