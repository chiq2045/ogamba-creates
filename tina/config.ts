import { defineConfig, Form, TinaCMS } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main';

export default defineConfig({
	branch,

	// Get this from tina.io
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: 'admin',
		publicFolder: 'static'
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'static'
		}
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Posts',
				path: 'src/content/posts',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true,
						searchable: true
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true
					},
					{
						type: 'rich-text',
						name: 'summary',
						label: 'Summary',
						required: true
					}
				],
				ui: {
					beforeSubmit: async ({
						values
					}: {
						form: Form;
						cms: TinaCMS;
						values: Record<string, any>;
					}) => {
						return {
							...values,
							createdAt: values.createdAt ?? new Date().toISOString(),
							updatedAt: values.createdAt ? new Date().toISOString() : undefined
						};
					}
				}
			}
		]
	}
});
