const op=process.argv[2]
const num1=Number(process.argv[3])
const num2=Number(process.argv[4])
switch (op) {
	case 'add':
		const result=num1+num2
	console.log(`Resposta: ${result}`);
		break;
	case 'sub':
	const	resultSub=num1-num2
	console.log(`Resposta: ${resultSub}`);
		break;
	case 'mult':
	const	resultMult=num1*num2
	console.log(`Resposta: ${resultMult}`);
		break;
	case 'div':
		const resultDiv=num1/num2
	console.log(`Resposta: ${resultDiv}`);
		break
	default:
		break;
}