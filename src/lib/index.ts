// place files you want to import through the `$lib` alias in this folder.

type ComponentType =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'p'
	| 'a'
	| 'ul'
	| 'ol'
	| 'li'
	| 'lic'
	| 'blockquote'
	| 'code_block'
	| 'mermaid'
	| 'tr'
	| 'th'
	| 'td'
	| 'img'
	| 'hr'
	| 'break'
	| 'maybe_mdx'
	| 'html'
	| 'html_inline'
	| 'table'
	| 'root'
	| 'text';

export interface TinaContent {
	type: ComponentType;
	children?: TinaContent[];
	text?: string;
	italic?: boolean;
	bold?: boolean;
	underline?: boolean;
	strikethrough?: boolean;
	code?: boolean;
	lang?: string;
	value?: string;
	url?: string;
	alt?: string;
	caption?: string;
	props?: {
		align: string[];
	};
}

export interface Post {
	id: string;
	title: string;
	body?: TinaContent;
	summary?: TinaContent;
	path: string;
	createdAt: Date;
	updatedAt?: Date;
}
