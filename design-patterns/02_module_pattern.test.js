const getAppModule = require('./02_module_pattern')

describe('Module pattern', () => {

  it('handle private values', () => {
    const appModule = getAppModule()

    expect(appModule.initialize).toBeUndefined()
    expect(appModule.getActiveItemData).toBeDefined()
    expect(appModule.setActiveName).toBeDefined()
  })
})
