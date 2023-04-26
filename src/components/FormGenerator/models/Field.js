/**
 * 表单项 - 正则校验 Model
 */
class FieldValidate {
    /**
     * 正则表达式
     * @type string
     */
    pattern

    /**
     * 校验不通过时的提示信息
     * @type string
     */
    message

    constructor(_) {
        const { pattern, message } = { ..._ }
        this.pattern = pattern
        this.message = message
    }
}

/**
 * 表单项 - 配置 Model
 */
export class FieldConfig {
    /**
     * 字段标签
     * @type string
     */
    label

    /**
     * 字段标签宽度
     * @type number
     */
    labelWidth

    /**
     * @type boolean
     */
    showLabel

    /**
     * @type boolean
     */
    changeTag

    /**
     * @type string
     */
    tag

    /**
     * @type string
     */
    tagIcon

    /**
     * @type boolean
     */
    required

    /**
     * @type string
     */
    layout

    /**
     * @type number
     */
    span

    /**
     * 校验
     * @type FieldValidate[]
     */
    regList

    /**
     * @type *
     */
    defaultValue

    /**
     * @type number
     */
    formId

    /**
     * @type number
     */
    renderKey

    constructor(_) {
        const {
            label, labelWidth, showLabel, changeTag, tag, tagIcon, required, layout, span, regList, defaultValue, formId, renderKey } = { ..._ }
        this.label = label
        this.labelWidth = labelWidth
        this.showLabel = !!showLabel
        this.changeTag = !!changeTag
        this.tag = tag
        this.tagIcon = tagIcon
        this.required = !!required
        this.layout = layout
        this.span = span
        this.regList = regList && regList.map(_ => new FieldValidate(_))
        this.defaultValue = defaultValue
        this.formId = formId
        this.renderKey = renderKey
    }
}

/**
 * 表单项 Model
 */
export class Field {
    /**
     * 表单项组件配置
     * @type FieldConfig
     */
    __config__

    /**
     * 表单项组件插槽
     * @type object
     */
    __slot__

    /**
     * @type string
     */
    __vModel__

    /**
     * @type string
     */
    placeholder

    /**
     * @type object
     */
    style

    /**
     * @type boolean
     */
    readonly

    /**
     * 是否禁用
     * @type boolean
     */
    disabled

    constructor(_) {
        const { __config__, __slot__, __vModel__, placeholder, style, readonly, disabled, ...rest } = { ..._ }
        this.__config__ = new FieldConfig(__config__)
        this.__slot__ = __slot__
        this.__vModel__ = __vModel__
        this.placeholder = placeholder
        this.style = style
        this.readonly = !!readonly
        this.disabled = !!disabled

        // 其它的：各个表单项各自独有的属性
        Object.assign(this, rest)
    }
}
