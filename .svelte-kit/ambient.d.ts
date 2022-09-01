
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#kit-env-publicprefix).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const MANPATH: string;
	export const STARSHIP_SHELL: string;
	export const COREPACK_ROOT: string;
	export const rvm_use_flag: string;
	export const TERM_PROGRAM: string;
	export const rvm_bin_path: string;
	export const npm_package_exports___vite_import: string;
	export const npm_package_exports___hooks_import: string;
	export const NODE: string;
	export const GO11MODULE: string;
	export const npm_package_dependencies_sade: string;
	export const INIT_CWD: string;
	export const GEM_HOME: string;
	export const rvm_quiet_flag: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies__types_marked: string;
	export const npm_package_homepage: string;
	export const npm_config_version_git_tag: string;
	export const SHELL: string;
	export const TERM: string;
	export const rvm_gemstone_url: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_devDependencies__types_cookie: string;
	export const npm_package_dependencies_devalue: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const IRBRC: string;
	export const rvm_docs_type: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_init_license: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_dependencies_set_cookie_parser: string;
	export const npm_package_dependencies_cookie: string;
	export const ZDOTDIR: string;
	export const TERM_SESSION_ID: string;
	export const MY_RUBY_HOME: string;
	export const rvm_hook: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_config_registry: string;
	export const npm_package_repository_url: string;
	export const npm_package_readmeFilename: string;
	export const USER: string;
	export const N_PREFIX: string;
	export const PF_INFO: string;
	export const npm_package_description: string;
	export const npm_package_exports___node_import: string;
	export const MONITOR: string;
	export const rvm_gemstone_package_file: string;
	export const npm_package_exports___package_json: string;
	export const npm_package_license: string;
	export const COMMAND_MODE: string;
	export const npm_package_exports___import: string;
	export const rvm_path: string;
	export const npm_package_repository_directory: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_bin_svelte_kit: string;
	export const rvm_proxy: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies__types_sade: string;
	export const npm_package_dependencies_node_fetch: string;
	export const PAGER: string;
	export const rvm_ruby_file: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_dependencies__sveltejs_vite_plugin_svelte: string;
	export const rvm_prefix: string;
	export const rvm_silent_flag: string;
	export const PATH: string;
	export const rvm_ruby_make: string;
	export const npm_config_argv: string;
	export const npm_package_scripts_postinstall: string;
	export const npm_package_devDependencies_rollup: string;
	export const npm_package_dependencies_magic_string: string;
	export const _: string;
	export const npm_config_engine_strict: string;
	export const __CFBundleIdentifier: string;
	export const CGO_CFLAGS: string;
	export const PWD: string;
	export const npm_package_devDependencies__types_mime: string;
	export const npm_package_devDependencies_uvu: string;
	export const EDITOR: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const rvm_sdk: string;
	export const npm_package_types: string;
	export const npm_package_devDependencies_marked: string;
	export const npm_package_repository_type: string;
	export const npm_package_name: string;
	export const ITERM_PROFILE: string;
	export const npm_package_scripts_test_integration: string;
	export const npm_package_devDependencies__types_connect: string;
	export const npm_package_dependencies_mime: string;
	export const npm_package_scripts_build: string;
	export const npm_package_exports___node_polyfills_import: string;
	export const npm_package_exports___types: string;
	export const npm_config_version_commit_hooks: string;
	export const XPC_FLAGS: string;
	export const npm_package_dependencies_tiny_glob: string;
	export const npm_config_bin_links: string;
	export const npm_package_engines_node: string;
	export const npm_package_dependencies_sirv: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_version: string;
	export const GPG_TTY: string;
	export const rvm_version: string;
	export const COLORFGBG: string;
	export const HOME: string;
	export const SHLVL: string;
	export const rvm_pretty_print_flag: string;
	export const rvm_script_name: string;
	export const npm_package_dependencies_undici: string;
	export const npm_package_type: string;
	export const rvm_ruby_mode: string;
	export const npm_package_scripts_test: string;
	export const npm_package_scripts_check_all: string;
	export const LC_TERMINAL_VERSION: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_config_version_git_message: string;
	export const ITERM_SESSION_ID: string;
	export const LOGNAME: string;
	export const STARSHIP_SESSION_KEY: string;
	export const npm_package_scripts_format: string;
	export const npm_package_peerDependencies_vite: string;
	export const rvm_alias_expanded: string;
	export const npm_lifecycle_script: string;
	export const npm_package_peerDependencies_svelte: string;
	export const GEM_PATH: string;
	export const npm_package_devDependencies__types_set_cookie_parser: string;
	export const GOPATH: string;
	export const BROWSER: string;
	export const rvm_nightly_flag: string;
	export const npm_package_files_3: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const rvm_ruby_make_install: string;
	export const npm_package_scripts_types: string;
	export const npm_package_files_2: string;
	export const npm_package_devDependencies__types_node: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const LC_TERMINAL: string;
	export const rvm_niceness: string;
	export const npm_package_files_1: string;
	export const rvm_ruby_bits: string;
	export const npm_package_files_0: string;
	export const rvm_bin_flag: string;
	export const npm_package_dependencies_kleur: string;
	export const npm_config_init_version: string;
	export const npm_config_ignore_optional: string;
	export const RUBY_VERSION: string;
	export const rvm_only_path_flag: string;
	export const npm_package_files_6: string;
	export const npm_package_scripts_check: string;
	export const npm_package_files_5: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const npm_package_scripts_test_unit: string;
	export const npm_package_files_4: string;
	export const npm_config_version_tag_prefix: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#kit-env-publicprefix) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#kit-env-publicprefix).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		MANPATH: string;
		STARSHIP_SHELL: string;
		COREPACK_ROOT: string;
		rvm_use_flag: string;
		TERM_PROGRAM: string;
		rvm_bin_path: string;
		npm_package_exports___vite_import: string;
		npm_package_exports___hooks_import: string;
		NODE: string;
		GO11MODULE: string;
		npm_package_dependencies_sade: string;
		INIT_CWD: string;
		GEM_HOME: string;
		rvm_quiet_flag: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies__types_marked: string;
		npm_package_homepage: string;
		npm_config_version_git_tag: string;
		SHELL: string;
		TERM: string;
		rvm_gemstone_url: string;
		npm_package_devDependencies_vite: string;
		npm_package_devDependencies__types_cookie: string;
		npm_package_dependencies_devalue: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		IRBRC: string;
		rvm_docs_type: string;
		npm_package_scripts_lint: string;
		npm_config_init_license: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_dependencies_set_cookie_parser: string;
		npm_package_dependencies_cookie: string;
		ZDOTDIR: string;
		TERM_SESSION_ID: string;
		MY_RUBY_HOME: string;
		rvm_hook: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_config_registry: string;
		npm_package_repository_url: string;
		npm_package_readmeFilename: string;
		USER: string;
		N_PREFIX: string;
		PF_INFO: string;
		npm_package_description: string;
		npm_package_exports___node_import: string;
		MONITOR: string;
		rvm_gemstone_package_file: string;
		npm_package_exports___package_json: string;
		npm_package_license: string;
		COMMAND_MODE: string;
		npm_package_exports___import: string;
		rvm_path: string;
		npm_package_repository_directory: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_bin_svelte_kit: string;
		rvm_proxy: string;
		npm_execpath: string;
		npm_package_devDependencies__types_sade: string;
		npm_package_dependencies_node_fetch: string;
		PAGER: string;
		rvm_ruby_file: string;
		npm_package_devDependencies_svelte: string;
		npm_package_dependencies__sveltejs_vite_plugin_svelte: string;
		rvm_prefix: string;
		rvm_silent_flag: string;
		PATH: string;
		rvm_ruby_make: string;
		npm_config_argv: string;
		npm_package_scripts_postinstall: string;
		npm_package_devDependencies_rollup: string;
		npm_package_dependencies_magic_string: string;
		_: string;
		npm_config_engine_strict: string;
		__CFBundleIdentifier: string;
		CGO_CFLAGS: string;
		PWD: string;
		npm_package_devDependencies__types_mime: string;
		npm_package_devDependencies_uvu: string;
		EDITOR: string;
		npm_lifecycle_event: string;
		LANG: string;
		rvm_sdk: string;
		npm_package_types: string;
		npm_package_devDependencies_marked: string;
		npm_package_repository_type: string;
		npm_package_name: string;
		ITERM_PROFILE: string;
		npm_package_scripts_test_integration: string;
		npm_package_devDependencies__types_connect: string;
		npm_package_dependencies_mime: string;
		npm_package_scripts_build: string;
		npm_package_exports___node_polyfills_import: string;
		npm_package_exports___types: string;
		npm_config_version_commit_hooks: string;
		XPC_FLAGS: string;
		npm_package_dependencies_tiny_glob: string;
		npm_config_bin_links: string;
		npm_package_engines_node: string;
		npm_package_dependencies_sirv: string;
		XPC_SERVICE_NAME: string;
		npm_package_version: string;
		GPG_TTY: string;
		rvm_version: string;
		COLORFGBG: string;
		HOME: string;
		SHLVL: string;
		rvm_pretty_print_flag: string;
		rvm_script_name: string;
		npm_package_dependencies_undici: string;
		npm_package_type: string;
		rvm_ruby_mode: string;
		npm_package_scripts_test: string;
		npm_package_scripts_check_all: string;
		LC_TERMINAL_VERSION: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		HOMEBREW_PREFIX: string;
		npm_config_version_git_message: string;
		ITERM_SESSION_ID: string;
		LOGNAME: string;
		STARSHIP_SESSION_KEY: string;
		npm_package_scripts_format: string;
		npm_package_peerDependencies_vite: string;
		rvm_alias_expanded: string;
		npm_lifecycle_script: string;
		npm_package_peerDependencies_svelte: string;
		GEM_PATH: string;
		npm_package_devDependencies__types_set_cookie_parser: string;
		GOPATH: string;
		BROWSER: string;
		rvm_nightly_flag: string;
		npm_package_files_3: string;
		npm_config_version_git_sign: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		rvm_ruby_make_install: string;
		npm_package_scripts_types: string;
		npm_package_files_2: string;
		npm_package_devDependencies__types_node: string;
		npm_package_devDependencies__playwright_test: string;
		LC_TERMINAL: string;
		rvm_niceness: string;
		npm_package_files_1: string;
		rvm_ruby_bits: string;
		npm_package_files_0: string;
		rvm_bin_flag: string;
		npm_package_dependencies_kleur: string;
		npm_config_init_version: string;
		npm_config_ignore_optional: string;
		RUBY_VERSION: string;
		rvm_only_path_flag: string;
		npm_package_files_6: string;
		npm_package_scripts_check: string;
		npm_package_files_5: string;
		COLORTERM: string;
		npm_node_execpath: string;
		npm_package_scripts_test_unit: string;
		npm_package_files_4: string;
		npm_config_version_tag_prefix: string;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#kit-env-publicprefix) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: string]: string | undefined;
	}
}
