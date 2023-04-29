/**
 * 表单项选项
 */
export default class FieldOption {
    /**
     * 选项显示名称
     * @type string
     */
    label

    /**
     * 选项 `value`
     * @type string
     */
    value

    /**
     * 不事禁用
     * @type boolean
     */
    disabled

    constructor(_) {
        const {label, value, disabled} = {..._}
        this.label = label
        this.message = value
        this.disabled = disabled
    }
}
