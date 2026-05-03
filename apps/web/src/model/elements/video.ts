import type { Effect } from "@/effects/types";
import type { Mask } from "@/masks/types";
import type { BlendMode, Transform } from "@/rendering";
import type { BaseTimelineElement, RetimeConfig } from "./base";

export interface VideoElement extends BaseTimelineElement {
	type: "video";
	mediaId: string;
	volume?: number;
	muted?: boolean;
	isSourceAudioEnabled?: boolean;
	hidden?: boolean;
	retime?: RetimeConfig;
	transform: Transform;
	opacity: number;
	blendMode?: BlendMode;
	effects?: Effect[];
	masks?: Mask[];
}
