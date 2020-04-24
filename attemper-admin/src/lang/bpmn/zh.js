/**
 * This is a sample file that should be replaced with the actual translation.
 *
 * Checkout https://github.com/bpmn-io/bpmn-js-i18n for a list of available
 * translations and labels to translate.
 */
export default {

  // Labels
  'Activate the global connect tool': '启动全局连接工具',
  'Add Lane above': '添加到通道之上',
  'Divide into two Lanes': '分成两条通道',
  'Divide into three Lanes': '分成三条通道',
  'Add Lane below': '添加到通道之下',
  'Append compensation activity': '追加补偿活动',
  'Change type': '更改类型',
  'Connect using Association': '文本关联',
  'Connect using Sequence/MessageFlow or Association': '消息关联',
  'Connect using DataInputAssociation': '数据关联',
  'Remove': '删除',
  'Activate the hand tool': '激活手势',
  'Activate the lasso tool': '激活框选',
  'Activate the create/remove space tool': '激活新建/删除空间工具',
  'Create StartEvent': '新增开始事件',
  'Create EndEvent': '新增结束事件',
  'Create Task': '新增任务',
  'Create ServiceTask': '新增服务任务',
  'Create ScriptTask': '新增脚本任务',
  'Create Gateway': '新增网关',
  'Create ParallelGateway': '新增并发网关',
  'Create CallActivity': '新增调用子任务',
  'Create expanded SubProcess': '新建可折叠子任务',
  'Create Intermediate/Boundary Event': '新建中间/边界事件',
  'Create Pool/Participant': '新建池/参与者',
  'Create Group': '新建组',
  'Append EndEvent': '追加结束事件',
  'Append Task': '追加任务',
  'Append Gateway': '追加网关',
  'Append Intermediate/Boundary Event': '追加中间/边界事件',
  'Append ServiceTask': '追加服务任务',
  'Append ScriptTask': '追加脚本任务',
  'Append ParallelGateway': '追加并发网关',
  'Append CallActivity': '追加调用子任务',
  'Parallel Multi Instance': '并发多实例',
  'Sequential Multi Instance': '串行多实例',
  'Loop': '循环',
  'Ad-hoc': 'Ad-hoc子任务',
  'Task': '任务',
  'Send Task': '发送任务',
  'Receive Task': '接受任务',
  'User Task': '用户任务',
  'Manual Task': '手动任务',
  'Business Rule Task': '规则任务',
  'Service Task': '服务任务',
  'Script Task': '脚本任务',
  'Call Activity': '调用子任务',
  'Sub Process (collapsed)': '可折叠子任务',
  'Sub Process (expanded)': '可展开子任务',
  'Start Event': '开始事件',
  'Intermediate Throw Event': '中间抛出事件',
  'End Event': '结束事件',
  'Message Start Event': '消息启动事件',
  'Timer Start Event': '定时启动事件',
  'Conditional Start Event': '条件启动事件',
  'Signal Start Event': '信号启动事件',
  'Error Start Event': '错误启动事件',
  'Escalation Start Event': '升级启动事件',
  'Compensation Start Event': '补偿启动事件',
  'Message Start Event (non-interrupting)': '消息启动事件 (非中断)',
  'Timer Start Event (non-interrupting)': '定时启动事件 (非中断)',
  'Conditional Start Event (non-interrupting)': '条件启动事件 (非中断)',
  'Signal Start Event (non-interrupting)': '信号启动事件 (非中断)',
  'Escalation Start Event (non-interrupting)': '升级启动事件 (非中断)',
  'Message Intermediate Catch Event': '中间消息捕获事件',
  'Message Intermediate Throw Event': '中间消息抛出事件',
  'Timer Intermediate Catch Event': '中间定时捕获事件',
  'Escalation Intermediate Throw Event': '中间升级抛出事件',
  'Conditional Intermediate Catch Event': '中间条件捕获事件',
  'Link Intermediate Catch Event': '中间链接捕获事件',
  'Link Intermediate Throw Event': '中间链接抛出事件',
  'Compensation Intermediate Throw Event': '中间补偿抛出事件',
  'Signal Intermediate Catch Event': '中间信号捕获事件',
  'Signal Intermediate Throw Event': '中间信号抛出事件',
  'Message End Event': '结束消息事件',
  'Escalation End Event': '结束升级事件',
  'Error End Event': '结束错误事件',
  'Cancel End Event': '结束取消事件',
  'Compensation End Event': '结束补偿事件',
  'Signal End Event': '结束信号事件',
  'Terminate End Event': '终止边界事件',
  'Message Boundary Event': '消息边界事件',
  'Message Boundary Event (non-interrupting)': '消息边界事件 (非中断)',
  'Timer Boundary Event': '定时边界事件',
  'Timer Boundary Event (non-interrupting)': '定时边界事件 (非中断)',
  'Escalation Boundary Event': '升级边界事件',
  'Escalation Boundary Event (non-interrupting)': '升级边界事件 (非中断)',
  'Conditional Boundary Event': '条件边界事件',
  'Conditional Boundary Event (non-interrupting)': '条件边界事件 (非中断)',
  'Error Boundary Event': '错误边界事件',
  'Cancel Boundary Event': '取消边界事件',
  'Signal Boundary Event': '信号边界事件',
  'Signal Boundary Event (non-interrupting)': '信号边界事件 (非中断)',
  'Compensation Boundary Event': '补偿边界事件',
  'Exclusive Gateway': '排他网关',
  'Parallel Gateway': '并发网关',
  'Inclusive Gateway': '排他或并发网关',
  'Complex Gateway': '复合网关',
  'Event based Gateway': '事件网关',
  'Transaction': '交易',
  'Sub Process': '子任务',
  'Event Sub Process': '事件子任务',
  'Collapsed Pool': '折叠池',
  'Expanded Pool': '展开池',
  // Errors
  'no parent for {element} in {parent}': '在 {element} 中没有父元素 {parent}',
  'no shape type specified': '未指定形状类型',
  'flow elements must be children of pools/participants': '元素必须是池/参与者的子级',
  'out of bounds release': '越界释放',
  'more than {count} child lanes': '超过 {count} 条通道',
  'element required': '需要元素',
  'diagram not part of bpmn:Definitions': '图表不是 bpmn:Definitions 的一部分',
  'no diagram to display': '没有要显示的图表',
  'no process or collaboration to display': '没有可显示的任务或协作',
  'element {element} referenced by {referenced}#{property} not yet drawn': '元素 {element} 的引用 {referenced}#{property} 尚未绘制',
  'already rendered {element}': '{element} 已呈现',
  'failed to import {element}': '{element} 导入失败',
  // 区块
  'General': '基础',
  'Listeners': '监听器',
  'Extensions': '扩展',
  'Input/Output': '输入/输出',
  // 元素
  'Id': '编号',
  'Name': '名称',
  'Value': '值',
  'Initiator': '发起人',
  'Version Tag': '版本标签',
  'Executable': '可执行的',
  'External Task Configuration': '外部任务配置',
  'Task Priority': '任务优先级',
  'Job Configuration': '作业配置',
  'Job Priority': '作业优先级',
  'Candidate Starter Configuration': '候选启动配置',
  'Candidate Starter Groups': '候选启动组',
  'Candidate Starter Users': '候选启动用户',
  'History Configuration': '历史配置',
  'History Time To Live': '历史存活时间',
  'Tasklist Configuration': '任务列表配置',
  'Startable': '可启动的',
  'Documentation': '文档说明',
  'Element Documentation': '当前元素文档说明',
  'Execution Listener': '执行监听器',
  'Properties': '属性',
  'Add Property': '新增属性',
  'Parameters': '参数',
  'Input Parameters': '输入参数',
  'Output Parameters': '输出参数',
  'Element Template': '模板',
  'Details': '细节',
  'Implementation': '实现',
  'Message': '消息',
  'Message Name': '消息名称',
  'Retry Time Cycle': '重试轮询时间',
  'Exclusive': '串行执行',
  'Event Type': '事件类型',
  'Listener Type': '监听类型',
  'Field Injection': '属性注入',
  'Fields': '属性',
  'Task Listener': '任务监听器',
  'Input Parameter': '输入参数',
  'Output Parameter': '输出参数',
  'Type': '类型',
  'Forms': '表单',
  'Form Key': '表单主键',
  'Form Fields': '表单元素',
  'Default Value': '默认值',
  'Validation': '验证',
  'Add Constraint': '添加限制属性',
  'Config': '配置',
  'CallActivity Type': '调用其他任务的类型',
  'Called Element': '子任务名称',
  'Business Key Expression': '业务主键表达式',
  'Delegate Variable Mapping': '代理变量映射',
  'Delegate Expression': '代理表达式',
  'Business Key': '业务主键',
  'Decision Ref': 'DMN主键',
  'Binding': '绑定',
  'Tenant Id': '租户编号',
  'Result Variable': '结果变量',
  'Topic': '主题',
  'Connector Id': '连接器编号',
  'Case Ref': 'CMMN主键',
  'Asynchronous Continuations': '是否加同步锁',
  'Asynchronous Before': '执行前不加锁',
  'Asynchronous After': '执行后不加锁',
  'Field Injections': '属性注入',
  'Field': '属性',
  'Connector': '连接器',
  'Custom Fields': '个性化属性',
  'Java Class': 'Java类',
  'Script Format': '脚本引擎',
  'Script': '脚本',
  'Condition Type': '条件类型',
  'Expression': '表达式',
  'Variables': '变量',
  'In Mapping': '输入参数映射',
  'Out Mapping': '输出参数映射',
  'Source': '来源',
  'Source Expression': '源表达式',
  'Target': '目标',
  'Text': '字符串',
  // 提示
  'Must provide a value': '不能为空',
  'This maps to the process definition key.': '映射为任务名称',
  /* 'Element must have an unique id.': '元素必须有唯一主键',
  'Specify more than one group as a comma separated list.': '指定多个组时以,隔开',
  'Specify more than one user as a comma separated list.': '指定多个用户时以,隔开'*/
  'Http(Sync)': '同步Http',
  'Http(Async)': '异步Http',
  'Ftp2Local': '下载Ftp文件到本地磁盘',
  'Local2Ftp': '上传本地磁盘文件到Ftp服务器',
  'Custom Mail': '发送邮件通知',
  'Custom DingTalk': '发送钉钉通知',
  'Custom WxWork': '发送企业微信通知',
  'Job Caller': '调用其他任务',
  'Executor Component': '执行器组件',
  'Sub URL': '自定义子路径',
  'Request Method': '请求类型',
  'Bean Name': 'Bean名称',
  'Method Name': '方法名称',
  'Timeout': '超时时间',
  'From': '发送者',
  'To': '接收人',
  'Subject': '主题',
  'Content': '内容',
  'Local Directory': '本地根目录',
  'Local Sub Directory': '本地子目录',
  'Remote Path': '文件目录',
  'File Name': '文件名',
  'Suffix': '文件后缀名',
  'Ftp Prefix': 'Ftp参数前缀',
  'Result Type': '结果类型',
  'Language': '编程语言',
  'Charset': '字符集'
}
