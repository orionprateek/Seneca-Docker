module.exports = function product (options) {
	this.add('role:math,cmd:product', math_product)

	function math_product (msg, done) {
		done(null, {
			product: msg.left * msg.right
		})
	}
}