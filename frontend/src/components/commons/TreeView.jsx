import React, { Component } from "react";
import TreeNode from "./TreeNode";

const TREE = [
  {
    text: "Projects",
    children: [
      { text: "project-1.docx" },
      { text: "project-2.docx" },
      {
        text: "Project 3",
        children: [
          { text: "project-3A.docx" },
          { text: "project-3B.docx" },
          { text: "project-3C.docx" }
        ]
      },
      { text: "project-4.docx" },
      {
        text: "Project 5",
        children: [
          { text: "project-5A.docx" },
          { text: "project-5B.docx" },
          { text: "project-5C.docx" },
          { text: "project-5D.docx" },
          { text: "project-5E.docx" },
          { text: "project-5F.docx" }
        ]
      }
    ]
  },
  {
    text: "Reports",
    children: [
      {
        text: "report-1",
        children: [
          { text: "report-1A.docx" },
          { text: "report-1B.docx" },
          { text: "report-1C.docx" }
        ]
      },
      {
        text: "report-2",
        children: [
          { text: "report-2A.docx" },
          { text: "report-2B.docx" },
          { text: "report-2C.docx" },
          {
            text: "report-2D.docx"
          }
        ]
      },
      {
        text: "report-3",
        children: [
          { text: "report-3A.docx" },
          { text: "report-3B.docx" },
          { text: "report-3C.docx" },
          {
            text: "report-3D.docx"
          }
        ]
      }
    ]
  },
  {
    text: "Letters",
    children: [
      {
        text: "letter-1",
        children: [
          { text: "letter-1A.docx" },
          { text: "letter-1B.docx" },
          { text: "letter-1C.docx" }
        ]
      },

      {
        text: "letter-2",
        children: [
          { text: "letter-2A.docx" },
          { text: "letter-2B.docx" },
          { text: "letter-2C.docx" },
          { text: "letter-2D.docx" }
        ]
      },
      {
        text: "letter-3",
        children: [
          { text: "letter-3A.docx" },
          { text: "letter-3B.docx" },
          { text: "letter-3C.docx" },
          { text: "letter-3D.docx" }
        ]
      }
    ]
  }
];

class TreeView extends Component {
  render() {
    return <TreeNode children={TREE} root={true} />;
  }
}

export default TreeView;
