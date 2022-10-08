<script lang="ts">
	import axios from 'axios';
	import { page } from '$app/stores';

	let isVisibleC = false;
	let url: string = 'https://restcountries.com/v3.1/name';
	let countryName: string = 'Write a Country Name';
</script>

<div class="all-holder flex justify-center flex-col items-center h-full pb-32">
	<div class="inp-text-hold flex mt-[15vh] justify-center items-center flex-col">
		<h1 class="text-textColor mb-[2vh] text-xl font-semibold">Enter a Country Name</h1>
		<h4 class="text-textColor mb-[2vh] text-xl font-semibold">{countryName}</h4>
		<h4 class="text-textColor mb-[2vh] text-xl font-semibold">{$page.status}</h4>
		<input
			bind:value={countryName}
			type="text"
			class="h-[5vh] text-textColor border-[#ff936a] focus:border-[#ff936a] focus:border-2 focus:outline-none border-2 fill-textColor w-[10vw] p-[1vw] bg-darkBg rounded-md border-1 border-neutral-400 text-black dark:bg-neutral-900 dark:border-neutral-500 dark:text-white"
		/>
	</div>
	<div class="flex flex-row gap-8 button-holder mt-[5vh]">
		<a
			href={countryName}
			class="btn transition-all duration-500 px-2 py-2 text-textColor bg-[#ff936a] hover:bg-[#ff936a] rounded-md"
		>
			Find Country
		</a>
	</div>
</div>
