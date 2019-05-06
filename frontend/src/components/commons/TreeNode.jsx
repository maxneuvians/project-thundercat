import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/lib/tree";
import "../../css/lib/tree.css";
import { treeNodeShape } from "../eMIB/constants";

//Recursive tree building component. for each
class TreeNode extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(treeNodeShape).isRequired,
    root: PropTypes.bool // optional prop. If it is present, then this is the root node
  };
  render() {
    // if it is the root, then the list is tree; otherwise it is group
    return (
      <ul role={!this.props.root ? "group" : "tree"}>
        {this.props.children.map((node, key) => {
          if (!node.children) {
            return (
              <li role="treeitem" className="leaf" key={key}>
                {node.text}
              </li>
            );
          } else {
            return (
              <li role="treeitem" aria-expanded="false" key={key}>
                <span>{node.text}</span>
                <TreeNode children={node.children} />
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

export default TreeNode;
