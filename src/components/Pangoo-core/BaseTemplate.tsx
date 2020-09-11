import { BasicTemplateItem } from "./schema";
// 定义基础组件类型
export type BasicTemplateKeyType =
  | "Text"
  | "Button"
//   | "LongText"
//   | "Carousel"
//   | "List"
//   | "Tab"
//   | "Image"
//   | "Icon"
//   | "Upload"
//   | "Modal"
//   | "Select"
//   | "Input"
//   | "Slider"
//   | "Switch"
//   | "Checkbox"
//   | "Radio"
//   | "TimePicker";

export type BaseTemplatesType = Array<BasicTemplateItem<BasicTemplateKeyType>>;

const baseTemplates: BaseTemplatesType = [
  { type: "Text", h: 20 },
  { type: "Button", h: 20 },
//   { type: "LongText", h: 36 },
//   { type: "Carousel", h: 20 },
//   { type: "List", h: 20 },
//   { type: "Tab", h: 20 },
//   { type: "Image", h: 20 },
//   { type: "Icon", h: 20 },
//   { type: "Upload", h: 20 },
//   { type: "Modal", h: 20 },
//   { type: "Select", h: 20 },
//   { type: "Input", h: 20 },
//   { type: "Slider", h: 20 },
//   { type: "Switch", h: 20 },
//   { type: "Checkbox", h: 20 },
//   { type: "Radio", h: 20 },
];

export default baseTemplates;
