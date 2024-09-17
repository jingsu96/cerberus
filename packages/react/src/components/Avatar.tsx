import { css, cx } from '@cerberus/styled-system/css'
import { circle } from '@cerberus/styled-system/patterns'
import {
  avatar,
  type AvatarVariantProps,
} from '@cerberus/styled-system/recipes'
import { UserFilled } from '@cerberus/icons'
import type { HtmlHTMLAttributes, ReactNode } from 'react'
import { Show } from './Show'

/**
 * This module contains the Avatar component.
 * @module
 */

export type AvatarImageProps = HtmlHTMLAttributes<HTMLImageElement> & {
  ariaLabel: string
  as?: never
  src: string
  width?: number
  height?: number
}
export type AvatarAsProps = {
  as: ReactNode
  ariaLabel?: never
  src?: never
  width?: never
  height?: never
}

export type AvatarProps = (HtmlHTMLAttributes<HTMLDivElement> &
  AvatarVariantProps) &
  (AvatarImageProps | AvatarAsProps)

/**
 * The Avatar component is used to represent a user or entity. It will show an image if src provided, otherwise it will show the ariaLabel of the ariaLabel. If the ariaLabel is empty, it will show a `defineIcons().avatar` icon.
 * @definition [Avatar docs](https://cerberus.digitalu.design/react/avatar)
 * @example
 * ```tsx
 * <Avatar
 *   ariaLabel="Protector Cerberus"
 *   src="https://cerberus.digitalu.design/logo.svg"
 * />
 * ```
 */
export function Avatar(props: AvatarProps) {
  const { ariaLabel, as, gradient, size, src, width, height, ...nativeProps } =
    props
  const initials = (ariaLabel || '')
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)

  return (
    <div
      {...nativeProps}
      className={cx(
        nativeProps.className,
        avatar({ gradient, size }),
        circle(),
      )}
    >
      <Show
        when={Boolean(src) || Boolean(as)}
        fallback={
          <Show
            when={Boolean(initials)}
            fallback={
              <UserFilled
                size={iconSizeMap[size as keyof typeof iconSizeMap]}
              />
            }
          >
            <>{initials}</>
          </Show>
        }
      >
        <Show
          when={Boolean(as)}
          fallback={
            <img
              alt={props.ariaLabel}
              className={css({
                h: 'full',
                objectFit: 'cover',
                w: 'full',
              })}
              decoding="async"
              loading="lazy"
              src={src}
              height={height}
              width={width}
            />
          }
        >
          {as}
        </Show>
      </Show>
    </div>
  )
}

const iconSizeMap = {
  xs: 16,
  sm: 16,
  md: 20,
  lg: 34,
  xl: 32,
  '2xl': 32,
  '3xl': 32,
  '4xl': 32,
}