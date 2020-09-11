import React, { memo, useMemo, FC, Suspense, ComponentType } from "react";
import { AllTemplateType } from "./schema";
import Components from "./Components";

type ParseEngineType = {
	isTpl: boolean;
	config: { [key: string]: any };
	type: AllTemplateType;
};

const genComponent = (type: AllTemplateType) => {
    let Component: FC<{isTpl: boolean}>
	Component = Components[type]
	return (props: ParseEngineType) => {
		const { config, isTpl } = props;
		return <Component isTpl={isTpl} {...config} />;
	};
};

const ParseEngine = memo((props: ParseEngineType) => {
	const { type, config, isTpl } = props;
	const Component = useMemo(() => {
		return genComponent(type);
	}, [type, config]);
	return (
		<Suspense fallback={""}>
			<Component type={type} config={config} isTpl={isTpl} />
		</Suspense>
	);
});

export default ParseEngine;
