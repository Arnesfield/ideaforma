const assets = 'static'

const createPath = function() {
  return Array.prototype.join.call(arguments, '/') + '/'
}

const imgPath = createPath(assets, 'img')

export { imgPath }
export default { imgPath }
