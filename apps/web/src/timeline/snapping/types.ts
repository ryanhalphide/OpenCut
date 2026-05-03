export type TimelineSnapPointType =
	| "element-start"
	| "element-end"
	| "playhead"
	| "bookmark"
	| "keyframe";

export interface TimelineSnapPoint {
	time: number;
	type: TimelineSnapPointType;
	elementId?: string;
	trackId?: string;
}

export interface TimelineSnapResult {
	snappedTime: number;
	snapPoint: TimelineSnapPoint | null;
	snapDistance: number;
}

export type TimelineSnapPointSource = () => Iterable<TimelineSnapPoint>;
