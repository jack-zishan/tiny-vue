export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'event-header-click-event',
      'name': { 'zh-CN': '表头点击事件', 'en-US': 'Table header click event' },
      'desc': {
        'zh-CN': '<p>在 <code>grid</code> 标签上配置 <code>header-cell-click</code> 可以监听到表头的点击事件</p>\n',
        'en-US':
          '<p>Configure <code>header-cell-click</code> on the <code>grid</code> tag to listen to the click event of the table header</p>\n'
      },
      'codeFiles': ['event/header-click-event.vue']
    },
    {
      'demoId': 'event-header-dblclick-event',
      'name': { 'zh-CN': '表头双击事件', 'en-US': 'Table header double-click event' },
      'desc': {
        'zh-CN': '<p>在 <code>grid</code> 标签上配置 <code>header-cell-dblclick</code> 可以监听到表头的双击事件</p>\n',
        'en-US':
          '<p>Configure <code>header-cell-dblclick</code> on the <code>grid</code> tag to listen to the double-click event of the table header</p>\n'
      },
      'codeFiles': ['event/header-dblclick-event.vue']
    },
    {
      'demoId': 'event-cell-click-event',
      'name': { 'zh-CN': '单元格点击事件', 'en-US': 'Cell Click Event' },
      'desc': {
        'zh-CN': '<p>在 <code>grid</code> 标签上配置 <code>cell-click</code> 可以监听到单元格的点击事件</p>\n',
        'en-US':
          '<p>Configure <code>cell-click</code> on the <code>grid</code> tab to listen to the click event of a cell</p>\n'
      },
      'codeFiles': ['event/cell-click-event.vue']
    },
    {
      'demoId': 'event-cell-dblclick-event',
      'name': { 'zh-CN': '单元格双击事件', 'en-US': 'Cell Double-Click Event' },
      'desc': {
        'zh-CN': '<p>在 <code>grid</code> 标签上配置 <code>cell-dblclick</code> 可以监听到单元格的双击事件</p>\n',
        'en-US':
          '<p>Configure <code>cell-dblclick</code> on the <code>grid</code> tab to listen to the double-click event of a cell</p>\n'
      },
      'codeFiles': ['event/cell-dblclick-event.vue']
    },
    {
      'demoId': 'event-cell-mouseenter-event',
      'name': { 'zh-CN': '鼠标进入单元格事件', 'en-US': 'Indicates that the mouse moves to a cell.' },
      'desc': {
        'zh-CN': '<p>在 <code>grid</code> 标签上配置 <code>cell-dblclick</code> 可以监听到单元格的双击事件</p>\n',
        'en-US':
          '<p>Configure <code>cell-dblclick</code> on the <code>grid</code> tab to listen to the double-click event of a cell</p>\n'
      },
      'codeFiles': ['event/cell-mouseenter-event.vue']
    },
    {
      'demoId': 'event-cell-mouseleave-event',
      'name': { 'zh-CN': '鼠标离开单元格事件', 'en-US': 'Event indicating that the mouse moves away from a cell' },
      'desc': {
        'zh-CN': '<p>在 <code>grid</code> 标签上配置 <code>cell-mouseleave</code> 可以监听到鼠标离开单元格事件</p>\n',
        'en-US':
          '<p>Configure <code>cell-mouseleave</code> on the <code>grid</code> tag to listen to the event that the mouse leaves the cell</p>\n'
      },
      'codeFiles': ['event/cell-mouseleave-event.vue']
    },
    {
      'demoId': 'event-grid-scroll-event',
      'name': { 'zh-CN': '表格滚动事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN': '<p>在 <code>grid</code> 标签上配置 <code>scroll</code> 事件，可以监听表格的滚动</p>\n',
        'en-US':
          '<p>Configure the <code>scroll</code> event on the <code>grid</code> tag to listen to the scrolling of the table</p>\n'
      },
      'codeFiles': ['event/grid-scroll-event.vue']
    },
    {
      'demoId': 'event-grid-events',
      'name': { 'zh-CN': '事件对象', 'en-US': 'Event Object' },
      'desc': {
        'zh-CN': '<p>表格属性 <code>envents</code> 设置表格的事件对象。\n</p>\n',
        'en-US': '<p>Table Properties<code>envents</code>Sets the event object of the table. \n</p>\n'
      },
      'codeFiles': ['event/grid-events.vue']
    },
    {
      'demoId': 'event-current-change-event',
      'name': { 'zh-CN': '行选中事件', 'en-US': 'Row Selection Event' },
      'desc': {
        'zh-CN':
          '<p>只对 在 <code>grid</code> 标签上配置 <code>highlightCurrentRow</code> 有效，当手动选中行时触发的事件</p>\n',
        'en-US':
          '<p>This event is triggered when a row is manually selected and is valid only when <code>highlightCurrentRow</code> is configured on the <code>grid</code> tag.</p>\n'
      },
      'codeFiles': ['event/current-change-event.vue']
    },
    {
      'demoId': 'event-edit-actived-event',
      'name': {
        'zh-CN': '单元格被激活编辑时会触发该事件',
        'en-US': 'This event is triggered when a cell is activated for editing.'
      },
      'desc': {
        'zh-CN':
          '<p>只对 在 <code>grid</code> 标签上配置 <code>edit-actived</code> 有效，单元格被激活编辑时触发的事件</p>\n',
        'en-US':
          '<p>This event is triggered when you configure <code>edit-actived</code> on the <code>grid</code> tag.</p>\n'
      },
      'codeFiles': ['event/edit-actived-event.vue']
    },
    {
      'demoId': 'event-edit-closed-event',
      'name': { 'zh-CN': '单元格编辑完成触发该事件', 'en-US': 'This event is triggered when a cell is edited.' },
      'desc': {
        'zh-CN':
          '<p>只对 在 <code>grid</code> 标签上配置 <code>edit-closed</code> 有效，单元格编辑完成触发该事件</p>\n',
        'en-US':
          '<p>This event is valid only when <code>edit-closed</code> is configured on the <code>grid</code> tag. After a cell is edited, this event is triggered.</p>\n'
      },
      'codeFiles': ['event/edit-closed-event.vue']
    },
    {
      'demoId': 'event-table-data-association',
      'name': { 'zh-CN': '两个表格数据相互关联', 'en-US': 'The data in two tables is associated with each other.' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['event/table-data-association.vue']
    },
    {
      'demoId': 'event-edit-disabled-event',
      'name': {
        'zh-CN': '当单元格激活时如果是禁用状态时会触发该事件',
        'en-US': 'This event is triggered when a cell is activated and the cell is disabled.'
      },
      'desc': {
        'zh-CN':
          '<p>只对 在 <code>grid</code> 标签上配置 <code>edit-disabled-event</code> 有效，同时需要在 <code>edit-config</code> 配置中的 <code>activeMethod</code> 方法控制单元格是否可以编辑（返回 <code>true</code> 可以编辑，反之亦然）。</p>\n',
        'en-US':
          '<p> is valid only when <code>edit-disabled-event</code> is configured on the <code>grid</code> tag. In addition, the <code>activeMethod</code> method in the <code>edit-config</code> configuration needs to be used to control whether the cell can be edited (return <code>true</code> to edit the cell, and vice versa). </p>\n'
      },
      'codeFiles': ['event/edit-disabled-event.vue']
    },
    {
      'demoId': 'event-footer-cell-context-menu-event',
      'name': { 'zh-CN': '右键点击表尾单元格事件', 'en-US': 'Event of right-clicking a cell at the end of the table' },
      'desc': {
        'zh-CN':
          '<p>在 <code>grid</code> 标签上配置 <code>footer-cell-context-menu</code> 右键点击表尾单元格事件,配置 <code>footer-cell-click</code> 可以触发点击表尾单元格事件。</p>\n',
        'en-US':
          '<p>On the <code>grid</code> tab, configure the <code>footer-cell-context-menu</code> event of right-clicking a cell at the end of the table. Configure <code>footer-cell-click</code> to trigger the event of clicking a cell at the end of the table. </p>\n'
      },
      'codeFiles': ['event/footer-cell-context-menu-event.vue']
    },
    {
      'demoId': 'event-header-cell-context-menu-event',
      'name': { 'zh-CN': '右键点击表头事件', 'en-US': 'Event of Right-clicking a Table Header' },
      'desc': {
        'zh-CN':
          '<p>只对 在 <code>grid</code> 标签上配置 <code>header-cell-context-menu</code> 可以监听右键点击表头事件</p>\n',
        'en-US':
          '<p>Only the <code>header-cell-context-menu</code> configured on the <code>grid</code> tag can listen to the right-click event of the table header.</p>\n'
      },
      'codeFiles': ['event/header-cell-context-menu-event.vue']
    },
    {
      'demoId': 'event-page-change-event',
      'name': { 'zh-CN': '分页发生改变事件', 'en-US': 'Paging change event' },
      'desc': {
        'zh-CN': '<p>只对 在 <code>grid</code> 标签上配置 <code>page-change</code> 可以监听分页发生改变事件</p>\n',
        'en-US':
          '<p>You can only configure <code>page-change</code> on the <code>grid</code> tag to listen to page change events.</p>\n'
      },
      'codeFiles': ['event/page-change-event.vue']
    },
    {
      'demoId': 'event-page-before-change-event',
      'name': { 'zh-CN': '分页发生改变前的事件', 'en-US': 'Event before pagination changes' },
      'desc': {
        'zh-CN':
          '<p>通过在 <code>grid</code> 标签上配置 <code>is-before-page-change</code> 选择是否打开页面改变时的前置处理特性。在值为 <code>true</code> 时，翻页操作或者改变页大小操作不会立即生效，留给用户处理业务逻辑，之后通过调用预留的 <code>callback</code> 或者 <code>rollback</code> 使之生效或者失效；通过事件 <code>before-page-change</code> 在进行翻页操作或者改变页大小操作时触发，然后控制是否跳转分页。</p>\n',
        'en-US':
          '<p>You can configure <code>is-before-page-change</code> on the <code>grid</code> tab to determine whether to enable the pre-processing feature when the page changes. When the value is set to <code>true</code>, the page turning operation or page size change operation does not take effect immediately and is left to the user to process the service logic. Then, the reserved <code>callback</code> or <code>rollback</code> is invoked to make it take effect or invalid. The <code>before-page-change</code> event is triggered when the page turning operation or page size change operation is performed, and then whether to jump to the page is controlled. </p>\n'
      },
      'codeFiles': ['event/page-before-change-event.vue']
    },
    {
      'demoId': 'event-radio-change-event',
      'name': { 'zh-CN': '勾选行事件', 'en-US': 'Line Selection Event' },
      'desc': {
        'zh-CN':
          '<p>在 <code>grid</code> 标签上配置 <code>radio-change</code> 可以监听勾选行事件\n只对 type=radio 有效，当手动勾选并且值发生改变时触发的事件</p>\n',
        'en-US':
          '<p>Configure <code>radio-change</code> on the <code>grid</code> tag to listen to the selected row event.\nThis parameter is valid only for type=radio. Event triggered when manually selected and the value changes</p>\n'
      },
      'codeFiles': ['event/radio-change-event.vue']
    },
    {
      'demoId': 'event-resizable-change-event',
      'name': { 'zh-CN': '列宽改变事件', 'en-US': 'Column width change event' },
      'desc': {
        'zh-CN': '<p>在 <code>grid</code> 标签上配置 <code>resizable-change</code> 可以监听列宽改变事件</p>\n',
        'en-US':
          '<p>Configure <code>resizable-change</code> on the <code>grid</code> tag to listen to column width change events</p>\n'
      },
      'codeFiles': ['event/resizable-change-event.vue']
    },
    {
      'demoId': 'event-select-all-event',
      'name': {
        'zh-CN': '手动勾选全选时触发的事件',
        'en-US': 'Event triggered when all options are selected manually'
      },
      'desc': {
        'zh-CN':
          '<p>在 <code>grid</code> 标签上配置 <code>select-all</code> 有效\n只对 type=selection 有效，当手动勾选全选时触发的事件</p>\n',
        'en-US':
          '<p>The configuration of <code>select-all</code> on the <code>grid</code> tag is valid.\nThis parameter is valid only when type=selection is selected. This event is triggered when all is selected manually</p>\n'
      },
      'codeFiles': ['event/select-all-event.vue']
    },
    {
      'demoId': 'event-select-change-event',
      'name': { 'zh-CN': '勾选行事件', 'en-US': 'Line Selection Event' },
      'desc': {
        'zh-CN':
          '<p>在 <code>grid</code> 标签上配置 <code>select-change</code> 可以监听到勾选行事件\n只对 type=selection 有效，当手动勾选并且值发生改变时触发的事件</p>\n',
        'en-US':
          '<p>You can configure <code>select-change</code> on the <code>grid</code> tag to listen to the selected row event.\nThis parameter is valid only for type=selection. Event triggered when manually selected and the value changes</p>\n'
      },
      'codeFiles': ['event/select-change-event.vue']
    },
    {
      'demoId': 'event-toggle-expand-change-event',
      'name': { 'zh-CN': '行展开收起事件', 'en-US': 'Line expansion and collapse event' },
      'desc': {
        'zh-CN': '<p>在 <code>grid</code> 标签上配置 <code>toggle-expand-change</code> 可以监听到行展开收起事件</p>\n',
        'en-US':
          '<p>Configure <code>toggle-expand-change</code> on the <code>grid</code> tag to listen to the row expansion and collapse event</p>\n'
      },
      'codeFiles': ['event/toggle-expand-change-event.vue']
    },
    {
      'demoId': 'event-toggle-tree-change-event',
      'name': { 'zh-CN': '树节点展开收起事件', 'en-US': 'Tree Node Expansion and Collapse Event' },
      'desc': {
        'zh-CN': '<p>在 <code>grid</code> 标签上配置 <code>toggle-tree-change</code> 可以监听树节点展开收起事件</p>\n',
        'en-US':
          '<p>Configure <code>toggle-tree-change</code> on the <code>grid</code> tag to listen to tree node expansion and collapse events</p>\n'
      },
      'codeFiles': ['event/toggle-tree-change-event.vue']
    },
    {
      'demoId': 'event-toolbar-button-click-event',
      'name': { 'zh-CN': '工具栏点击事件', 'en-US': 'Toolbar click event' },
      'desc': {
        'zh-CN': '<p>在 <code>grid</code> 标签上配置 <code>toolbar-button-click</code> 可以监听工具栏点击事件</p>\n',
        'en-US':
          '<p>Configure <code>resizable-change</code> on the <code>grid</code> tab to listen to toolbar click events</p>\n'
      },
      'codeFiles': ['event/toolbar-button-click-event.vue']
    },
    {
      'demoId': 'event-valid-error-event',
      'name': { 'zh-CN': '校验不通过事件', 'en-US': 'Verification failure event' },
      'desc': {
        'zh-CN': '<p>在 <code>grid</code> 标签上配置 <code>valid-error</code> 监听校验不通过事件</p>\n',
        'en-US':
          '<p>Configure <code>valid-error</code> on the <code>grid</code> tag to listen to verification failure events</p>\n'
      },
      'codeFiles': ['event/valid-error-event.vue']
    },
    {
      'demoId': 'tiny-first-menu-get-row-method',
      'name': { 'zh-CN': '获取表格行方法', 'en-US': 'Obtain table row method' },
      'desc': {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">获取行的方法</p>\n<p><code>getCurrentRow</code> 获取当前行\n<code>getRowIndex</code> 获取当前行号\n<code>getRadioRow</code> Radio 单选选中行\n<code>getRowById</code> 通过 rowId 获取当前行\n<code>getRowNode</code> 通过 tr 元素获取行信息</p>\n</div>\n',
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title"> Method for obtaining a row: </p>\n<p><code>getCurrentRow</code> Obtain the current row \n<code>getRowIndex</code> Obtain the current row number \n<code>getRadioRow</code> Radio Select a single row \n<code>getRowById</code> Obtain the current row based on the row ID \n<code>getRowNode</code> Obtain the row information based on the tr element </p>\n</div>\n'
      },
      'codeFiles': ['tiny-first-menu/get-row-method.vue']
    }
  ],
  apis: [{ 'name': 'grid-event', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
