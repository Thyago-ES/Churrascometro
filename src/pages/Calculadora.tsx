import { CalculadoraChurrasco } from "../components/CalculadoraChurrasco";

import bgImage from "../assets/bg-1.jpg";

export function Calculadora() {
	return (
		<div
			className="page-container"
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<h1>Calculadora de Churrasco</h1>
			<CalculadoraChurrasco />
		</div>
	);
}
