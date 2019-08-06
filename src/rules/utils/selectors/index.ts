export const effectCreator = `ClassProperty[value.callee.name='createEffect']`
export const effectDecorator = `ClassProperty > Decorator[expression.callee.name='Effect']`
export const actionCreator = `CallExpression[callee.name=/createAction.*/]`
export const reducerOn = `CallExpression[callee.name='createReducer'] > CallExpression[callee.name='on']`