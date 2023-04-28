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
     * 组件英文名称
     * @type string
     */
    componentName

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
            label, labelWidth, showLabel, changeTag, tag, tagIcon, required, layout, span, regList, defaultValue,
            componentName, formId, renderKey, children, ...rest
        } = { ..._ }
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
        this.componentName = componentName
        this.formId = formId
        this.renderKey = renderKey
        this.children = children && children.map(_ => new Field(_))
        Object.assign(rest, this)
    }
}
