import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _c579659a = () => import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */).then(m => m.default || m)
const _7639139e = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _51af139b = () => import('../pages/articles/index.vue' /* webpackChunkName: "pages/articles/index" */).then(m => m.default || m)
const _043e4ff2 = () => import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */).then(m => m.default || m)
const _1c7dab7c = () => import('../pages/admin/index/photos/index.vue' /* webpackChunkName: "pages/admin/index/photos/index" */).then(m => m.default || m)
const _1fb83238 = () => import('../pages/admin/index/articles/index.vue' /* webpackChunkName: "pages/admin/index/articles/index" */).then(m => m.default || m)
const _11f52614 = () => import('../pages/admin/index/events/index.vue' /* webpackChunkName: "pages/admin/index/events/index" */).then(m => m.default || m)
const _0ad24058 = () => import('../pages/admin/index/members/index.vue' /* webpackChunkName: "pages/admin/index/members/index" */).then(m => m.default || m)
const _e9a7cc40 = () => import('../pages/admin/index/articles/destroy.vue' /* webpackChunkName: "pages/admin/index/articles/destroy" */).then(m => m.default || m)
const _5463e72a = () => import('../pages/admin/index/events/create.vue' /* webpackChunkName: "pages/admin/index/events/create" */).then(m => m.default || m)
const _3c08f288 = () => import('../pages/admin/index/events/destroy.vue' /* webpackChunkName: "pages/admin/index/events/destroy" */).then(m => m.default || m)
const _40dd1850 = () => import('../pages/admin/index/photos/edit.vue' /* webpackChunkName: "pages/admin/index/photos/edit" */).then(m => m.default || m)
const _6c785224 = () => import('../pages/admin/index/photos/destroy.vue' /* webpackChunkName: "pages/admin/index/photos/destroy" */).then(m => m.default || m)
const _27bfeab8 = () => import('../pages/admin/index/events/edit.vue' /* webpackChunkName: "pages/admin/index/events/edit" */).then(m => m.default || m)
const _ca27e27c = () => import('../pages/admin/index/photos/create.vue' /* webpackChunkName: "pages/admin/index/photos/create" */).then(m => m.default || m)
const _7ff9656a = () => import('../pages/admin/index/members/create.vue' /* webpackChunkName: "pages/admin/index/members/create" */).then(m => m.default || m)
const _59385ce4 = () => import('../pages/admin/index/photos/_id.vue' /* webpackChunkName: "pages/admin/index/photos/_id" */).then(m => m.default || m)
const _aa04c508 = () => import('../pages/admin/index/events/_id.vue' /* webpackChunkName: "pages/admin/index/events/_id" */).then(m => m.default || m)
const _eed81e82 = () => import('../pages/admin/index/members/_id/index.vue' /* webpackChunkName: "pages/admin/index/members/_id/index" */).then(m => m.default || m)
const _4fa16dac = () => import('../pages/admin/index/members/_id/index/destroy.vue' /* webpackChunkName: "pages/admin/index/members/_id/index/destroy" */).then(m => m.default || m)
const _3c179ead = () => import('../pages/admin/index/members/_id/edit.vue' /* webpackChunkName: "pages/admin/index/members/_id/edit" */).then(m => m.default || m)
const _e64cd47c = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _71210ac4 = () => import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */).then(m => m.default || m)
const _430f6669 = () => import('../pages/profile/articles/_id/publish.vue' /* webpackChunkName: "pages/profile/articles/_id/publish" */).then(m => m.default || m)
const _0be7aa83 = () => import('../pages/articles/create.vue' /* webpackChunkName: "pages/articles/create" */).then(m => m.default || m)
const _6d4ee906 = () => import('../pages/articles/_id/index.vue' /* webpackChunkName: "pages/articles/_id/index" */).then(m => m.default || m)
const _f4edfcf4 = () => import('../pages/articles/_id/edit.vue' /* webpackChunkName: "pages/articles/_id/edit" */).then(m => m.default || m)
const _a6dd1ef2 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/signup",
			component: _c579659a,
			name: "signup"
		},
		{
			path: "/login",
			component: _7639139e,
			name: "login"
		},
		{
			path: "/articles",
			component: _51af139b,
			name: "articles"
		},
		{
			path: "/admin",
			component: _043e4ff2,
			name: "admin",
			children: [
				{
					path: "photos",
					component: _1c7dab7c,
					name: "admin-index-photos"
				},
				{
					path: "articles",
					component: _1fb83238,
					name: "admin-index-articles"
				},
				{
					path: "events",
					component: _11f52614,
					name: "admin-index-events"
				},
				{
					path: "members",
					component: _0ad24058,
					name: "admin-index-members"
				},
				{
					path: "articles/destroy",
					component: _e9a7cc40,
					name: "admin-index-articles-destroy"
				},
				{
					path: "events/create",
					component: _5463e72a,
					name: "admin-index-events-create"
				},
				{
					path: "events/destroy",
					component: _3c08f288,
					name: "admin-index-events-destroy"
				},
				{
					path: "photos/edit",
					component: _40dd1850,
					name: "admin-index-photos-edit"
				},
				{
					path: "photos/destroy",
					component: _6c785224,
					name: "admin-index-photos-destroy"
				},
				{
					path: "events/edit",
					component: _27bfeab8,
					name: "admin-index-events-edit"
				},
				{
					path: "photos/create",
					component: _ca27e27c,
					name: "admin-index-photos-create"
				},
				{
					path: "members/create",
					component: _7ff9656a,
					name: "admin-index-members-create"
				},
				{
					path: "photos/:id?",
					component: _59385ce4,
					name: "admin-index-photos-id"
				},
				{
					path: "events/:id?",
					component: _aa04c508,
					name: "admin-index-events-id"
				},
				{
					path: "members/:id?",
					component: _eed81e82,
					name: "admin-index-members-id",
					children: [
						{
							path: "destroy",
							component: _4fa16dac,
							name: "admin-index-members-id-index-destroy"
						}
					]
				},
				{
					path: "members/:id?/edit",
					component: _3c179ead,
					name: "admin-index-members-id-edit"
				}
			]
		},
		{
			path: "/about",
			component: _e64cd47c,
			name: "about"
		},
		{
			path: "/profile",
			component: _71210ac4,
			name: "profile",
			children: [
				{
					path: "articles/:id?/publish",
					component: _430f6669,
					name: "profile-articles-id-publish"
				}
			]
		},
		{
			path: "/articles/create",
			component: _0be7aa83,
			name: "articles-create"
		},
		{
			path: "/articles/:id",
			component: _6d4ee906,
			name: "articles-id"
		},
		{
			path: "/articles/:id/edit",
			component: _f4edfcf4,
			name: "articles-id-edit"
		},
		{
			path: "/",
			component: _a6dd1ef2,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
