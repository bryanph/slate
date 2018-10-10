import pick from 'lodash/pick'
import Value from '../models/value'

/**
 * Commands.
 *
 * @type {Object}
 */

const Commands = {}

/**
 * Set `properties` on the value.
 *
 * @param {Change} change
 * @param {Object|Value} properties
 */

Commands.setValue = (change, newProperties) => {
  const { value } = change
  newProperties = Value.createProperties(newProperties)
  const prevProperties = pick(value, Object.keys(newProperties))

  change.applyOperation({
    type: 'set_value',
    properties: prevProperties,
    newProperties,
  })
}

/**
 * Export.
 *
 * @type {Object}
 */

export default Commands
