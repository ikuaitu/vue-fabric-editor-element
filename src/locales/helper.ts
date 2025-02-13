/*
 * @Author: June
 * @Description:
 * @Date: 2024-11-23 10:28:58
 * @LastEditors: June
 * @LastEditTime: 2024-11-23 10:29:09
 */
import { set } from 'lodash-es'

export function genMessage(
  langs: Record<string, Record<string, any>>,
  prefix = 'lang'
) {
  const obj: Record<string, any> = {}

  Object.keys(langs).forEach((key) => {
    const langFileModule = langs[key].default
    let fileName = key.replace(`./${prefix}/`, '').replace(/^\.\//, '')
    const lastIndex = fileName.lastIndexOf('.')
    fileName = fileName.substring(0, lastIndex)
    const keyList = fileName.split('/')
    const moduleName = keyList.shift()
    const objKey = keyList.join('.')

    if (moduleName) {
      if (objKey) {
        set(obj, moduleName, obj[moduleName] || {})
        set(obj[moduleName], objKey, langFileModule)
      } else {
        set(obj, moduleName, langFileModule || {})
      }
    }
  })
  return obj
}
