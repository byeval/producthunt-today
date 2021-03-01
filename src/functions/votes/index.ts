const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})

exports.main = async (event) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database()
  const { pageNo = 1, pageSize = 20 } = event

  const { list } = await db
    .collection('votes')
    .aggregate()
    .match({
      _openid: wxContext.OPENID,
    })
    .sort({ createdAt: -1 })
    .skip((pageNo - 1) * pageSize)
    .limit(pageSize)
    .lookup({
      from: 'products',
      localField: 'productId',
      foreignField: '_id',
      as: 'product',
    })
    .end()

  return list.map((item: any) => item.product[0])
}
