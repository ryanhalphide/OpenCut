import type { Effect } from "@/effects/types";
import type { Mask } from "@/masks/types";
import type { ParamValues } from "@/params";
import type { BlendMode, Transform } from "@/rendering";
import type { BaseTimelineElement } from "./base";

export interface GraphicElement extends BaseTimelineElement {
	type: "graphic";
	definitionId: string;
	params: ParamValues;
	hidden?: boolean;
	transform: Transform;
	opacity: number;
	blendMode?: BlendMode;
	effects?: Effect[];
	masks?: Mask[];
}
