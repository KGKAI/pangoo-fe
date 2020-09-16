import React from "react";
import { Button, PageHeader, Tooltip } from "antd";
import {
  DownloadOutlined,
  CloudDownloadOutlined,
  EyeOutlined,
  SaveOutlined
} from "@ant-design/icons";
import "./index.scss";

const EditorHeader = () => {
  return (
    <PageHeader
      title="盘古"
      subTitle="可视化页面编辑器"
      extra={[
        <Button key="template-lib" type="primary">模板库</Button>,
        <Tooltip key="save" title="保存模板">
          <Button type="link" icon={<SaveOutlined />}></Button>
        </Tooltip>,
        <Tooltip key="preview" title="预览">
          <Button type="link" icon={<EyeOutlined />}></Button>
        </Tooltip>,
        <Tooltip key="download-source" title="下载源文件">
          <Button type="link" icon={<DownloadOutlined />} />
        </Tooltip>,
        <Tooltip key="download-json" title="下载json">
          <Button type="link" icon={<CloudDownloadOutlined />} />
        </Tooltip>,
      ]}
    />
  );
};

export default EditorHeader;
