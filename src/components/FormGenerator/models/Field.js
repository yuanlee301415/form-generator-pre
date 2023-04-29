import FieldConfig from "./FieldConfig";

/**
 * 表单项 Model
 */
export default class Field {
    /**
     * 组件配置
     * @type FieldConfig
     */
    __config__

    /**
     * 组件插槽
     * @type json
     */
    __slot__

    /**
     * 字段名(`name`)
     * @type string
     */
    __vModel__

    /**
     * 占位提示
     * @type string
     */
    placeholder

    /**
     * 组件样式
     * @type {{width: string} & json}
     */
    style

    /**
     * 是否只读
     * @type boolean
     */
    readonly

    /**
     * 是否禁用
     * @type boolean
     */
    disabled

    /**
     * 栅格间隔(布局容器)
     * @type number
     */
    gutter

    /**
     * 组件自身的 `type` 属性
     * @type string
     */
    type

    /**
     * 水平排列
     * @type string
     */
    justify

    /**
     * 垂直排列
     * @type string
     */
    align

    /**
     * 最小值 / 复选框组 - 至少应选
     * @type number
     */
    min

    /**
     * 最大值 / 复选框组 - 最多可选
     * @type number
     */
    max

    /**
     * 级联选择 - 选项分隔符
     * @type string
     */
    separator

    /**
     * 自适应内容高度
     * @type {{ minRows: number, maxRows: number }}
     */
    autosize

    /**
     * 组件高度
     * @type number
     */
    height

    /**
     * 步长
     * @type number
     */
    step

    /**
     * 精度
     * @type number
     */
    precision

    /**
     * 最多输入
     * @type string
     */
    maxlength

    /**
     * 组件自身的 `props`
     * @type json
     */
    props

    /**
     * 组件自身的 `options`
     * @type json[]
     */
    options

    /**
     * 范围选择
     * @type boolean
     */
    range

    /**
     * 组件尺寸
     * @type {'medium' | 'small' | 'mini'}
     */
    size

    /**
     * 是否多选
     * @type boolean
     */
    multiple

    /**
     * 能否清空
     * @type boolean
     */
    clearable

    /**
     * 能否搜索
     * @type boolean
     */
    filterable

    /**
     * 时间/日期 - 显示格式化
     * @type string
     */
    format

    /**
     * 文件上传 - 文件类型
     * @type string
     */
    accept

    /**
     * 文件上传 - 上传地址
     * @type string
     */
    action

    /**
     * 文件上传 - 文件 `name`
     * @type string
     */
    name

    /**
     * 品牌烙印
     * @type boolean | undefined
     */
    branding

    /**
     * 前图标
     * @type string
     */
    ['prefix-icon']

    /**
     * 后图标
     * @type string
     */
    ['suffix-icon']

    /**
     * 输入统计
     * @type boolean
     */
    ['show-word-limit']

    /**
     * Todo
     * @type boolean
     */
    ['show-password']

    /**
     * 按钮位置
     * @type {'' | 'right'}
     */
    ['controls-position']

    /**
     * 严格步数
     * @type boolean
     */
    ['step-strictly']

    /**
     * 显示全路径
     * @type boolean
     */
    ['show-all-levels']

    /**
     * 时间/日期 - 选择器特有的选项
     * @type object
     */
    ['picker-options']

    /**
     * 时间/日期 - 值格式化
     * @type string
     */
    ['value-format']

    /**
     * 时间/日期 - 开始占位符
     * @type string
     */
    ['start-placeholder']

    /**
     * 时间/日期 - 结束占位符
     * @type string
     */
    ['end-placeholder']

    /**
     * 日期/时间 - 范围占位符
     * @type string
     */
    ['range-separator']

    /**
     * 日期/时间 - 范围选择
     * @type boolean
     */
    ['is-range']

    /**
     * 文件上传 - 是否自动上传
     * @type boolean
     */
    ['auto-upload']

    /**
     * 文件上传 - 列表类型
     * @type string
     */
    ['list-type']

    constructor(_) {
        const {
            __config__, __slot__, __vModel__, placeholder, style, readonly, disabled, props,
            gutter, type, justify, align, min, max, separator, autosize, height, step, precision, maxlength,
            options, range, size, multiple, clearable, filterable, format, accept, action, name, branding,
            ['prefix-icon']: prefixIcon,
            ['suffix-icon']: suffixIcon,
            ['show-word-limit']: showWordLimit,
            ['show-all-levels']: showAllLevels,
            ['picker-options']: pickerOptions,
            ['value-format']: valueFormat,
            ['start-placeholder']: startPlaceholder,
            ['end-placeholder']: endPlaceholder,
            ['range-separator']: rangeSeparator,
            ['is-range']: isRange,
            ['auto-upload']: autoUpload,
            ['list-type']: listType,
            ['show-password']: showPassword,
            ['controls-position']: controlsPosition,
            ['step-strictly']: stepStrictly,
            ...rest
        } = {..._}
        this.__config__ = new FieldConfig(__config__)
        this.__slot__ = __slot__
        this.__vModel__ = __vModel__
        this.placeholder = placeholder
        this.style = style
        this.readonly = !!readonly
        this.disabled = !!disabled
        this.props = props
        this.gutter = gutter
        this.type = type
        this.justify = justify
        this.align = align
        this.min = min
        this.max = max
        this.separator = separator
        this.autosize = autosize
        this.height = height
        this.step = step
        this.precision = precision
        this.maxlength = maxlength
        this.options = options
        this.range = !!range
        this.size = size
        this.multiple = !!multiple
        this.clearable = !!clearable
        this.filterable = !!filterable
        this.format = format
        this.accept = accept
        this.action = action
        this.name = name
        this.branding = void branding
        this['prefix-icon'] = prefixIcon
        this['suffix-icon'] = suffixIcon
        this['show-word-limit'] = showWordLimit
        this['show-all-levels'] = showAllLevels
        this['picker-options'] = pickerOptions
        this['value-format'] = valueFormat
        this['start-placeholder'] = startPlaceholder
        this['end-placeholder'] = endPlaceholder
        this['range-separator'] = rangeSeparator
        this['is-range'] = isRange
        this['auto-upload'] = autoUpload
        this['list-type'] = listType
        this['show-password'] = showPassword
        this['controls-position'] = controlsPosition
        this['step-strictly'] = stepStrictly

        if (Object.keys(rest).length) {
            console.warn('Field>rest:')
            console.log('arg:', _)
            console.table(rest)
        }
    }
}
