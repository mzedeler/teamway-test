import sinon from 'sinon'
import { assert } from 'chai'
export const mochaHooks = {
  beforeEach() {
    global.sinon = sinon.createSandbox()
    global.assert = assert
  },
  afterEach() {
    global.sinon.restore()
    global.assert = assert
  }
}
