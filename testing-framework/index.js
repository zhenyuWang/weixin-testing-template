const automator = require('miniprogram-automator')

automator.launch({
  // cliPath: 'path/to/cli', // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
  projectPath: 'xxx', // 项目文件地址
}).then(async miniProgram => {
  const page = await miniProgram.reLaunch('/pages/index/index')
  // 基础库高于 3.7.12，以下测试无法运行
  await page.waitFor('view')
	const input = await page.$('.my-input')
  await input.input('Hello')
  // 基础库高于 3.5.8，输入后的结果是 [object HTMLElement]
	const inputValue = await input.value()
	console.log('inputValue', inputValue)
  await miniProgram.close()
})