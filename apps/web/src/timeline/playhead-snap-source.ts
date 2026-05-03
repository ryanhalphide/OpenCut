import type { TimelineSnapPoint } from "@/timeline/snapping";

export function getPlayheadSnapPoints({
	playheadTime,
}: {
	playheadTime: number;
}): TimelineSnapPoint[] {
	return [{ time: playheadTime, type: "playhead" }];
}
