import Router from './router.js'

const router = new Router()

const state = {

	store: {
		drill:  {
			level : 0
		},
		categoryData : {},
		activityData : {}
	},

	mutate: function (props) {
		// todo: validate props
		this.set(props)
		console.log('%c Datastore: ', 'background: orange; color: black', this.store)
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
	drillTo: function (level) {
		let direction = (this.store.drill.level > level) ? '' : 'reverse'
		this.store.drill.level = level
		router.goto(level, direction)
	},

	getBreadcrumb: function () {
		let base = ''
		let cat = ''

		// breaks intentionally ommited for smart follow-through
		// depending on level, the string will update relevant parts
		switch (this.store.drill.level) {
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


	// backone () { this.setDrillLevel(this.drillLevel - 1) }
}

export default state
