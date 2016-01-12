/*
 * Define your routing settings here.
 * Refer to the documentation for details.
 */
export var routes : Megazord.RouterConfig = {
		"root.companies" : {
    	itemClick: 'root.detail'
	},
	"root.dashboard" : {
		news: 'root.news',
		events: 'root.sessions',
		companies: 'root.companies',
		form: 'root.form'
	},
	"root.login" : {
		doLogin: 'root.companies'
	}
};