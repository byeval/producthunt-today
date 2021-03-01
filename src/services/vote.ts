import BaseService from './base'

class VoteService extends BaseService {
  constructor() {
    super('votes')
  }

  async voteProduct(productId: string) {
    if (!this.openid) return

    const _id = `${this.openid}:${productId}`

    try {
      await this.collection.add({
        data: {
          _id,
          productId,
          createdAt: Date.now(),
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  async unvoteProduct(productId: string) {
    if (!this.openid) return

    const _id = `${this.openid}:${productId}`

    try {
      await this.collection.doc(_id).remove()
    } catch (err) {
      console.log(err)
    }
  }

  async myVotes() {
    const votes = await this.collection
      .where({
        _openid: this.openid,
      })
      .get()

    if (votes.data && votes.data.length > 0) {
      return votes.data
    }

    return []
  }
}

export const voteService = new VoteService()
