export type DirectusActivity = {
	action: string
	collection: string
	comment?: string | null
	id: number
	ip?: string | null
	item: string
	origin?: string | null
	revisions: unknown[] | DirectusRevisions[]
	timestamp: string
	user?: string | DirectusUsers | null
	user_agent?: string | null
}

export type DirectusCollections = {
	accountability?: string | null
	archive_app_filter: boolean
	archive_field?: string | null
	archive_value?: string | null
	collapse: string
	collection: string
	color?: string | null
	display_template?: string | null
	group?: string | DirectusCollections | null
	hidden: boolean
	icon?: string | null
	item_duplication_fields?: unknown | null
	note?: string | null
	preview_url?: string | null
	singleton: boolean
	sort?: number | null
	sort_field?: string | null
	translations?: unknown | null
	unarchive_value?: string | null
	versioning: boolean
}

export type DirectusDashboards = {
	color?: string | null
	date_created?: string | null
	icon: string
	id: string
	name: string
	note?: string | null
	panels: unknown[] | DirectusPanels[]
	user_created?: string | DirectusUsers | null
}

export type DirectusExtensions = {
	bundle?: string | null
	enabled: boolean
	folder: string
	id: string
	source: string
}

export type DirectusFields = {
	collection: string | DirectusCollections
	conditions?: unknown | null
	display?: string | null
	display_options?: unknown | null
	field: string
	group?: string | DirectusFields | null
	hidden: boolean
	id: number
	interface?: string | null
	note?: string | null
	options?: unknown | null
	readonly: boolean
	required?: boolean | null
	sort?: number | null
	special?: unknown | null
	translations?: unknown | null
	validation?: unknown | null
	validation_message?: string | null
	width?: string | null
}

export type DirectusFiles = {
	charset?: string | null
	description?: string | null
	duration?: number | null
	embed?: string | null
	filename_disk?: string | null
	filename_download: string
	filesize?: number | null
	focal_point_x?: number | null
	focal_point_y?: number | null
	folder?: string | DirectusFolders | null
	height?: number | null
	id: string
	location?: string | null
	metadata?: unknown | null
	modified_by?: string | DirectusUsers | null
	modified_on: string
	storage: string
	tags?: unknown | null
	title?: string | null
	type?: string | null
	uploaded_by?: string | DirectusUsers | null
	uploaded_on: string
	width?: number | null
}

export type DirectusFlows = {
	accountability?: string | null
	color?: string | null
	date_created?: string | null
	description?: string | null
	icon?: string | null
	id: string
	name: string
	operation?: string | DirectusOperations | null
	operations: unknown[] | DirectusOperations[]
	options?: unknown | null
	status: string
	trigger?: string | null
	user_created?: string | DirectusUsers | null
}

export type DirectusFolders = {
	id: string
	name: string
	parent?: string | DirectusFolders | null
}

export type DirectusMigrations = {
	name: string
	timestamp?: string | null
	version: string
}

export type DirectusNotifications = {
	collection?: string | null
	id: number
	item?: string | null
	message?: string | null
	recipient: string | DirectusUsers
	sender?: string | DirectusUsers | null
	status?: string | null
	subject: string
	timestamp?: string | null
}

export type DirectusOperations = {
	date_created?: string | null
	flow: string | DirectusFlows
	id: string
	key: string
	name?: string | null
	options?: unknown | null
	position_x: number
	position_y: number
	reject?: string | DirectusOperations | null
	resolve?: string | DirectusOperations | null
	type: string
	user_created?: string | DirectusUsers | null
}

export type DirectusPanels = {
	color?: string | null
	dashboard: string | DirectusDashboards
	date_created?: string | null
	height: number
	icon?: string | null
	id: string
	name?: string | null
	note?: string | null
	options?: unknown | null
	position_x: number
	position_y: number
	show_header: boolean
	type: string
	user_created?: string | DirectusUsers | null
	width: number
}

export type DirectusPermissions = {
	action: string
	collection: string
	fields?: unknown | null
	id: number
	permissions?: unknown | null
	presets?: unknown | null
	role?: string | DirectusRoles | null
	validation?: unknown | null
}

export type DirectusPresets = {
	bookmark?: string | null
	collection?: string | null
	color?: string | null
	filter?: unknown | null
	icon?: string | null
	id: number
	layout?: string | null
	layout_options?: unknown | null
	layout_query?: unknown | null
	refresh_interval?: number | null
	role?: string | DirectusRoles | null
	search?: string | null
	user?: string | DirectusUsers | null
}

export type DirectusRelations = {
	id: number
	junction_field?: string | null
	many_collection: string
	many_field: string
	one_allowed_collections?: unknown | null
	one_collection?: string | null
	one_collection_field?: string | null
	one_deselect_action: string
	one_field?: string | null
	sort_field?: string | null
}

export type DirectusRevisions = {
	activity: number | DirectusActivity
	collection: string
	data?: unknown | null
	delta?: unknown | null
	id: number
	item: string
	parent?: number | DirectusRevisions | null
	version?: string | DirectusVersions | null
}

export type DirectusRoles = {
	admin_access: boolean
	app_access: boolean
	description?: string | null
	enforce_tfa: boolean
	icon: string
	id: string
	ip_access?: unknown | null
	name: string
	users: unknown[] | DirectusUsers[]
}

export type DirectusSessions = {
	expires: string
	ip?: string | null
	next_token?: string | null
	origin?: string | null
	share?: string | DirectusShares | null
	token: string
	user?: string | DirectusUsers | null
	user_agent?: string | null
}

export type DirectusSettings = {
	auth_login_attempts?: number | null
	auth_password_policy?: string | null
	basemaps?: unknown | null
	custom_aspect_ratios?: unknown | null
	custom_css?: string | null
	default_appearance: string
	default_language: string
	default_theme_dark?: string | null
	default_theme_light?: string | null
	id: number
	mapbox_key?: string | null
	module_bar?: unknown | null
	project_color: string
	project_descriptor?: string | null
	project_logo?: string | DirectusFiles | null
	project_name: string
	project_url?: string | null
	public_background?: string | DirectusFiles | null
	public_favicon?: string | DirectusFiles | null
	public_foreground?: string | DirectusFiles | null
	public_note?: string | null
	public_registration: boolean
	public_registration_email_filter?: unknown | null
	public_registration_role?: string | null
	public_registration_verify_email: boolean
	report_bug_url?: string | null
	report_error_url?: string | null
	report_feature_url?: string | null
	storage_asset_presets?: unknown | null
	storage_asset_transform?: string | null
	storage_default_folder?: string | DirectusFolders | null
	theme_dark_overrides?: unknown | null
	theme_light_overrides?: unknown | null
	theming_group: string
}

export type DirectusShares = {
	collection: string | DirectusCollections
	date_created?: string | null
	date_end?: string | null
	date_start?: string | null
	id: string
	item: string
	max_uses?: number | null
	name?: string | null
	password?: string | null
	role?: string | DirectusRoles | null
	times_used?: number | null
	user_created?: string | DirectusUsers | null
}

export type DirectusTranslations = {
	id: string
	key: string
	language: string
	value: string
}

export type DirectusUsers = {
	appearance?: string | null
	auth_data?: unknown | null
	avatar?: string | DirectusFiles | null
	description?: string | null
	email?: string | null
	email_notifications?: boolean | null
	external_identifier?: string | null
	first_name?: string | null
	id: string
	language?: string | null
	last_access?: string | null
	last_name?: string | null
	last_page?: string | null
	location?: string | null
	password?: string | null
	provider: string
	role?: string | DirectusRoles | null
	status: string
	tags?: unknown | null
	tfa_secret?: string | null
	theme_dark?: string | null
	theme_dark_overrides?: unknown | null
	theme_light?: string | null
	theme_light_overrides?: unknown | null
	title?: string | null
	token?: string | null
}

export type DirectusVersions = {
	collection: string | DirectusCollections
	date_created?: string | null
	date_updated?: string | null
	hash?: string | null
	id: string
	item: string
	key: string
	name?: string | null
	user_created?: string | DirectusUsers | null
	user_updated?: string | DirectusUsers | null
}

export type DirectusWebhooks = {
	actions: unknown
	collections: unknown
	data: boolean
	headers?: unknown | null
	id: number
	method: string
	migrated_flow?: string | null
	name: string
	status: string
	url: string
	was_active_before_deprecation: boolean
}

export type Languages = {
	code: string
	name?: string | null
}

export type SvetlikusBlockAboutUs = {
	cta?: number | SvetlikusCta | null
	id: number
	image?: string | DirectusFiles | null
	kicker?: string | null
	lead?: string | null
	status: string
	title?: string | null
}

export type SvetlikusBlockBenefits = {
	benefits?: unknown | null
	cta?: number | SvetlikusCta | null
	id: number
	kicker?: string | null
	lead?: string | null
	status: string
	title?: string | null
}

export type SvetlikusBlockClients = {
	clients: unknown[] | SvetlikusBlockClientsSvetlikusClients[]
	id: number
	lead?: string | null
	status: string
	title?: string | null
}

export type SvetlikusBlockClientsSvetlikusClients = {
	id: number
	sort?: number | null
	svetlikus_block_clients_id?: number | SvetlikusBlockClients | null
	svetlikus_clients_id?: number | SvetlikusClients | null
}

export type SvetlikusBlockConfetti = {
	cta?: number | SvetlikusCta | null
	id: number
	kicker?: string | null
	lead?: string | null
	status: string
	title?: string | null
}

export type SvetlikusBlockFaq = {
	id: number
	items?: unknown | null
	kicker?: string | null
	lead?: string | null
	status: string
	title?: string | null
}

export type SvetlikusBlockFullWidthImage = {
	id: number
	image?: string | DirectusFiles | null
	status: string
}

export type SvetlikusBlockHero = {
	cta?: number | SvetlikusCta | null
	cta_2?: number | SvetlikusCta | null
	id: number
	images: unknown[] | SvetlikusBlockHeroFiles[]
	kicker?: string | null
	lead?: string | null
	project?: number | SvetlikusProjects | null
	status: string
	title?: string | null
}

export type SvetlikusBlockHeroFiles = {
	directus_files_id?: string | DirectusFiles | null
	id: number
	svetlikus_block_hero_id?: number | SvetlikusBlockHero | null
}

export type SvetlikusBlockImageGrid = {
	id: number
	images: unknown[] | SvetlikusBlockImageGridFiles[]
	lead?: string | null
	status: string
}

export type SvetlikusBlockImageGridFiles = {
	directus_files_id?: string | DirectusFiles | null
	id: number
	svetlikus_block_image_grid_id?: number | SvetlikusBlockImageGrid | null
}

export type SvetlikusBlockPricing = {
	id: number
	kicker?: string | null
	lead?: string | null
	pricing_table?: unknown | null
	status: string
	testimonials: unknown[] | SvetlikusBlockPricingSvetlikusTestimonials[]
	title?: string | null
}

export type SvetlikusBlockPricingSvetlikusTestimonials = {
	id: number
	svetlikus_block_pricing_id?: number | SvetlikusBlockPricing | null
	svetlikus_testimonials_id?: number | SvetlikusTestimonials | null
}

export type SvetlikusBlockProcess = {
	cta?: number | SvetlikusCta | null
	id: number
	kicker?: string | null
	lead?: string | null
	processes?: unknown | null
	status: string
	title?: string | null
}

export type SvetlikusBlockServices = {
	cta?: number | SvetlikusCta | null
	id: number
	kicker?: string | null
	lead?: string | null
	services?: unknown | null
	status: string
	title?: string | null
}

export type SvetlikusBlockTags = {
	id: number
	lead?: string | null
	status: string
	title?: string | null
}

export type SvetlikusBlockText = {
	content?: string | null
	id: number
	status: string
}

export type SvetlikusBlockWork = {
	cta?: number | SvetlikusCta | null
	cta_2?: number | SvetlikusCta | null
	id: number
	kicker?: string | null
	lead?: string | null
	projects: unknown[] | SvetlikusBlockWorkSvetlikusProjects[]
	status: string
	title?: string | null
}

export type SvetlikusBlockWorkSvetlikusProjects = {
	id: number
	sort?: number | null
	svetlikus_block_work_id?: number | SvetlikusBlockWork | null
	svetlikus_projects_id?: number | SvetlikusProjects | null
}

export type SvetlikusClients = {
	id: number
	image?: string | DirectusFiles | null
	sort?: number | null
	status: string
	title?: string | null
	url?: string | null
}

export type SvetlikusCta = {
	href?: string | null
	id: number
	label?: string | null
	variant?: string | null
}

export type SvetlikusGlobal = {
	description?: string | null
	facebook_link?: string | null
	id: number
	instagram_link?: string | null
	linked_in_link?: string | null
	title?: string | null
	translations: unknown[] | SvetlikusGlobalTranslations[]
	youtube_link?: string | null
}

export type SvetlikusGlobalTranslations = {
	id: number
	languages_code?: string | Languages | null
	menu?: unknown | null
	svetlikus_global_id?: number | SvetlikusGlobal | null
}

export type SvetlikusPages = {
	date_created?: string | null
	date_updated?: string | null
	id: number
	status: string
	translations: unknown[] | SvetlikusPagesTranslations[]
}

export type SvetlikusPagesTranslations = {
	blocks: unknown[] | SvetlikusPagesTranslationsBlocks[]
	id: number
	languages_code?: string | Languages | null
	seo_description?: string | null
	seo_title?: string | null
	slug?: string | null
	svetlikus_pages_id?: number | SvetlikusPages | null
}

export type SvetlikusPagesTranslationsBlocks = {
	collection?: string | null
	custom_id?: string | null
	id: number
	item?: string | unknown | null
	sort?: number | null
	svetlikus_pages_translations_id?: number | SvetlikusPagesTranslations | null
}

export type SvetlikusProjects = {
	date_created?: string | null
	full_width_image?: string | DirectusFiles | null
	id: number
	logo?: string | DirectusFiles | null
	sort?: number | null
	status: string
	tags: unknown[] | SvetlikusProjectsSvetlikusProjectsTags[]
	translations: unknown[] | SvetlikusProjectsTranslations[]
}

export type SvetlikusProjectsSvetlikusProjectsTags = {
	id: number
	sort?: number | null
	svetlikus_projects_id?: number | SvetlikusProjects | null
	svetlikus_projects_tags_id?: number | SvetlikusProjectsTags | null
}

export type SvetlikusProjectsTags = {
	color?: string | null
	id: number
	sort?: number | null
	status: string
	translations: unknown[] | SvetlikusProjectsTagsTranslations[]
}

export type SvetlikusProjectsTagsTranslations = {
	id: number
	languages_code?: string | Languages | null
	slug?: string | null
	svetlikus_projects_tags_id?: number | SvetlikusProjectsTags | null
	title?: string | null
}

export type SvetlikusProjectsTranslations = {
	blocks: unknown[] | SvetlikusProjectsTranslationsBlocks[]
	description?: string | null
	id: number
	image?: string | DirectusFiles | null
	languages_code?: string | Languages | null
	project_link?: string | null
	slug?: string | null
	svetlikus_projects_id?: number | SvetlikusProjects | null
	testimonial?: number | SvetlikusTestimonials | null
	title?: string | null
}

export type SvetlikusProjectsTranslationsBlocks = {
	collection?: string | null
	custom_id?: string | null
	id: number
	item?: string | unknown | null
	sort?: number | null
	svetlikus_projects_translations_id?: number | SvetlikusProjectsTranslations | null
}

export type SvetlikusProjectsTranslationsSvetlikusTestimonials = {
	id: number
	svetlikus_projects_translations_id?: number | null
	svetlikus_testimonials_id?: number | null
}

export type SvetlikusTestimonials = {
	date_created?: string | null
	id: number
	image?: string | DirectusFiles | null
	name?: string | null
	rating?: number | null
	sort?: number | null
	status: string
	translations: unknown[] | SvetlikusTestimonialsTranslations[]
}

export type SvetlikusTestimonialsTranslations = {
	id: number
	languages_code?: string | Languages | null
	position?: string | null
	quote?: string | null
	svetlikus_testimonials_id?: number | SvetlikusTestimonials | null
}

export type CustomDirectusTypes = {
	directus_activity: DirectusActivity[]
	directus_collections: DirectusCollections[]
	directus_dashboards: DirectusDashboards[]
	directus_extensions: DirectusExtensions[]
	directus_fields: DirectusFields[]
	directus_files: DirectusFiles[]
	directus_flows: DirectusFlows[]
	directus_folders: DirectusFolders[]
	directus_migrations: DirectusMigrations[]
	directus_notifications: DirectusNotifications[]
	directus_operations: DirectusOperations[]
	directus_panels: DirectusPanels[]
	directus_permissions: DirectusPermissions[]
	directus_presets: DirectusPresets[]
	directus_relations: DirectusRelations[]
	directus_revisions: DirectusRevisions[]
	directus_roles: DirectusRoles[]
	directus_sessions: DirectusSessions[]
	directus_settings: DirectusSettings
	directus_shares: DirectusShares[]
	directus_translations: DirectusTranslations[]
	directus_users: DirectusUsers[]
	directus_versions: DirectusVersions[]
	directus_webhooks: DirectusWebhooks[]
	languages: Languages[]
	svetlikus_block_about_us: SvetlikusBlockAboutUs[]
	svetlikus_block_benefits: SvetlikusBlockBenefits[]
	svetlikus_block_clients: SvetlikusBlockClients[]
	svetlikus_block_clients_svetlikus_clients: SvetlikusBlockClientsSvetlikusClients[]
	svetlikus_block_confetti: SvetlikusBlockConfetti[]
	svetlikus_block_faq: SvetlikusBlockFaq[]
	svetlikus_block_full_width_image: SvetlikusBlockFullWidthImage[]
	svetlikus_block_hero: SvetlikusBlockHero[]
	svetlikus_block_hero_files: SvetlikusBlockHeroFiles[]
	svetlikus_block_image_grid: SvetlikusBlockImageGrid[]
	svetlikus_block_image_grid_files: SvetlikusBlockImageGridFiles[]
	svetlikus_block_pricing: SvetlikusBlockPricing[]
	svetlikus_block_pricing_svetlikus_testimonials: SvetlikusBlockPricingSvetlikusTestimonials[]
	svetlikus_block_process: SvetlikusBlockProcess[]
	svetlikus_block_services: SvetlikusBlockServices[]
	svetlikus_block_tags: SvetlikusBlockTags[]
	svetlikus_block_text: SvetlikusBlockText[]
	svetlikus_block_work: SvetlikusBlockWork[]
	svetlikus_block_work_svetlikus_projects: SvetlikusBlockWorkSvetlikusProjects[]
	svetlikus_clients: SvetlikusClients[]
	svetlikus_cta: SvetlikusCta[]
	svetlikus_global: SvetlikusGlobal
	svetlikus_global_translations: SvetlikusGlobalTranslations[]
	svetlikus_pages: SvetlikusPages[]
	svetlikus_pages_translations: SvetlikusPagesTranslations[]
	svetlikus_pages_translations_blocks: SvetlikusPagesTranslationsBlocks[]
	svetlikus_projects: SvetlikusProjects[]
	svetlikus_projects_svetlikus_projects_tags: SvetlikusProjectsSvetlikusProjectsTags[]
	svetlikus_projects_tags: SvetlikusProjectsTags[]
	svetlikus_projects_tags_translations: SvetlikusProjectsTagsTranslations[]
	svetlikus_projects_translations: SvetlikusProjectsTranslations[]
	svetlikus_projects_translations_blocks: SvetlikusProjectsTranslationsBlocks[]
	svetlikus_projects_translations_svetlikus_testimonials: SvetlikusProjectsTranslationsSvetlikusTestimonials[]
	svetlikus_testimonials: SvetlikusTestimonials[]
	svetlikus_testimonials_translations: SvetlikusTestimonialsTranslations[]
}
