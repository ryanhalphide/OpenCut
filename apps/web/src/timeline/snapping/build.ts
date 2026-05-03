import type { TimelineSnapPoint, TimelineSnapPointSource } from "./types";

export function buildTimelineSnapPoints({
	sources,
}: {
	sources: TimelineSnapPointSource[];
}): TimelineSnapPoint[] {
	const snapPoints: TimelineSnapPoint[] = [];

	for (const source of sources) {
		for (const snapPoint of source()) {
			snapPoints.push(snapPoint);
		}
	}

	return snapPoints;
}
