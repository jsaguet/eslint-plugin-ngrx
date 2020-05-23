import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils'

import { store } from './utils'

export const ruleName = 'no-typed-store'

export const messageId = 'noTypedStore'
export type MessageIds = typeof messageId

type Options = []

export default ESLintUtils.RuleCreator(name => name)<Options, MessageIds>({
  name: ruleName,
  meta: {
    type: 'problem',
    docs: {
      category: 'Possible Errors',
      description: 'Store should not be typed',
      extraDescription: [
        'This rule forces the usage of selectors, which are typed',
      ],
      recommended: 'error',
    },
    schema: [],
    messages: {
      [messageId]:
        'Store should not be typed, use `Store` (without generic) instead.',
    },
  },
  defaultOptions: [],
  create: context => {
    return {
      [store](node: TSESTree.TSTypeReference) {
        context.report({
          node,
          messageId,
        })
      },
    }
  },
})