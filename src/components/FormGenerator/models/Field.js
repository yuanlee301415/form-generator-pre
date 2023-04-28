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
     * @type object
     */
    __slot__

    /**
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
     * @type {{width: string} & object}
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

    /**
     * 栅格间隔(布局容器)
     * @type number
     */
    gutter

    /**
     * 表单组件自身的 `type` 属性
     * @type *
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
     * 最小值 / 至少应选(复选框组)
     * @type number
     */
    min

    /**
     * 最大值 / 最多可选(复选框组)
     * @type number
     */
    max

    /**
     * 选项分隔符
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

    constructor(_) {
        console.log('Field>arg:', _)
        const {
            __config__, __slot__, __vModel__, placeholder, style, readonly, disabled, props,
            gutter, type, justify, align, min, max, separator, autosize, height, step, precision, maxlength,
            ...rest
        } = {..._}
        console.log('Field>rest:', rest)
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

        // 其它的：各个表单项各自独有的属性
        // Object.assign(this, rest)
        console.log('Field>this:', this)
    }
}
