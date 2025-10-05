import { client } from 'tina/__generated__/client';
import type { PageServerLoad } from './$types';
import type { Post } from '$lib';

export const load: PageServerLoad = async ({ params }) => {
	const { id } = params;
	if (!id) {
		throw Error('No ID provided');
	}

	const post = await client.queries.post({
		relativePath: `${id}.md`
	});

	return {
		post: {
			...post.data.post,
			path: `${post.data.post.id}.md`
		} as unknown as Post
	};
};
