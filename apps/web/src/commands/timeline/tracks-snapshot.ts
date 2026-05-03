import { Command, type CommandResult } from "@/commands/base-command";
import type { SceneTracks } from "@/model";
import { EditorCore } from "@/core";

export class TracksSnapshotCommand extends Command {
	constructor(
		private before: SceneTracks,
		private after: SceneTracks,
	) {
		super();
	}

	execute(): CommandResult | undefined {
		EditorCore.getInstance().timeline.updateTracks(this.after);
		return undefined;
	}

	undo(): void {
		EditorCore.getInstance().timeline.updateTracks(this.before);
	}
}
