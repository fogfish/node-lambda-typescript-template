import { expect } from 'chai'
import { handler } from '../index' 

it('should accept event',
  async () => {
    const input = {a: 'hello', b: 1}
    expect(await handler(input)).to.equal(input)
  }
)
