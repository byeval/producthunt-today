import BaseService from './base'

class ProductService extends BaseService {
  constructor() {
    super('products')
  }

  async addProduct(item: any) {
    try {
      const { data } = await this.collection.doc(item.id).get()
      await this.collection.doc(item.id).update({ data: item })
      if (data) {
        return data
      }
    } catch (err) {
      return await this.collection.add({ data: { ...item, _id: item.id } })
    }
  }
}

export const productService = new ProductService()
