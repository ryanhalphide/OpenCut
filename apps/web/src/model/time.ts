export type MediaTime = number & { readonly __brand: "MediaTime" };

export function mediaTime(value: number): MediaTime {
	return value as MediaTime;
}
