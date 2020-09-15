import React, { useState } from "react";
import "braft-editor/dist/index.css";
import BraftEditor from "braft-editor";
const parse = require("html-react-parser");
import Navbar from "@/Shared/Navbar";
import { useTitle } from "@/Hooks";

function Blog() {
    useTitle("Edit Blog");
    const [editorState, setEditorState] = useState(
        BraftEditor.createEditorState("Editor Content")
    );
    const handleBraftChange = editorState => {
        setEditorState(editorState);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <Navbar />
                        <div className="card-body">
                            I will use Dante2 Editor for this{" "}
                            <a
                                target="_blank"
                                href="https://michelson.github.io/dante2/#/src-index"
                            >
                                Documentation
                            </a>
                            <br />
                            For Braft editor, check out extensions like table{" "}
                            <a
                                href="https://github.com/margox/braft-extensions"
                                target="_blank"
                            >
                                here
                            </a>{" "}
                            and using it with antd{" "}
                            <a
                                href="https://braft.margox.cn/demos/antd-upload"
                                target="_blank"
                            >
                                here
                            </a>
                            <div>
                                <BraftEditor
                                    language="en"
                                    value={editorState}
                                    onChange={handleBraftChange}
                                />
                                <strong>Preview</strong>
                                {parse(editorState.toHTML())}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
