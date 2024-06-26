/**
 * 自定义表单 Model
 */
export default class CustomFormData {
    /**
     * 表单名(`ref`)
     * @type string
     */
    formRef

    /**
     * 数据模型(`model`)
     * @type string
     */
    formModel

    /**
     * @type COMPONENT_SIZE
     */
    size

    /**
     * @type LABEL_POSITION
     */
    labelPosition

    /**
     * 标签宽度
     * @type number
     */
    labelWidth

    /**
     * 校验模型
     * @type string
     */
    formRules

    /**
     * 栅格间隔
     * @type number
     */
    gutter

    /**
     * @type boolean
     */
    disabled

    /**
     * @type number
     */
    span

    /**
     * @deprecated 是否自动添加“提交”和“重置”按钮
     */
    formBtns

    constructor(_) {
        const {
            formRef = 'elForm',
            formModel = 'formData',
            size = 'medium',
            labelWidth = 100,
            formRules = 'rules',
            labelPosition,
            gutter = 15,
            span = 24,
            disabled,
            formBtns,
            ...rest
        } = {..._}
        this.formRef = formRef
        this.formModel = formModel
        this.size = size
        this.labelPosition = labelPosition
        this.labelWidth = labelWidth
        this.formRules = formRules
        this.gutter = gutter
        this.disabled = !!disabled
        this.span = span
        this.formBtns = void formBtns

        if (Object.keys(rest).length) {
            console.warn('FormData>rest:')
            console.log('arg:', _)
            console.table(rest)
        }
    }
}
