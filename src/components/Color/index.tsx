import React, { useState } from "react";
import { SketchPicker, ColorResult } from "react-color";

export default (props: any) => {
	const [color, setColor] = useState<string>(props.value);
	const [showPicker, setShowPicker] = useState<boolean>(false);

	const handleChange = (color: ColorResult) => {
		// console.log(color);
		// Form.item的子元素默认添加onchange事件
		const { onChange } = props;
		setColor(color.hex);
		onChange(color.hex);
	};

	return (
		<>
			<div
				style={{
					padding: "5px",
					background: "#fff",
					borderRadius: "1px",
					boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
					display: "inline-block",
					cursor: "pointer",
				}}
				onClick={() => setShowPicker(!showPicker)}
			>
				<div
					style={{
						width: "36px",
						height: "14px",
						borderRadius: "2px",
						backgroundColor: color,
					}}
				/>
			</div>
			{showPicker && (
				<SketchPicker color={color} onChange={handleChange} />
			)}
		</>
	);
};
