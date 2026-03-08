/* eslint-disable */

const normalizePath = (filePath) => {
  const normalized = filePath.replace(/\\/g, '/').replace(/\/+/g, '/')
  return normalized.replace(/^(\.\.\/)+images\//, '')
}

export const getImage = (filePath) => {
  const normalizedPath = normalizePath(filePath)
  return `/images/${normalizedPath}`
}

export const getImages = (filePaths) => filePaths.map(getImage)

export const getImageFromFolder = (folder, fileName) =>
  getImage(`${folder}/${fileName}`)

export const getImagesFromFolder = (folder, fileNames) =>
  fileNames.map((fileName) => getImageFromFolder(folder, fileName))
