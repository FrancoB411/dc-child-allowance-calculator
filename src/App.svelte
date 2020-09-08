
<script>
	import { onMount } from 'svelte';
	import { calculate as calc }  from './DCChildAllowanceCalculator.js';

	const MEDIAN_DC_HOUSEHOLD_INCOME = 85203;	
	const childrenFormatter = new Intl.NumberFormat('en-US', { notation: 'standard'})
	const moneyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
;	
	let income;
	let selected;
	let result;
	let asMoney;

	let children = 0;
	let timeFrame = 'yearly';
	let statuses = [
		{ id: 'individual', text: 'as an individual'},
		{ id: 'head', text: 'as head of household'},
		{ id: 'joint', text: 'jointly'}
	];
	function update() {
		result = calc({status: selected.id, income, children, timeFrame})
		asMoney = moneyFormatter.format(Math.abs(result));
		children = childrenFormatter.format(children);
	}
	onMount(() => {
		income = MEDIAN_DC_HOUSEHOLD_INCOME; 
		update()
	});
</script>

<style>

</style>

<h1>
	If you file taxes <br>
	<select name='filingStatus' bind:value={selected} on:change={update} on:blur={update}>
		{#each statuses as status}
			<option value={status}>
				{status.text}
			</option>
		{/each}
	</select>
	with <input type=number bind:value={children} on:input={update} min=0 max=10> 	<br> 
	dependents,
	and a household income of <br> {moneyFormatter.format(income)},
</h1>
<label>
	<input type=range  bind:value={income}  min=0 max=1000000 on:input={update}>
</label>
<h1>
	You would
	{#if result > 0}
		receive {asMoney} to assist with childcare.
	{:else}
		pay {asMoney} <br> 
		per year to cut child poverty in DC in half, <br>
		lifting nearly {childrenFormatter.format(17000)} American children out of poverty. 
	{/if}
</h1>
