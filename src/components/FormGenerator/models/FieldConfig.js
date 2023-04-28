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
     * @type boolean
     */
    changeTag

    /**
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
     * 校验
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
     * 数据类型(动态数据|静态数据)
     * @type {'dynamic' | 'static'}
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
     * Element 组件文档
     * @type string
     */
    document

    constructor(_) {
        // console.log('FieldConfig>arg:', _)
        const {
            label, labelWidth, showLabel, changeTag, tag, tagIcon, required, layout, span, regList, defaultValue,
            formId, renderKey, children, dataType, url, method, dataPath, optionType, document,
            ...rest
        } = {..._}
        if (Object.keys(rest).length ) {
            console.warn('FieldConfig')
            console.log('arg:', _)
            console.log('rest:', rest)
        }

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
        this.children = children && children.map(_ => new Field(_))
        this.dataType = dataType
        this.url = url
        this.method = method
        this.dataPath = dataPath
        this.optionType = optionType
        this.document = void 0
    }
}
