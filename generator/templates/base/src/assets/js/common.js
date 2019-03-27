/* eslint-disable */
/************************************************************************************
 *
 *                                  日期工具类
 *
 ************************************************************************************/
/**
 * 格式化日期
 * param format 格式
 * returns 相距天数 绝对值
 */
Date.prototype.format = function (format) {
  let pattern = format
  let date = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S+": this.getMilliseconds()
  };
  if (/(y+)/i.test(pattern)) {
    pattern = pattern.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in date) {
    if (new RegExp("(" + k + ")").test(pattern)) {
      pattern = pattern.replace(RegExp.$1, RegExp.$1.length === 1
        ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
    }
  }
  return pattern
}

/**
 *  根据时区转换时间
 *  param zone 时区 东区为正数 西区为负数
 * */
Date.prototype.toUTC = function (zone) {
  let intervalSeconds = this.getTimezoneOffset() * 60 * 1000
  let standardDTime = this.getTime() + intervalSeconds
  let targetTime = standardDTime + zone * 3600 * 1000
  return new Date(targetTime)
}

/**
 * 返回当前日期 周几
 * 周几
 */
Date.prototype.weekStr = function (type) {
  let startLetter = type === 2 ? '星期' : '周'
  let week = ''
  switch (this.getDay()) {
    case 0:
      week = type === 2 ? '天': '日'
      break
    case 1:
      week = '一'
      break
    case 2:
      week = '二'
      break
    case 3:
      week = '三'
      break
    case 4:
      week = '四'
      break
    case 5:
      week = '五'
      break
    case 6:
      week = '六'
      break
  }
  return startLetter + week
}

/**
 * 获取一周的第几天,星期一为第一天
 */
Date.prototype.dayInWeek = function () {
  return parseInt('7123456'.charAt(this.getDay()))
}

/**
 * 获取一周的第几天,星期日为第一天
 */
Date.prototype.dayInWeekEn = function () {
  return parseInt('1234567'.charAt(this.getDay()))
}

/**
 * 获取一月的第几天
 */
Date.prototype.dayInMonth = function () {
  return this.getDate()
}

/**
 * 获取是这个月的第几周
 */
Date.prototype.weekInMonth = function () {
  let week = this.getDay()
  let day = this.getDate()

  return Math.ceil((day + 6 - week) / 7)

}

/**
 * 获取一年的第几天
 */
Date.prototype.dayInYear = function () {
  let arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let month = this.getMonth()
  let dayCount = 0
  for (let index = 0; index < month; index ++) {
    dayCount += arr[index]
  }
  let day = this.getDate()
  dayCount += day
  let year = this.getFullYear()
  if ((year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) && month > 2) {
    dayCount += 1
  }
  return dayCount
}

/**
 * 获取月的最后一天
 */
Date.prototype.lastDayInMonth = function () {
  return new Date(this.getFullYear(), this.getMonth() + 1, 0)
}

/**
 * 获取日期是否在另一个日期之前
 * param otherDate: 对比日期
 * returns 为空表示日期格式错误，true：之前 false：之后
 */
Date.prototype.isBeforeDate = function (otherDate) {
  if (otherDate instanceof Date) {
    return this.getTime() < otherDate.getTime()
  }
  throw new Error('error date format!')
}

/**
 * 判断某个日期是否在某个日期范围
 * param startDate: 开始日期
 * endDate startDate: 结束日期
 * returns true：之内 false：之外
 */
Date.prototype.isBetweenDate = function (startDate, endDate) {
  if (startDate instanceof Date && endDate instanceof Date) {
    return this.getTime() > startDate.getTime() && this.getTime() < endDate.getTime()
  }
  throw new Error('error date format!')
}

/**
 * 相距的天数
 * param otherDate 另一个日期
 * returns 相距天数 绝对值
 */
Date.prototype.daysBetween = function (otherDate) {
  if (otherDate instanceof Date) {
    if (this.getTime() === otherDate.getTime()) {
      return 0
    }
    return Math.ceil(Math.abs((this.getTime() - otherDate.getTime())/ 86400000))
  }
  throw new Error('error date format!')
}

/**
 * 获得基准日期的前后几天的日期
 * param offset: 偏移量，之后用正数，之前用负数
 * returns {string yyyy-MM-dd hh:mm:ss}
 */
Date.prototype.offset = function (offset) {
  let regPos = /^\d+$/ // 正整数
  let regNeg = /^\-[1-9]*$/ // 负整数
  if(regPos.test(offset) || regNeg.test(offset)){
    return new Date(this.getTime() + offset * 86400000)
  }
  throw new Error('error offset format!')
}

/**
 * 获取是否是闰年
 */
Date.prototype.isLeapYear = function () {
  let year = this.getFullYear()
  return  (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
}

/**
 * 将long型转化为String类型
 * param format:格式
 * returns 日期字符串
 */
function getDateStringFromMillisecond(milliseconds, format) {
  let regNeg = /^\d+$/
  if (regNeg.test(milliseconds)) {
    let date = new Date(milliseconds)
    return date.format(format)
  }
  throw new Error( 'error milliseconds format!')
}

/**
 * 将时间字符串转换为毫秒数
 * param dateString:时间字符串
 * returns 毫秒数
 */
function getMillisFrom1970WithDateString(dateString) {
  if (typeof dateString === 'string') {
    let date = new Date(Date.parse(dateString.replace(/-/g,"/")))
    return date.getTime()
  }
  throw new Error('error dateString format!')
}

/**
 * 将时间字符串判断是否是润年
 * param dateStr:时间字符串
 * returns 判断结果
 */
function isLeapYear(dateStr) {
  if (typeof dateStr === 'string' && dateStr.length >= 4) {
    let year = parseInt(dateStr.substring(0,4))
    return  (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
  }
  throw new Error('error dateStr format!')
}


/************************************************************************************
 *
 *                                  证件工具类
 *
 ************************************************************************************/
/**
 * 根据身份证号判断性别
 * param idNumber
 * returns 性别
 */
function getGenderByIDNumber (idNumber) {
  if (typeof idNumber === 'string') {
    let sexCode = 1
    if (idNumber.length === 15) {
      sexCode = parseInt(idNumber.substr(14, 15))
    } else if (idNumber.length === 18) {
      // 18位身份证取第17位数
      sexCode = parseInt(idNumber.substr(16, 17))
    }
    if (sexCode % 2 === 1) {
      return 'M'
    } else {
      return 'F'
    }
  }
  throw new Error('error idNumber format!')
}

/**
 * 检测是否是微信web浏览器
 */
function isWeiXinWeb () {
  let agent = window.navigator.userAgent.toLowerCase()
  return agent.search(/micromessenger/i) !== -1
}

/**
 * 根据身份证获取生日
 *  param idNumber
 *  returns {*}
 */
function getBirthByIDNumber (idNumber) {
  if (typeof idNumber === 'string' && (idNumber.length === 18 || idNumber.length === 15)) {
    let bir = idNumber.substr(6, 4)
    bir += '-'
    bir += idNumber.substr(10, 2)
    bir += '-'
    bir += idNumber.substr(12, 2)
    return bir
  }
  throw new Error('error idNumber format!')
}

/**
 * 加密身份证号
 * param idNumber
 * returns {string}
 */
function encryptIDNumber (idNumber) {
  let result = ''
  if (typeof idNumber === 'string' && (idNumber.length === 18 || idNumber.length === 15)) {
    let last = idNumber.slice(idNumber.length - 4)
    let arr = []
    for (let m = 0; m < idNumber.length - 10; m++) {
      arr.push('*')
    }
    let mid = arr.join('')
    let first = idNumber.slice(0, 6)
    result = first + mid + last
  }
  return result
}

/**
 * 加密护照
 * param 护照号码
 * returns {string}
 */
function encryptPassport (passport) {
  let result = ''
  if (typeof passport === 'string' && passport.length > 4) {
    let lastString = passport.slice(passport.length - 2)
    let array = []
    for (let j = 0; j < passport.length - 4; j++) {
      array.push('*')
    }
    let midString = array.join('')
    let firstString = passport.slice(0, 2)
    result = firstString + midString + lastString
  } else if (passport) {
    result = passport
  }
  return result
}

/************************************************************************************
 *
 *                                  对象工具类
 *
 ************************************************************************************/
/**
 * 是否是空对象
 * param 传入对象
 * returns {boolean}
 */
function isEmptyObject (value) {
  for (let property in value) {
    if (value.hasOwnProperty(property)) {
      return false
    }
  }
  return true
}
/**
 * 深拷贝
 * param 传入对
 * param cache
 * returns {*}
 */
function deepCopy (obj, cache = []) {
  if (!obj || typeof obj !== 'object') {
    return obj
  }
  const hit = cache.filter(c => c.original === obj)[0]
  if (hit) {
    return hit.copy
  }
  const copy = Array.isArray(obj) ? [] : {}
  cache.push({
    original: obj,
    copy
  })
  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}

/************************************************************************************
 *
 *                                  正则工具类
 *
 ************************************************************************************/

// 是否是纯数字
function isPureNumber (val) {
  let pattern = /^[0-9]*$/
  return pattern.test(val)
}


// 是否是纯中文
function isPureChinese (val) {
  let pattern = /^[\u4e00-\u9fa5]{1,}$/
  return pattern.test(val)
}

// 检查身份证
let checkIdentityCode = function (code) {
  let city = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外 '
  }
  let pass = true
  // 18位身份证正则
  let reg1 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  // 15位身份证正则
  let reg2 = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/
  if (!code || !reg1.test(code) || reg2.test(code)) {
    // if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X|x)$/.test(code)) {
    pass = false
  } else if (!city[code.substr(0, 2)]) {
    pass = false
  } else {
    // 18位身份证需要验证最后一位校验位
    if (parseInt(code.length) === 18) {
      code = code.split('')
      // ∑(ai×Wi)(mod 11)
      // 加权因子
      let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      // 校验位
      let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
      let sum = 0
      let ai = 0
      let wi = 0
      for (let i = 0; i < 17; i++) {
        ai = code[i]
        wi = factor[i]
        sum += ai * wi
      }
      if (parity[sum % 11] !== code[17].toUpperCase()) {
        pass = false
      }
    } else {
      let ereg
      if ((parseInt(code.substr(6, 2)) + 1900) % 4 === 0 || ((parseInt(code.substr(6, 2)) + 1900) % 100 === 0 && (parseInt(code.substr(6, 2)) + 1900) % 4 === 0)) {
        // 测试出生日期的合法性
        ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/
      } else {
        // 测试出生日期的合法性
        ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/
      }
      return ereg.test(code)
    }
  }
  return pass
}

/**
 * 是否为纯英文
 * param value
 * returns {boolean}
 */
function isPureEng (value) {
  if (typeof value === 'string') {
    let regexEN = new RegExp('^[a-zA-Z]+$')
    return regexEN.test(value)
  }
  return false
}

/**
 * 校验手机号格式
 * param number
 * returns {boolean}
 */
function isPhoneNo (number) {
  if (typeof number === 'string') {
    let regex = new RegExp('^1[0-9]{10}$')
    return regex.test(number)
  }
  return false
}

/**
 * 校验邮箱格式
 * param email
 * returns {boolean}
 */
function isEmail (email) {
  if (typeof email === 'string') {
    let regex = /^[A-Za-zd0-9-_.]+ ([A-Za-zd0-9_-]+[.])+[A-Za-zd0-9]{2,20}$/
    return regex.test(email)
  }
  return false
}

/**
 * 校验护照格式
 * param passport
 * returns {boolean}
 */
function isPassport (passport) {
  if (typeof passport === 'string') {
    let regex = new RegExp('^[A-Za-z0-9]{1,50}$')
    return regex.test(passport)
  }
  return false
}

/**
 * 密码强度校验
 * returns {boolean}
 */
function checkPassword (val) {
  let regex = new RegExp('(?!.*[\u4E00-\u9FA5\\s])(?!^[a-zA-Z]+$)(?!^[\\d]+$)(?!^[^a-zA-Z\\d]+$)^.{6,20}$')
  return regex.test(val)
}

/************************************************************************************
 *
 *                                  String工具类
 *
 ************************************************************************************/
/**
 * 是否是空字符串
 * param 传入字符串
 * returns {boolean}
 */
function isEmptyString (value) {
  return typeof value === 'string' && value.length <= 0 && value !== 'null' && value.toString() !== 'NaN'
}

/**
 * 加密字符串
 * start: 开始位置 end：结束位置
 */
String.prototype.encrypt = function (start, end) {
  if (this.length < end) {
    throw new Error ('String length error')
  }
  let str = this.substring(start, end)
  let code = str.replace(/\w/g, '*')
  let first = this.substring(0, start)
  let last =  this.substring(end, this.length)
  return first + code + last
}

/**
 * null undefined NaN 转换为空字符串 其他类型调用toString()方法
 * value 传入字符串
 * returns {boolean}
 */
function convertToString (value) {
  if (value === null || value === undefined) {
    return ''
  }
  return value.toString() === 'NaN' ? '' : value.toString()
}

// 首字母大写
String.prototype.firstLetterUpperCase = function () {
  if (isEmptyString(this)) {
    throw new Error('empty value！')
  }
  let lower = this.toLowerCase()
  return lower.substr(0, 1).toUpperCase() + lower.substr(1)
}


/**
 * 是否是 JavaScript 原生JSON对象
 * value 对象
 * returns {boolean}
 */
function isNativeJSON (value) {
  return window.JSON && Object.prototype.toString.call(value) === '[object JSON]'
}

/************************************************************************************
 *
 *                                  数组工具类
 *
 ************************************************************************************/

// 是否为空数组
function isEmptyArray (value) {
  if (Array.isArray) {
    return Array.isArray(value) && value.length === 0
  }
  return Object.prototype.toString.call(value) === '[object Array]' && value.length === 0
}

// 是否为非空数组
function isNotEmptyArray (value) {
  if (Array.isArray) {
    return Array.isArray(value) && value.length > 0
  }
  return Object.prototype.toString.call(value) === '[object Array]' && value.length > 0
}

// 数组去重 原地修改数组
Array.prototype.unique =  function (isEqual) {
  let count = this.length
  if (count === 0) {
    return
  }
  if (typeof isEqual === 'function') {
    if (isEqual.length !== 2) {
      throw new Error('Comparison function must have two arguments!')
    }
    let temp = []
    for (let i = count - 1; i >= 0; i--) {
      let value = this[i]
      let isContain = temp.some(function (item) {
        return isEqual(item, value)
      })
      if (isContain) {
        this.splice(i, 1)
        continue
      }
      temp.push(value)
    }
  } else {
    let obj = {}
    for (let i = count - 1; i >= 0; i--) {
      let value = this[i]
      if (!obj[value]) {
        obj[value] = value
        continue
      }
      this.splice(i, 1)
    }
  }
}

// 数组去重 不修改原数组
Array.prototype.uniqued = function (isEqual) {
  let count = this.length
  if (count === 0) {
    return
  }
  if (typeof isEqual === 'function') {
    if (isEqual.length !== 2) {
      throw new Error('Comparison function must have two arguments!')
    }
    let result = []
    for (let i = count - 1; i >= 0; i--) {
      let value = this[i]
      let isContain = result.some(function (item) {
        return isEqual(item, value)
      })
      if (isContain) {
        continue
      }
      result.unshift(value)
    }
    return result
  }
  let obj = {}
  let result = []
  for (let i = 0; i < count; i++) {
    let value = this[i]
    if (!obj[value]) {
      result.push(value)
      obj[value] = value
    }
  }
  return result
}

// 并集
Array.prototype.formUnion = function (otherArray) {
  if (!Array.isArray(otherArray)) {
    throw new Error('union argument must be an Array type!')
  }
  return Array.from(new Set(this.concat(otherArray)))
}

// 交集
Array.prototype.intersection = function (otherArray) {
  if (!Array.isArray(otherArray)) {
    throw new Error('intersection argument must be an Array type!')
  }
  let set = new Set(otherArray)
  return this.filter((item) => set.has(item))
}

// 补集
Array.prototype.subtracting = function (otherArray) {
  if (!Array.isArray(otherArray)) {
    throw new Error('subtracting argument must be an Array type!')
  }
  let set = new Set(otherArray)
  return this.filter((item) => !set.has(item))
}

export default {
  isEmail,
  deepCopy,
  isPureEng,
  isPhoneNo,
  isPassport,
  isLeapYear,
  isWeiXinWeb,
  isPureNumber,
  isPureChinese,
  isEmptyObject,
  isEmptyString,
  isNativeJSON,
  isEmptyArray,
  isNotEmptyArray,
  checkPassword,
  convertToString,
  encryptIDNumber,
  encryptPassport,
  checkIdentityCode,
  getBirthByIDNumber,
  getGenderByIDNumber,
  getDateStringFromMillisecond,
  getMillisFrom1970WithDateString
}
