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
		res.view('News/detail', {layout: 'layout', title: '新闻中心-华樾教育名师工作站成立暨培训大会在京召开'});
	},
	detail1: function(req, res) {
		res.view('News/detail1', {layout: 'layout', title: '临沂市中小学教育质量综合评价及学生课业负担监测解读报告会召开'});
	},
	detail2: function(req, res) {
		res.view('News/detail2', {layout: 'layout', title: '【一起读书】《柳林风声》第十六期活动获奖名单'});
	},
	detail3: function(req, res) {
		res.view('News/detail3', {layout: 'layout', title: '三个‘萌’娃问校长，问出了这样的阅读主张'});
	}
};

