/**
 * CareerController
 *
 * @description :: Server-side logic for managing Careers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res){
		res.view('Career/index',{layout:'layout',title:'加入我们'});
	}
};

