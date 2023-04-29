import Field from "./Field";
import FieldValidate from "./FieldValidate";

/**
 * 表单项 - 配置 Model
 */
export default class FieldConfig {
    /**
     * 标签
     * @type string
     */
    label

    /**
     * 标签宽度
     * @type number
     */
    labelWidth

    /**
     * 是否显示标签
     * @type boolean
     */
    showLabel

    /**
     * Todo
     * @type boolean
     */
    changeTag

    /**
     * 组件 Component `name`
     * @type string
     */
    tag

    /**
     * 组件图标
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
     * 表单栅格
     * @type number
     */
    span

    /**
     * @type FieldValidate[]
     */
    regList

    /**
     * @type *
     */
    defaultValue

    /**
     * 自动生成 `id`
     * @type number
     */
    formId

    /**
     * 自动生成 `key`
     * @type number
     */
    renderKey

    /**
     * @type DATA_TYPE
     */
    dataType

    /**
     * 接口地址
     * @type string
     */
    url

    /**
     * HTTP 方法
     * @type string
     */
    method

    /**
     * 数据位置
     * @type string
     */
    dataPath

    /**
     * @type Field[]
     */
    children

    /**
     * 选项样式
     * @type {'default' | 'button'}
     */
    optionType

    /**
     * @deprecated Element 组件文档地址
     */
    document

    /**
     * 组件远程获取的数据
     * @type string
     */
    dataConsumer

    /**
     * 数据字典 `id`
     * @type string
     */
    dict

    /**
     * 是否显示边框
     * @type boolean
     */
    border

    constructor(_) {
        const {
            label, labelWidth, showLabel, changeTag, tag, tagIcon, required, layout, span, regList, defaultValue,
            formId, renderKey, children, dataType, url, method, dataPath, optionType, document, dataConsumer, dict, border,
            ...rest
        } = {..._}
        this.label = label
        this.labelWidth = labelWidth
        this.showLabel = showLabel
        this.changeTag = changeTag
        this.tag = tag
        this.tagIcon = tagIcon
        this.required = required
        this.layout = layout
        this.span = span
        this.regList = regList && regList.map(_ => new FieldValidate(_))
        this.defaultValue = defaultValue
        this.formId = formId
        this.renderKey = renderKey
        this.children = children && children.map(_ => new Field(_))
        this.dataType = dataType
        this.url = url
        this.method = method
        this.dataPath = dataPath
        this.optionType = optionType
        this.document = void document
        this.dataConsumer = dataConsumer
        this.dict = dict
        this.border = border

        if (Object.keys(rest).length) {
            console.warn('FieldConfig>rest:')
            console.log('arg:', _)
            console.table(rest)
        }
    }
}
