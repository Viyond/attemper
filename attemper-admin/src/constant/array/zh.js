export const statuses = [
  {
    value: 0,
    label: '正常'
  },
  {
    value: 1,
    label: '冻结'
  }
]

export const jobStatuses = [
  {
    label: '启用',
    value: 0
  },
  {
    label: '禁用',
    value: 1
  },
  {
    label: '删除',
    value: 2
  }
]

export const milliSecondTimeUnits = [
  {
    label: '毫秒',
    value: 'MILLISECOND'
  }
]

export const inDayTimeUnits = [
  {
    label: '秒',
    value: 'SECOND'
  },
  {
    label: '分钟',
    value: 'MINUTE'
  },
  {
    label: '小时',
    value: 'HOUR'
  }
]

export const dayTimeUnit = [
  {
    label: '天',
    value: 'DAY'
  }
]

export const overDayTimeUnits = [
  {
    label: '周',
    value: 'WEEK'
  },
  {
    label: '月',
    value: 'MONTH'
  },
  {
    label: '季度',
    value: 'SEASON'
  },
  {
    label: '半年',
    value: 'HALF_YEAR'
  },
  {
    label: '年',
    value: 'YEAR'
  }
]

export const daysOfWeek = [
  {
    label: '星期天',
    value: '1'
  },
  {
    label: '星期一',
    value: '2'
  },
  {
    label: '星期二',
    value: '3'
  },
  {
    label: '星期三',
    value: '4'
  },
  {
    label: '星期四',
    value: '5'
  },
  {
    label: '星期五',
    value: '6'
  },
  {
    label: '星期六',
    value: '7'
  }
]

export const uriTypes = [
  {
    label: '服务发现',
    value: 0
  },
  {
    label: 'IP地址和端口',
    value: 1
  },
  {
    label: '域名',
    value: 2
  }
]

export const runningJobInstanceStatus = [
  {
    label: '执行中',
    value: 0
  }
]

export const successJobInstanceStatus = [
  {
    label: '成功',
    value: 1
  }
]

export const failureJobInstanceStatus = [
  {
    label: '失败',
    value: 2
  }
]

export const terminatedJobInstanceStatus = [
  {
    label: '终止',
    value: 3
  }
]

export const pausedJobInstanceStatus = [
  {
    label: '暂停',
    value: 4
  }
]

export const todoJobInstanceStatuses = [
  ...runningJobInstanceStatus,
  ...pausedJobInstanceStatus
]

export const doneJobInstanceStatuses = [
  ...successJobInstanceStatus,
  ...failureJobInstanceStatus,
  ...terminatedJobInstanceStatus
]

export const jobInstanceStatuses = [
  ...runningJobInstanceStatus,
  ...successJobInstanceStatus,
  ...failureJobInstanceStatus,
  ...terminatedJobInstanceStatus,
  ...pausedJobInstanceStatus
]

export const requestMethods = [
  {
    label: 'POST',
    value: 'POST'
  },
  {
    label: 'GET',
    value: 'GET'
  },
  {
    label: 'PUT',
    value: 'PUT'
  },
  {
    label: 'DELETE',
    value: 'DELETE'
  }
]

export const transferTitles = [
  '移出',
  '移入'
]

export const allocateTitles = [
  '待分配',
  '已分配'
]

export const calendarTypes = [
  {
    label: '日期维度',
    value: 0
  },
  {
    label: '时间维度',
    value: 1
  }
]
