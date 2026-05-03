import type { ParamValues } from "@/params";
import type { BaseTimelineElement } from "./base";

export interface EffectElement extends BaseTimelineElement {
	type: "effect";
	effectType: string;
	params: ParamValues;
}
