<script lang="ts">
	import { page } from '$app/stores';
	import axios from 'axios';
	let url: any = 'https://restcountries.com/v3.1/name';
	import { onMount } from 'svelte';
	let countryInfo: any = {};

	onMount(async () => {
		let response: any = await axios.get(`${url}/${$page.params.countryName}`);

		// const currencies: any = Object.keys(r)[0];

		countryInfo = {
			flag: response.data[0].flags.png,
			coatOfArms: response.data[0].coatOfArms.png,
			capital: response.data[0].capital,
			region: response.data[0].region,
			subregion: response.data[0].subregion,
			postalCode: response.data[0].postalCode.format,
			population: response.data[0].population,
			prefix: response.data[0].idd.root,
			Shorthand: response.data[0].cca2,
			isIndependent: response.data[0].independent
			// currencyName: currencies.name,
			// // currSymbol: currencies.symbol,
			// mainLanguage: response.data[0].languages.tur,
			// nativeName: response.data[0].name.nativeName.tur.official
		};
		console.log(response.data.currencies);
	});
</script>

<div
	class="country-info-holder-holder flex justify-center text-center align-middle items-center mt-[5vw] "
>
	<div
		class="country-info-holder font-bold text-2xl bg-[#2d2d2d] h-[75vh] w-[45vw] shadow-lg  rounded-md px-5 py-5"
	>
		<h1 class="font-bold text-2xl">{$page.params.countryName}</h1>
		<div class="flex justify-center flex-row mt-[2vw]">
			<img
				src={countryInfo.flag}
				class="w-[13vw] h-[13vh]"
				alt={$page.params.countryName + 'flag'}
			/>
			<img
				src={countryInfo.coatOfArms}
				class="w-[7vw] mt-[3vh] ml-[5vh] h-[8vh]"
				alt={$page.params.countryName + 'coat of arms'}
			/>
		</div>
		<div class="information flex justify-center  flex-col mt-[3vw] text-lg font-normal">
			<p>Country Name: <b> {$page.params.countryName} & <b> {countryInfo.Shorthand} </b> </b></p>
			<p>Country Capital: <b> {countryInfo.capital} </b></p>
			<p>
				Country Region & Subregion: <b> {countryInfo.region} </b> & <b> {countryInfo.subregion} </b>
			</p>
			<!-- <p>Currency: <b> {countryInfo.currencyName} </b></p>
			<p>Currency Symbol: <b> {countryInfo.currSymbol} </b></p> -->
			<!-- <p>Main Language: <b> {countryInfo.mainLanguage} </b></p> -->
			<p>Postal Code Format: <b> {countryInfo.postalCode} </b></p>
			<p>Population: <b> {countryInfo.population} </b></p>
			<p>Phone Number Prefix: <b> {countryInfo.prefix} </b></p>
			<p>is independent?: {countryInfo.isIndependent}</p>
		</div>
	</div>
</div>
