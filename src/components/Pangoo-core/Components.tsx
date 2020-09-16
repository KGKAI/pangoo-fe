import React, { FC, CSSProperties } from "react";
import { TextConfigType, ButtonConfigType } from "./schema";
import { Button as _Button } from "antd";

const Text: FC<TextConfigType> = (props) => {
	const style: CSSProperties = {
		width: props.width + "px",
		fontSize: props.fontSize + "px",
		lineHeight: props.lineHeight,
		color: props.color,
		textAlign: props.align,
	};
	return <div style={style}>{props.text}</div>;
};

const Button: FC<ButtonConfigType> = (props) => {
	// console.log(props)
	return <_Button type={props.type}>{props.text}</_Button>;
};

let Components: { [key: string]: FC<any> } = { Text, Button };
export default Components;
