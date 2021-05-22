// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV  // 这要加cloud
})

// 云函数入口函数
const db = cloud.database()
exports.main = async (event, context) => {
  return db.collection("society").get()

}