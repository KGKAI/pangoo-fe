import React, { useRef } from "react";
import { Button, PageHeader, Tooltip, Modal, Input } from "antd";
import {
	DownloadOutlined,
	CloudDownloadOutlined,
	EyeOutlined,
	SaveOutlined,
} from "@ant-design/icons";
import { useStore } from "../../../../store";
import { downloadFile, saveTemplate } from "../../services/editorService";
import io from "socket.io-client";
import "./index.scss";

const EditorHeader = () => {
	const nameRef = useRef(null);
	const descRef = useRef(null);
	const store: any = useStore();
	const modalContent = (
		<div>
			<div>
				<span>模板名称：</span>
				<Input placeholder="请输入名称" ref={nameRef} />
			</div>
			<div>
				<span>模板描述：</span>
				<Input placeholder="请输入模板描述" ref={descRef} />
			</div>
		</div>
	);
	const handleSaveTemplate = () => {
		Modal.confirm({
			title: "确定要保存吗?",
			content: modalContent,
			okText: "保存",
			cancelText: "取消",
			onOk() {
				console.log(nameRef.current);
				const name = (nameRef.current as any).state.value;
				const desc = (descRef.current as any).state.value;
				saveTemplate(name, desc, JSON.stringify(store.pointData));
			},
			onCancel() {},
		});
	};

	const handleDownloadFile = () => {
		const socket = io('http://10.106.158.41:3000')
		// socket.emit('chat message', 'hello, i am pangoo')
		socket.on('connect', (data: any) => {
			// 必须在回调函数中才能取到id
			console.log(socket.id)
			downloadFile(socket.id, store.pointData);
		})
		socket.on('chat message', (msg: any) => {
			console.log(msg)
		})
	};

	return (
		<PageHeader
			title="盘古"
			subTitle="可视化页面编辑器"
			extra={[
				<Button key="template-lib" type="primary">
					模板库
				</Button>,
				<Tooltip key="save" title="保存模板">
					<Button
						type="link"
						icon={<SaveOutlined />}
						onClick={handleSaveTemplate}
					></Button>
				</Tooltip>,
				<Tooltip key="preview" title="预览">
					<Button type="link" icon={<EyeOutlined />}></Button>
				</Tooltip>,
				<Tooltip key="download-source" title="下载源文件">
					<Button
						type="link"
						icon={<DownloadOutlined />}
						onClick={handleDownloadFile}
					/>
				</Tooltip>,
				<Tooltip key="download-json" title="下载json">
					<Button type="link" icon={<CloudDownloadOutlined />} />
				</Tooltip>,
			]}
		/>
	);
};

export default EditorHeader;
