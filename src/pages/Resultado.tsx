import { ResultadoChurrasco } from "../components/ResultadoChurrasco";

import bgImg from "../assets/bg-2.jpg";

export function Resultado() {
	return (
		<div
			className="page-container"
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<h1>Resultado do churrasco</h1>
			<ResultadoChurrasco />
		</div>
	);
}
