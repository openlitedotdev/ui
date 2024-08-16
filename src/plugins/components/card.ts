import { cva } from 'class-variance-authority'

/**
 * Card wrapper **Class Variants** component
 *
 * const styles = card({...})
 *
 * @example
 * <Card className={styles())}>
 *   // accordion elements
 * </Card>
 */
export const card = cva('cursor-pointer flex border-[1px] border-default justify-between items-center', {
  variants: {
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-small',
      md: 'rounded-medium',
      lg: 'rounded-large',
    },
    shadow: {
      none: 'shadow-none',
      sm: 'shadow-small',
      md: 'shadow-medium',
      lg: 'shadow-large',
    },
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    rounded: 'sm',
    shadow: 'sm',
    orientation: 'vertical',
  },
})

/**
 * Card wrapper **Class Variants** component
 *
 * const styles = cardHeader({...})
 *
 * @example
 * <CardHeader className={styles())}>
 *   // accordion elements
 * </CardHeader>
 */
export const cardHeader = cva('flex flex-col space-y-1.5 py-3', {
  variants: {
    padded: {
      none: 'p-0',
      sm: 'p-3',
      md: 'p-6',
      lg: 'p-9',
    },
  },

  defaultVariants: {
    padded: 'sm',
  },
})

/**
 * Card wrapper **Class Variants** component
 *
 * const styles = cardTitle({...})
 *
 * @example
 * <CardTitle className={styles())}>
 *   // accordion elements
 * </CardTitle>
 */
export const cardTitle = cva('leading-none tracking-tight pt-3', {
  variants: {
    size: {
      sm: 'text-small font-medium',
      md: 'text-medium font-semibold',
      lg: 'text-large font-bold',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

/**
 * Card wrapper **Class Variants** component
 *
 * const styles = cardDescription({...})
 *
 * @example
 * <CardDescription className={styles())}>
 *   // accordion elements
 * </CardDescription>
 */
export const cardDescription = cva('text-small text-pretty py-3')

/**
 * Card wrapper **Class Variants** component
 *
 * const styles = cardContent({...})
 *
 * @example
 * <CardContent className={styles())}>
 *   // accordion elements
 * </CardContent>
 */
export const cardContent = cva('py-2', {
  variants: {
    padded: {
      none: 'p-0',
      sm: 'p-3',
      md: 'p-6',
      lg: 'p-9',
    },
  },

  defaultVariants: {
    padded: 'sm',
  },
})

/**
 * Card wrapper **Class Variants** component
 *
 * const styles = cardFooter({...})
 *
 * @example
 * <cardFooter className={styles())}>
 *   // accordion elements
 * </cardFooter>
 */
export const cardFooter = cva('flex items-center gap-2', {
  variants: {
    padded: {
      none: 'p-0',
      sm: 'p-3 pt-0',
      md: 'p-6 pt-0',
      lg: 'p-9 pt-0',
    },
  },

  defaultVariants: {
    padded: 'sm',
  },
})
