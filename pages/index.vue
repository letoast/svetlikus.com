<script setup lang="ts">

</script>
<template>
	<div>
		<section class="py-52">
			<div class="container">
				<div class="flex flex-col items-center">
					<div class="relative">
						<CommonHeaderStar class="absolute -right-12 -top-12 h-24 animate-[spin_5s_linear_infinite] blur-sm" />
						<CommonHeaderStar class="absolute -right-12 -top-12 h-24 animate-[spin_5s_linear_infinite]" />
						<h1 class="relative text-6xl font-bold uppercase">
							Propel your brand foRward
						</h1>
					</div>
					<p class="lead pt-10 text-center text-gray-300">
						On-demand design services for a monthly fee delivered by industry professionals.
						<br>
						Solving design for Founders and CEOs.
					</p>
					<div class="mt-14 flex gap-4">
						<Button
							variant="outline"
							class="px-16"
						>
							See Plans
						</Button>
						<Button class="px-16">
							Let’s Talk!
						</Button>
					</div>
				</div>
			</div>
		</section>
		<LayoutCarousel />
	</div>
</template>
