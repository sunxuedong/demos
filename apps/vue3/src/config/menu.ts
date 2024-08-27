export const getMenuCfg = () => {
  const menu = [
    {
      label: 'G6',
      key: 'g6',
      children: [
        {
          label: 'Tooltip（提示）',
          key: 'tooltip',
          children: [
            {
              label: '使用tooltip插件',
              key: 'plugin',
              componentPath: 'g6/tooltip/plugin'
            },
            {
              label: '使用自定义组件',
              key: 'custom',
              componentPath: 'g6/tooltip/custom'
            }
          ]
        },
        {
          label: 'anchor（锚点）',
          key: 'anchor',
          componentPath: 'g6/tooltip/plugin'
        }
      ]
    }
  ]

  return menu
}
