import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('notification recipe', () => {
  const { notification } = slotRecipes

  test('should be exported', () => {
    expect(notification).toBeDefined()
  })

  test('should have a center style', () => {
    expect(notification.base?.center).toMatchObject({
      color: 'colorPalette.text.initial',
      position: 'fixed',
      right: '4',
      textAlign: 'right',
      top: '24',
      zIndex: 'toast',
    })
  })

  test('should have a base style', () => {
    expect(notification.base?.dialog).toMatchObject({
      bgColor: 'colorPalette.surface.initial',
      color: 'colorPalette.text.initial',
      maxW: '29rem',
      minH: '3.125rem',
      opacity: '0',
      rounded: 'sm',
      shadow: 'md',
      _motionSafe: {
        animationName: 'fadeInDown',
        animationDuration: '250ms',
        animationTimingFunction: 'ease-in',
        animationFillMode: 'forwards',
      },
      _motionReduce: {
        opacity: '1',
      },
    })
  })

  test('should have an icon style', () => {
    expect(notification.base?.icon).toMatchObject({
      color: 'colorPalette.text.100',
      paddingInlineStart: '4',
    })
  })

  test('should have a heading style', () => {
    expect(notification.base?.heading).toMatchObject({
      color: 'inherit',
      textStyle: 'label-md',
      fontWeight: '600',
      userSelect: 'none',
    })
  })

  test('should have a description style', () => {
    expect(notification.base?.description).toMatchObject({
      color: 'inherit',
      textStyle: 'body-sm',
      userSelect: 'none',
      ['& :is(a)']: {
        rounded: 'sm',
        textStyle: 'link',
      },
    })
  })

  test('should have a close style', () => {
    expect(notification.base?.close).toMatchObject({
      bgColor: 'transparent',
      color: 'inherit',
      _hover: {
        bgColor: 'colorPalette.bg.hover',
      },
    })
  })

  test('should have a close all style', () => {
    expect(notification.base?.closeAll).toMatchObject({
      bgColor: 'transparent',
      color: 'action.text.inverse',
      pxi: '0',
      _hover: {
        bgColor: 'transparent',
        color: 'action.bg.hover',
      },
    })
  })

  test('should had a default variant', () => {
    expect(notification.defaultVariants).toMatchObject({
      palette: 'info',
    })
  })
})
