import React, { memo, useMemo } from "react";
import DropTargetBox from "../../DropTargetBox";
import baseTemplates from "../../../../components/Pangoo-core/BaseTemplate";
import bussTemplates from "../../../../components/Pangoo-core/BussTemplate";
import "./index.scss";

export default memo(() => {
    let allTypes = useMemo(() => {
        let types: any = []
        baseTemplates.map((tpl) => {
            types.push(tpl.type)
        })
        bussTemplates.map((tpl) => {
            types.push(tpl.type)
        })
        return types;
    }, [])
	return (
		<div>
			<DropTargetBox allTypes={allTypes}/>
		</div>
	);
});
