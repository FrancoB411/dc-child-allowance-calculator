
<script>
	import { calculate as calc }  from './DCChildAllowanceCalculator.js';
	
	
	const childrenFormatter = new Intl.NumberFormat('en-US', { notation: 'standard'})
	const moneyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
	
	let perCheck = moneyFormatter.format(0);
	let income = 350000;
	let children = '0';
	let status = 'head';
	let timeFrame = 'biweekly';
	
	function update({target: { value }} = params) {
		//console.log(value)
		let result = calc({status, income: value, children, timeFrame})
		perCheck = moneyFormatter.format(result);
		children = childrenFormatter.format(children);
	}
</script>

<style>

</style>

<h1>
	If you file taxes <br>
	<select name="filingStatus" id="cars">
  	<option value="individual">as an individual</option>
  	<option value="head">as head of household</option>
  	<option value="jointly">jointly</option>
 </select>
	with <input type=number value=0> 	<br> 
	dependents,
	and a household income of <br> {moneyFormatter.format(income)},
</h1>
<label>
	<input type=range  bind:value={income}  min=0 max=1000000 on:input={update}>
</label>
<h1>
	you would pay {perCheck} <br> 
	per paycheck to cut child poverty in DC in half, <br>
	lifting nearly {childrenFormatter.format(17000)} American children out of poverty. 
</h1>
