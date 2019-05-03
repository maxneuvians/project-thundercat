import React, { Component } from "react";
import TreeNode from "./TreeNode";

const TREE = [
  {
    text: "Parent 1",
    nodes: [
      {
        text: "Child 1",
        nodes: [
          {
            text: "Grandchild 1"
          },
          {
            text: "Grandchild 2"
          }
        ]
      },
      {
        text: "Child 2"
      }
    ]
  },
  {
    text: "Parent 2"
  },
  {
    text: "Parent 3"
  },
  {
    text: "Parent 4"
  },
  {
    text: "Parent 5"
  }
];

class TreeView extends Component {
  render() {
    return (
      <ul role="tree" aria-labelledby="tree_label">
        <li role="treeitem" aria-expanded="false">
          <span>Projects</span>
          <ul role="group">
            <li role="treeitem" className="doc">
              project-1.docx
            </li>
            <li role="treeitem" className="doc">
              project-2.docx
            </li>
            <li role="treeitem" aria-expanded="false">
              <span>Project 3</span>
              <ul role="group">
                <li role="treeitem" className="doc">
                  project-3A.docx
                </li>
                <li role="treeitem" className="doc">
                  project-3B.docx
                </li>
                <li role="treeitem" className="doc">
                  project-3C.docx
                </li>
              </ul>
            </li>
            <li role="treeitem" className="doc">
              project-4.docx
            </li>
            <li role="treeitem" aria-expanded="false">
              <span>Project 5</span>
              <ul role="group">
                <li role="treeitem" className="doc">
                  project-5A.docx
                </li>
                <li role="treeitem" className="doc">
                  project-5B.docx
                </li>
                <li role="treeitem" className="doc">
                  project-5C.docx
                </li>
                <li role="treeitem" className="doc">
                  project-5D.docx
                </li>
                <li role="treeitem" className="doc">
                  project-5E.docx
                </li>
                <li role="treeitem" className="doc">
                  project-5F.docx
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li role="treeitem" aria-expanded="false">
          <span>Reports</span>
          <ul role="group">
            <li role="treeitem" aria-expanded="false">
              <span>report-1</span>
              <ul role="group">
                <li role="treeitem" className="doc">
                  report-1A.docx
                </li>
                <li role="treeitem" className="doc">
                  report-1B.docx
                </li>
                <li role="treeitem" className="doc">
                  report-1C.docx
                </li>
              </ul>
            </li>
            <li role="treeitem" aria-expanded="false">
              <span>report-2</span>
              <ul role="group">
                <li role="treeitem" className="doc">
                  report-2A.docx
                </li>
                <li role="treeitem" className="doc">
                  report-2B.docx
                </li>
                <li role="treeitem" className="doc">
                  report-2C.docx
                </li>
                <li role="treeitem" className="doc">
                  report-2D.docx
                </li>
              </ul>
            </li>
            <li role="treeitem" aria-expanded="false">
              <span>report-3</span>

              <TreeNode
                tree={[
                  { text: "report-3A.docx" },
                  { text: "report-3B.docx" },
                  { text: "report-3C.docx" },
                  { text: "report-3D.docx" }
                ]}
              />
            </li>
          </ul>
        </li>
        <li role="treeitem" aria-expanded="false">
          <span>Letters</span>
          <ul role="group">
            <li role="treeitem" aria-expanded="false">
              <span>letter-1</span>
              <ul>
                <li role="treeitem" className="doc">
                  letter-1A.docx
                </li>
                <li role="treeitem" className="doc">
                  letter-1B.docx
                </li>
                <li role="treeitem" className="doc">
                  letter-1C.docx
                </li>
              </ul>
            </li>
            <li role="treeitem" aria-expanded="false">
              <span>letter-2</span>
              <ul role="group">
                <li role="treeitem" className="doc">
                  letter-2A.docx
                </li>
                <li role="treeitem" className="doc">
                  letter-2B.docx
                </li>
                <li role="treeitem" className="doc">
                  letter-2C.docx
                </li>
                <li role="treeitem" className="doc">
                  letter-2D.docx
                </li>
              </ul>
            </li>
            <li role="treeitem" aria-expanded="false">
              <span>letter-3</span>
              <ul role="group">
                <li role="treeitem" className="doc">
                  letter-3A.docx
                </li>
                <li role="treeitem" className="doc">
                  letter-3B.docx
                </li>
                <li role="treeitem" className="doc">
                  letter-3C.docx
                </li>
                <li role="treeitem" className="doc">
                  letter-3D.docx
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default TreeView;
