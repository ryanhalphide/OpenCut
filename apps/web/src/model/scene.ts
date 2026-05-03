import type { Bookmark } from "./bookmark";
import type { SceneTracks } from "./track";

export interface TScene {
	id: string;
	name: string;
	isMain: boolean;
	tracks: SceneTracks;
	bookmarks: Bookmark[];
	createdAt: Date;
	updatedAt: Date;
}
