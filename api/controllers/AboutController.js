/**
 * AboutController
 *
 * @description :: Server-side logic for managing abouts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res){
		res.view('About/index',{layout:'layout',title:'企业简介'});
	},
	culture: function(req, res) {
		res.view('About/culture', {layout:'layout', title:'企业文化'});
	}
};

