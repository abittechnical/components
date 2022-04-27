import React, { FC, HTMLAttributes, ReactChild } from 'react'

export interface ThingProps extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild
}

// Please do not use types off of a default export module or else Storybook Docs will suffer. // see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */

const Thing: FC<ThingProps> = ({ children }) => {
  return (
    <div className="mt-10 rounded-md bg-yellow-100 p-5">
      {children || `the snozzberries taste like snozzberries`}
    </div>
  )
}
export default Thing
