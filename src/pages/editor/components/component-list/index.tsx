import React from "react";
import { Tabs } from "antd";
import DragBox from "../../DragSourceBox";
import ParseEngine from "../../../../components/Pangoo-core/ParseEngine";
import baseTemplates from "../../../../components/Pangoo-core/BaseTemplate";
import defaultConfig from "../../../../components/Pangoo-core/schema";

const { TabPane } = Tabs;
const ComponentContainer = () => {
	return (
		<div className="component-list">
			<Tabs defaultActiveKey="1">
				<TabPane tab="基础组件" key="1">
					{baseTemplates.map((tpl, i) => {
						return (
							<DragBox item={tpl} key={`base_${i}`}>
								<ParseEngine
									type={tpl.type}
									isTpl={true}
									config={defaultConfig[tpl.type].config}
								/>
							</DragBox>
						);
					})}
				</TabPane>
                <TabPane tab="业务组件" key="2">
                    标签页2
                </TabPane>
			</Tabs>
		</div>
	);
};

export default ComponentContainer;
