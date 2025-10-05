import { client } from 'tina/__generated__/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const postsResponse = await client.queries.postConnection();
	const posts = postsResponse.data.postConnection.edges?.map((post) => ({
		title: post?.node?.title,
		fileName: post?.node?._sys.filename,
		summary: post?.node?.summary
	}));
	return { posts };
};
