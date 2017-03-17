module.exports = function sum (options) {
	this.add('role:math,cmd:sum', math_sum)

	function math_sum (msg, done) {
		done(null, {
			sum: msg.left + msg.right
		})
	}
}