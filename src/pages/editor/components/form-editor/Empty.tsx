import React from "react";
import { Result } from "antd";

export default () => {
	return (
		<Result
			status={404}
			title="还没有可编辑的数据哦"
			subTitle="赶快拖拽数据来生成你的H5页面吧~"
		></Result>
	);
};
