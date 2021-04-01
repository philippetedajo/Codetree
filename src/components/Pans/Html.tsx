import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { useAppDispatch } from "../../store/hook";
import { update_code } from "../../store/features/editorSlice";
import Editor from "../Editor";

export const HtmlTab = () => {
  return <div>Html</div>;
};

export const HtmlPanel: React.FC = () => {
  const dispatch = useAppDispatch();

  const debounced = useDebouncedCallback(
    (value) => {
      dispatch(
        update_code({
          code: value,
          type: "html",
          loading: false,
        })
      );
    },
    // delay in ms
    1000
  );

  return (
    <Editor
      initialValue=""
      language="html"
      onChangeCodeInput={(value: string) => debounced(value)}
    />
  );
};
