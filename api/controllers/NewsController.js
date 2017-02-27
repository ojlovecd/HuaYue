/**
 * NewsController
 *
 * @description :: Server-side logic for managing News
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index:function(req, res) {
		res.view('News/index', {layout: 'layout', title: '新闻中心'});
	},
	detail: function(req, res) {
		res.view('News/detail', {layout: 'layout', title: ''});
	}
};

