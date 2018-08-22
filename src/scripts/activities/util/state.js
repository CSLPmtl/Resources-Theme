import Router from './router.js'

const router = new Router()

const state = {

	store: {
		route:  {
			level : 0,
			activity : null,
			category : null,
			activityTab : null
		},
		categoryData : {},
		activityData : {}
	},

	mutate: function (props) {
		// todo: validate props
		this.set(props)
		console.groupCollapsed('%c Datastore ', 'background: orange; color: black')
		console.log(this.store)
		console.groupEnd()
	},

	set: function (props) {
		this.store = Object.assign(this.store, props)
	},

	get: function (key) {
		if (key == undefined) {
			return this.store
		}
		else if (this.store.hasOwnProperty(key)) {
			return this.store[key]
		}
		else return null
	},

	// takes an int and sets
	routeTo: function (r) {
		let direction = (this.store.route.level >= r.level) ? '' : 'reverse'
		this.store.route = Object.assign(this.store.route, r)
		console.log(this.store.route)
		router.navigate(this.store.route)
		router.goto(r.level, direction)
	},

	getBreadcrumb: function () {
		let base = ''
		let cat = ''

		// breaks intentionally ommited for smart follow-through
		// depending on level, the string will update relevant parts
		switch (this.store.route.level) {
			case 0:
				return null
				break;
			case 2:
				cat = ' > ' + this.store.activityData.name
			case 1:
				base = 'By category > ' + this.store.categoryData.name
				break;
		}
		return base + cat
	}


	// backone () { this.setrouteLevel(this.routeLevel - 1) }
}

export default state
