/**
 * 自定义表单 Model
 */
export class CustomFormData {
    /**
     * @type string
     */
    formRef

    /**
     * @type string
     */
    formModel

    /**
     * @type string
     */
    size

    /**
     * @type string
     */
    labelPosition

    /**
     * @type number
     */
    labelWidth

    /**
     * @type string
     */
    formRules

    /**
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
            labelPosition,
            labelWidth,
            formRules = 'rules',
            gutter,
            disabled,
            span,
            formBtns
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
        this.formBtns = !!formBtns
    }
}
