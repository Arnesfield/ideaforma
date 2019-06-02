const createPath = function() {
  return Array.prototype.join.call(arguments, '/') + '/'
}

const assetsPath = createPath('static')
const imgPath = createPath(assetsPath, 'img')
const logoPath = createPath(imgPath, 'logo')

export { createPath, assetsPath, imgPath, logoPath }
export default { assetsPath, imgPath, logoPath }
