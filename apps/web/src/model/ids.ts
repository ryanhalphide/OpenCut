export type ElementId = string & { readonly __brand: "ElementId" };
export type TrackId = string & { readonly __brand: "TrackId" };
export type SceneId = string & { readonly __brand: "SceneId" };

export function elementId(value: string): ElementId {
	return value as ElementId;
}

export function trackId(value: string): TrackId {
	return value as TrackId;
}

export function sceneId(value: string): SceneId {
	return value as SceneId;
}
