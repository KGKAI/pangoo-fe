import { BasicTemplateKeyType } from "./BaseTemplate";
import { BussTemplateKeyType } from "./BussTemplate";
import { Property } from "csstype";
import { ButtonType } from "antd/lib/button";
export type BasicTemplateItem<T> = {
	type: T;
	h: number;
};

export type AllTemplateType = BasicTemplateKeyType | BussTemplateKeyType;

export type SchemaBasicImpl = {
	editableData: Array<any>;
	config: Object;
};

export type SchemaImpl = {
	[key in AllTemplateType]: SchemaBasicImpl;
};
// =========================Text===============================
export type TextConfigType = {
	width: number;
	text: string;
	color: string;
	fontSize: number;
	align: Property.TextAlign;
	lineHeight: number;
};

export interface TextSchema extends SchemaBasicImpl {
	editableData: Array<any>;
	config: TextConfigType;
}

// =========================Button==============================
export type ButtonConfigType = {
	type: ButtonType;
	text: string;
	width: number;
	height: number;
	color: string;
	backgroundColor: string;
	borderRadius: number;
	link: string;
};

export interface ButtonSchema extends SchemaBasicImpl {
	editableData: Array<any>;
	config: ButtonConfigType;
}
// =========================Schema==============================
export interface SchemaType extends SchemaImpl {
	Text: TextSchema;
	Button: ButtonSchema;
}

export enum ItemType {
	TEXT,
	COLOR,
	SELECT,
	NUMBER,
	UPLOAD,
	DATALIST,
	VIDEO,
	ICON,
}

const schema = {
	Text: {
		editableData: [
			{ key: "width", name: "宽度", type: ItemType.TEXT },
			{ key: "text", name: "文字", type: ItemType.TEXT },
			{ key: "color", name: "文字颜色", type: ItemType.COLOR },
			{ key: "fontSize", name: "文字大小", type: ItemType.NUMBER },
			{
				key: "align",
				name: "对齐方式",
				type: "Select",
				range: [
					{ key: "left", name: "左对齐" },
					{ key: "center", name: "居中对齐" },
					{ key: "right", name: "右对齐" },
				],
			},
			{ key: "lineHeight", name: "行高", type: ItemType.NUMBER },
		],
		config: {
			width: 100,
			text: "我是文本",
			color: "#dda123",
			fontSize: 16,
			align: "center",
			lineHeight: 1,
		},
	},
	Button: {
		editableData: [
			{ key: "type", name: "按钮类型", type: ItemType.TEXT },
			{ key: "text", name: "按钮文字", type: ItemType.TEXT },
			{ key: "width", name: "宽度", type: ItemType.NUMBER },
			{ key: "height", name: "高度", type: ItemType.NUMBER },
			{ key: "color", name: "文字颜色", type: ItemType.COLOR },
			{ key: "backgroundColor", name: "背景颜色", type: ItemType.COLOR },
			{ key: "borderRadius", name: "圆角", type: ItemType.NUMBER },
			{ key: "link", name: "链接", type: ItemType.TEXT },
		],
		config: {
			type: "primary",
			text: "我是按钮",
			width: 200,
			height: 20,
			color: "#aaaaaa",
			backgroundColor: "#aaaaaa",
			borderRadius: 0,
			link: "",
		},
	},
};

export default schema;
