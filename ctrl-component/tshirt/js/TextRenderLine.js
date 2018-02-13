const TextRenderLine = ({value, onChange}) => {
	return (
		<div className="type-text">
			<textarea
				name="text"
				id="font-text"
				cols="30"
				rows="2"
				placeholder="Введите текст для футболки"
				value={value}
				onChange={(e) => {
					onChange(e.currentTarget.value);
				}}
			>
			</textarea>
		</div>
	);
};
