import React, { CSSProperties, forwardRef } from "react";

interface IFlexOptionsLong {
  /**
   * The CSS `align-items` property.
   *
   * It defines the `align-self` value on all direct children as a group.
   *
   * - In Flexbox, it controls the alignment of items on the Cross Axis.
   * - In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/align-items)
   */
  alignItems?: CSSProperties["alignItems"];
  /**
   * The CSS `align-content` property.
   *
   * It defines the distribution of space between and around
   * content items along a flexbox's cross-axis or a grid's block axis.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/align-content)
   */
  alignContent?: CSSProperties["alignContent"];
  /**
   * The CSS `justify-items` property.
   *
   * It defines the default `justify-self` for all items of the box,
   * giving them all a default way of justifying each box
   * along the appropriate axis.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/justify-items)
   */
  justifyItems?: CSSProperties["justifyItems"];
  /**
   * The CSS `justify-content` property.
   *
   * It defines how the browser distributes space between and around content items
   * along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/justify-content)
   */
  justifyContent?: CSSProperties["justifyContent"];
  /**
   * The CSS `flex-wrap` property.
   *
   * It defines whether flex items are forced onto one line or
   * can wrap onto multiple lines. If wrapping is allowed,
   * it sets the direction that lines are stacked.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-wrap)
   */
  flexWrap?: CSSProperties["flexWrap"];
  /**
   * The CSS `flex-flow` property.
   *
   * It is a shorthand property for `flex-direction` and `flex-wrap`.
   * It specifies the direction of a flex container, as well as its wrapping behavior.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
   */
  flexFlow?: CSSProperties["flexFlow"];
  /**
   * The CSS `flex-basis` property.
   *
   * It defines the initial main size of a flex item.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-basis)
   */
  flexBasis?: CSSProperties["flexBasis"];
  /**
   * The CSS `flex-direction` property.
   *
   * It defines how flex items are placed in the flex container
   * defining the main axis and the direction (normal or reversed).
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
   */
  flexDirection?: CSSProperties["flexDirection"];
  /**
   * The CSS `flex-direction` property.
   *
   * It defines how flex items are placed in the flex container
   * defining the main axis and the direction (normal or reversed).
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
   */
  flex?: CSSProperties["flex"];
  /**
   * The CSS `gap` property.
   *
   * It defines the gap between items in both flex and
   * grid contexts.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/gap)
   */
  gap?: CSSProperties["gap"];
  /**
   * The CSS `row-gap` property.
   *
   * It sets the size of the gap (gutter) between an element's grid rows.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/row-gap)
   */
  rowGap?: CSSProperties["rowGap"];
  /**
   * The CSS `column-gap` property.
   *
   * It sets the size of the gap (gutter) between an element's columns.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/column-gap)
   */
  columnGap?: CSSProperties["columnGap"];
  /**
   * The CSS `justify-self` property.
   *
   * It defines the way a box is justified inside its
   * alignment container along the appropriate axis.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
   */
  justifySelf?: CSSProperties["justifySelf"];
  /**
   * The CSS `align-self` property.
   *
   * It works like `align-items`, but applies only to a
   * single flexbox item, instead of all of them.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/align-self)
   */
  alignSelf?: CSSProperties["alignSelf"];
  /**
   * The CSS `order` property.
   *
   * It defines the order to lay out an item in a flex or grid container.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/order)
   */
  order?: CSSProperties["order"];
  /**
   * The CSS `flex-grow` property.
   *
   * It defines how much a flexbox item should grow
   * if there's space available.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-grow)
   */
  flexGrow?: CSSProperties["flexGrow"];
  /**
   * The CSS `flex-shrink` property.
   *
   * It defines how much a flexbox item should shrink
   * if there's not enough space available.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-shrink)
   */
  flexShrink?: CSSProperties["flexShrink"];
  /**
   * The CSS `place-items` property.
   *
   * It allows you to align items along both the block and
   * inline directions at once (i.e. the align-items and justify-items properties)
   * in a relevant layout system such as `Grid` or `Flex`.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/place-items)
   */
  placeItems?: CSSProperties["placeItems"];
  /**
   * The CSS `place-content` property.
   *
   * It allows you to align content along both the block and
   * inline directions at once (i.e. the align-content and justify-content properties)
   * in a relevant layout system such as Grid or Flexbox.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/place-content)
   */
  placeContent?: CSSProperties["placeContent"];
  /**
   * The CSS `place-self` property.
   *
   * It allows you to align an individual item in both the block and
   * inline directions at once (i.e. the align-self and justify-self properties)
   * in a relevant layout system such as Grid or Flexbox.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/place-self)
   */
  placeSelf?: CSSProperties["placeSelf"];
}

interface IFlexOptions extends IFlexOptionsLong {
  /**
   * Shorthand for `alignItems` style prop
   * @type SystemProps["alignItems"]
   */
  align?: IFlexOptionsLong["alignItems"];

  /**
   * Shorthand for `justifyContent` style prop
   * @type SystemProps["justifyContent"]
   */
  justify?: IFlexOptionsLong["justifyContent"];

  /**
   * Shorthand for `flexWrap` style prop
   * @type SystemProps["flexWrap"]
   */
  wrap?: IFlexOptionsLong["flexWrap"];

  /**
   * Shorthand for `flexDirection` style prop
   * @type SystemProps["flexDirection"]
   */
  direction?: IFlexOptionsLong["flexDirection"];

  /**
   * Shorthand for `flexBasis` style prop
   * @type SystemProps["flexBasis"]
   */
  basis?: IFlexOptionsLong["flexBasis"];

  /**
   * Shorthand for `flexGrow` style prop
   * @type SystemProps["flexGrow"]
   */
  grow?: IFlexOptionsLong["flexGrow"];

  /**
   * Shorthand for `flexShrink` style prop
   * @type SystemProps["flexShrink"]
   */
  shrink?: IFlexOptionsLong["flexShrink"];
}

export interface IDivOptions {
  /**
   * Custom width of the container
   */
  width?: CSSProperties["width"];
  /**
   * Custom height of the container
   */
  height?: CSSProperties["height"];
  /**
   * Set minimum width of the container
   */
  minWidth?: CSSProperties["minWidth"];
  /**
   * Set maximum width of the container
   */
  maxWidth?: CSSProperties["maxWidth"];
  /**
   * Set minimum height of the container
   */
  minHeight?: CSSProperties["minHeight"];
  /**
   * Set maximum height of the container
   */
  maxHeight?: CSSProperties["maxHeight"];
  /**
   * Set color of the text
   */
  color?: CSSProperties["color"];
  /**
   * Set the font size
   */
  fontSize?: CSSProperties["fontSize"] | number;
  /**
   * Set the font weight
   */
  fontWeight?: CSSProperties["fontWeight"] | number;
  /**
   * Align the text
   */
  textAlign?: CSSProperties["textAlign"];

  /**
   * Background color of the container
   */
  backgroundColor?: CSSProperties["backgroundColor"];
  /**
   * Set the style of the border.
   * This prop is required when setting a border
   */
  borderStyle?: CSSProperties["borderStyle"];
  /**
   * Set the border radius of the container
   */
  borderRadius?: CSSProperties["borderRadius"];
  /**
   * Set the width of the border
   */
  borderWidth?: CSSProperties["borderWidth"];
  /**
   * Set the color of the border
   */
  borderColor?: CSSProperties["borderColor"];
  /**
   * Set the margin
   */
  margin?: CSSProperties["margin"];
  /**
   * Set the left margin
   */
  marginLeft?: CSSProperties["marginLeft"];
  /**
   * Set the right margin
   */
  marginRight?: CSSProperties["marginRight"];
  /**
   * Set the top margin
   */
  marginTop?: CSSProperties["marginTop"];
  /**
   * Set the bottom margin
   */
  marginBottom?: CSSProperties["marginBottom"];
  /**
   * Set the padding
   */
  padding?: CSSProperties["padding"];
  /**
   * Set the left padding
   */
  paddingLeft?: CSSProperties["paddingLeft"];
  /**
   * Set the right padding
   */
  paddingRight?: CSSProperties["paddingRight"];
  /**
   * Set the top padding
   */
  paddingTop?: CSSProperties["paddingTop"];
  /**
   * Set the bottom padding
   */
  paddingBottom?: CSSProperties["paddingBottom"];
}

export interface IFlexProps
  extends IFlexOptions,
    IDivOptions,
    Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {}

/**
 * React component used to create flexbox layouts.
 *
 * It renders a `div` with `display: flex` and
 * comes with helpful style shorthand.
 *
 */
const Flex = (props: IFlexProps, ref: React.Ref<HTMLDivElement>) => {
  const {
    direction,
    flexDirection,
    align,
    alignItems,
    alignSelf,
    justify,
    justifyContent,
    wrap,
    flexWrap,
    basis,
    flexBasis,
    grow,
    flexGrow,
    shrink,
    flexShrink,
    width,
    height,
    color: colorProp,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    fontSize: fontSizeProp,
    fontWeight: fontWeightProp,
    textAlign,
    borderRadius: borderRadiusProp,
    backgroundColor: backgroundColorProp,
    borderWidth,
    borderStyle,
    borderColor: borderColorProp,
    ...rest
  } = props;

  const output = {};

  const styles = {
    display: "flex",
    flexDirection: direction || flexDirection,
    alignItems: align || alignItems,
    justifyContent: justify || justifyContent,
    flexWrap: wrap || flexWrap,
    flexBasis: basis || flexBasis,
    flexGrow: grow || flexGrow,
    flexShrink: shrink || flexShrink,
    alignSelf: alignSelf,
    width: width,
    height: height,
    minWidth: minWidth,
    maxWidth: maxWidth,
    minHeight: minHeight,
    maxHeight: maxHeight,
    textAlign: textAlign,
    borderWidth: borderWidth,
    borderStyle: borderStyle,
    ...output,
    ...props,
  };
  return <div ref={ref} style={styles as any} {...rest} />;
};

const FlexWithForwardedRef = forwardRef<HTMLDivElement, IFlexProps>(Flex);

FlexWithForwardedRef.displayName = "Flex";

/**
 * Export with 'as React.FC<IFlexProps>' in order to fix the bug that components that use
 * 'forwardRef' get the name 'ForwardRefExoticComponent'. Link to the issue:
 *
 * https://github.com/styleguidist/react-docgen-typescript/issues/215
 */
export default FlexWithForwardedRef as React.FC<IFlexProps>;
