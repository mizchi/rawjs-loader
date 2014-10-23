/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Koutaro Chikuba @mizchi
*/
module.exports = function(content) {
	this.cacheable && this.cacheable();
	this.value = content;
	return 'delete module;delete exports;'+content;
}
