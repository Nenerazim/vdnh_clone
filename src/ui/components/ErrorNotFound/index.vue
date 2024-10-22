<script lang="ts" setup>
import {Button} from '@ui/widgets';
</script>

<template>
	<div class="not-found">
		<div class="wrapper">
			<div class="content">
				<div class="code">404</div>

				<div class="title">Вы перешли на страницу, которой нет</div>

				<div class="description">Возможно, ссылка устарела, или на сайте возникли временные неполадки</div>

				<Button color="error" type="link" label="На главную" href="/" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import './style';
</style>
