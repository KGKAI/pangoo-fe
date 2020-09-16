import React from "react";
import { observer } from "mobx-react";
import Empty from "./Empty";
import FormEditor from "./FormEditor";
import { useStore } from "../../../../store";
import { Store } from "antd/lib/form/interface";

const FormEditorIndex = observer(() => {
	const store: any = useStore();
	const curPoint = store.curPoint;

	const onSave = (id: string, values: Store) => {
		store.modifyPointData(id, values);
	};

	const onDel = (id: string) => {
		store.deletePointData(id);
	};

	return (
		<div>
			{!store.pointData.length || !store.curPoint ? (
				<Empty />
			) : (
				<FormEditor
					id={curPoint.id}
					defaultValue={curPoint.item.config}
					editableFields={curPoint.item.editableData}
					onSave={onSave}
					onDel={onDel}
				/>
			)}
		</div>
	);
});

export default FormEditorIndex;
