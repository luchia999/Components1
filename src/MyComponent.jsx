import { useState } from "react";
import styles from "./app.module.css";

export const MyComponent = () => {
	const [value, setValue] = useState("");
	const [list, setList] = useState([]);
	const [error, setError] = useState("");

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p>
				Текущее значение: "<output>{value}</output>"
			</p>
			{error && <div className={styles.error}>{error}</div>}
			<div>
				<button onClick={onInputButtonClick}>Ввести новое</button>
				<button onClick={onAddButtonClick} disabled={!isValueValid()}>
					Добавить в список
				</button>
			</div>
			<div>
				<h2>Список</h2>

				{list.length === 0 ? (
					<p>Нет добавленных элементов</p>
				) : (
					<ul>
						{list.map((item) => (
							<li key={item.id}>{item.value}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);

	function onInputButtonClick() {
		const promptValue = prompt("Введите значение:");
		if (promptValue.length < 3) {
			setError("Значение должно содержать минимум 3 символа.");
		} else {
			setValue(promptValue);
			setError("");
		}
	}

	function onAddButtonClick() {
		const updatedList = { id: Date.now(), value: value };
		setList([...list, updatedList]);
		setValue("");
	}
	function isValueValid() {
		return value.length >= 3;
	}
};
