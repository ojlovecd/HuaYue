/**
 * BusinessController
 *
 * @description :: Server-side logic for managing Businesses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	ywztxx: function(req,res) {
		res.view('Business/ywztxx', {layout:'layout', title: '语文主题学习'});
	},
	yyztxx: function(req,res) {
		res.view('Business/yyztxx', {layout:'layout', title: '英语主题学习'});
	},
	sydjkc: function(req,res) {
		res.view('Business/sydjkc', {layout:'layout', title: '素养奠基课程'});
	},
	dsfjyzdypj: function(req, res) {
		res.view('Business/dsfjyzdypj', {layout:'layout', title: '第三方教育诊断与评价'});
	},
	ymyd: function(req, res) {
		res.view('Business/ymyd', {layout:'layout', title: '一米阅读'});
	},
	qzjy: function(req, res) {
		res.view('Business/qzjy', {layout:'layout', title: '亲子教育'});
	}
};

