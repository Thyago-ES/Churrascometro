import { useNavigate } from "react-router-dom";

import { nomesAlimentos } from "../types";

import { Formik, Field, Form } from "formik";

import * as Yup from "yup";

import styles from "./CalculadoraChurrasco.module.css";

const esquemaValidacao = Yup.object().shape({
	pessoas: Yup.number().min(1, "Número de pessoas é obrigatório!"),
	selecaoAlimentos: Yup.array()
		.of(Yup.string())
		.test(
			"check-selecaoAlimentos",
			"Selecione pelo menos 1 alimento",
			(array) => array !== null && array!.length > 0
		),
});

export function CalculadoraChurrasco() {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<Formik
				initialValues={{ pessoas: 0, selecaoAlimentos: [] }}
				validationSchema={esquemaValidacao}
				onSubmit={(values) => {
					navigate("/resultado", {
						state: {
							pessoas: values.pessoas,
							alimentosSelecionados: values.selecaoAlimentos,
						},
					});
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div className={styles.inputGroup}>
							<label htmlFor="pessoas" className={styles.inputLabel}>
								Número de pessoas
							</label>
							<Field
								name="pessoas"
								type="number"
								className={styles.inputField}
							/>
							{errors.pessoas && touched.pessoas ? (
								<p className={styles.error}>{errors.pessoas}</p>
							) : null}
						</div>
						<h2>Selecione os alimentos para o churrasco:</h2>
						{Object.keys(nomesAlimentos).map((alimento) => (
							<div>
								<Field
									name="selecaoAlimentos"
									type="checkbox"
									value={alimento}
									className={styles.checkboxInput}
								/>
								<label htmlFor="selecaoAlimentos">
									{nomesAlimentos[alimento]}
								</label>
							</div>
						))}
						<button type="submit" className={styles.calculateButton}>
							Calcular
						</button>
						{errors.selecaoAlimentos ? (
							<p className={styles.error}>{errors.selecaoAlimentos}</p>
						) : null}
					</Form>
				)}
			</Formik>
		</div>
	);
}
