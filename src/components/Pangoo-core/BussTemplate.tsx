import { BasicTemplateItem } from "./schema";
export type BussTemplateKeyType = 'product';

export type BussTemplateType = Array<BasicTemplateItem<BussTemplateKeyType>>
let bussTemplates: BussTemplateType = [
    {type: 'product', h: 20}
]

export default bussTemplates;
