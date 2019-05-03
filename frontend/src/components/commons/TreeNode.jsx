import React, { Component } from "react";
import PropTypes from "prop-types";

class TreeNode extends Component {
  static propTypes = {
    tree: PropTypes.array.isRequired // TODO array of x
  };
  render() {
    return (
      <ul role="group">
        {this.props.tree.map((node, key) => (
          <>
            {!node.children && (
              <li role="treeitem" className="doc" key={key}>
                {node.text}
              </li>
            )}
            {node.children && <div key={key}>Functionality not implemented yet</div>}
          </>
        ))}
      </ul>
    );
  }
}

/*
<li role="treeitem" aria-expanded="false">
                <span>{node.text} 5</span>
                <TreeNode tree={node.children} />
              </li>
              */

export default TreeNode;

/*
<ul role="group">
      {this.props.tree.map((node, key) => (
        <li role="treeitem" class="doc">
          {node.text}
        </li>
      )}
        <li role="treeitem" class="doc">
          letter-3B.docx
        </li>
        <li role="treeitem" class="doc">
          letter-3C.docx
        </li>
        <li role="treeitem" class="doc">
          letter-3D.docx
        </li>*/
