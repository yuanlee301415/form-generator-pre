/**
 * 表单项 - 正则校验 Model
 */
export default class FieldValidate {
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
        const {pattern, message} = {..._}
        this.pattern = pattern
        this.message = message
    }
}
