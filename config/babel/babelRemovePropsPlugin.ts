/**
 * Plugin to remove elements from bundle
 * ex. babelPlugin(['data-testid]) - to remove all data-testid from bundle
 */

import { PluginItem } from '@babel/core';

export default function babelRemovePropsPlugin(): PluginItem {
  return {
    visitor: {
      Program(path, state) {
        const props = state.opts.props || [];
        path.traverse({
          JSXIdentifier(current) {
            const nodeName = current.node.name;

            if (props.includes(nodeName)) {
              current.parentPath.remove();
            }
          },
        });
      },
    },
  };
}
