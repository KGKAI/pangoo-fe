import React, { useEffect } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { ItemType } from "../../../../components/Pangoo-core/schema";
import Color from "../../../../components/Color";
import { Store } from "antd/lib/form/interface";

interface FormEditorProps {
	id: string;
	onSave: (id: string, values: Store) => void;
	onDel: (id: string) => void;
	defaultValue: { [key: string]: any };
	editableFields: Array<any>;
}

const FormEditor = (props: FormEditorProps) => {
	const { editableFields, defaultValue, id, onSave, onDel } = props;
	// console.log(JSON.stringify(defaultValue));
	const [form] = Form.useForm();
	const genFormItem = (item: any) => {
		switch (item.type) {
			case ItemType.TEXT:
				return (
					<Form.Item key={item.key} label={item.name} name={item.key}>
						<Input />
					</Form.Item>
				);
			case ItemType.NUMBER:
				return (
					<Form.Item key={item.key} label={item.name} name={item.key}>
						<InputNumber min={1} />
					</Form.Item>
				);
			case ItemType.COLOR:
				return (
					<Form.Item key={item.key} label={item.name} name={item.key}>
						<Color />
					</Form.Item>
				);
		}
	};

	useEffect(() => {
		return () => {
			// 处理form表单 initValues只初始化一次的问题
			form.resetFields();
		};
	}, [defaultValue]);

	const formItemLayout = {
		labelCol: { span: 10 },
		// wrapperCol: { span: 10 },
	};

	const onFinish = (values: Store) => {
		onSave && onSave(id, values);
	};

	const handleDel = () => {
		onDel && onDel(id);
	};

	return (
		<>
			<div>属性设置</div>
			<Form
				form={form}
				name="form-editor"
				{...formItemLayout}
				initialValues={defaultValue}
				onFinish={onFinish}
			>
				{editableFields.map((item) => {
					return genFormItem(item);
				})}
				<Form.Item>
					<Button type="primary" htmlType="submit">
						保存
					</Button>
					<Button
						danger
						type="primary"
						style={{ marginLeft: "20px" }}
						onClick={handleDel}
					>
						删除
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default FormEditor;
