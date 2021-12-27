export interface Video {
	etag?: string | null;
	id: any;
	kind?: string | null;
	snippet?: VideoSnippet;
}

export interface VideoSnippet {
	channelId?: string | null;
	channelTitle?: string | null;
	description?: string | null;
	liveBroadcastContent?: string | null;
	publishedAt?: string | null;
	thumbnails: any;
	title?: string | null;
}

