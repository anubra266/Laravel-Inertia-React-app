import React, { useState } from "react";
import { useRememberedState } from "@inertiajs/inertia-react";
import "braft-editor/dist/index.css";
import BraftEditor from "braft-editor";
const parse = require("html-react-parser");
import Site from "@/Shared/layout";
import Card from "antd/lib/card";
import { useTitle } from "@/Hooks";

function Blog() {
    useTitle("Edit Blog");
    const initBraft = BraftEditor.createEditorState("Editor Content");
    const [editorState, setEditorState] = useState({ data: initBraft });
    const handleBraftChange = editorState => {
        setEditorState({ data: editorState });
    };
    // const remember = useRememberedState(editorState);
    // console.log('remember', remember)
    return (
        <Card>
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
            <a href="https://braft.margox.cn/demos/antd-upload" target="_blank">
                here
            </a>
            <div>
                <BraftEditor
                    language="en"
                    value={editorState.data}
                    onChange={handleBraftChange}
                />
                <strong>Preview</strong>
                {parse(editorState.data.toHTML())}
            </div>
        </Card>
    );
}
Blog.layout = page => <Site children={page} />

export default Blog;
