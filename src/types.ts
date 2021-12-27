export interface defaultVideoStateType {
	etag?: string | null;
	id?: string;
	kind?: string | null;
	snippet?: VideoSnippet;
}

export interface VideoSnippet {
	channelId?: string | null;
	channelTitle?: string | null;
	description?: string | null;
	liveBroadcastContent?: string | null;
	publishedAt?: string | null;
	thumbnails?: {};
	title?: string | null;
}

