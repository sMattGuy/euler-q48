let result = BigInt(0);
let current = BigInt(1);

for(let i=1;i<=1000;i++){
	result = result + (current ** current);
	current++;
}
console.log(result.toString().slice(-10));