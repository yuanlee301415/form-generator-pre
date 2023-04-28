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
     * 尺寸
     * @type {'medium' | 'small' | 'mini'}
     */
    size

    /**
     * 标签对齐
     * @type {'left' | 'right' | 'top'}
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
     * @type boolean
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

        if (Object.keys(rest).length) {
            console.warn('FormData')
            console.log('arg:', _)
            console.log('rest:', rest)
        }

        this.formRef = formRef
        this.formModel = formModel
        this.size = size
        this.labelPosition = labelPosition
        this.labelWidth = labelWidth
        this.formRules = formRules
        this.gutter = gutter
        this.disabled = !!disabled
        this.span = span
        this.formBtns = !!formBtns
    }
}
