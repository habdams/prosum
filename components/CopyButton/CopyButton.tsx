import classNames from "classnames/bind";
import { CopySimple } from "phosphor-react";
import { useCopyToClipboard } from "react-use";

import styles from "./CopyButton.module.css";

const c = classNames.bind(styles);
type CopyButtonProp = {
  link: string;
};

export function CopyButton({ link }: CopyButtonProp) {
  const [state, copyToClipboard] = useCopyToClipboard();

  return (
    <>
      <button className={c("copy")} onClick={() => copyToClipboard(link)}>
        <CopySimple size={24} weight="regular" />
        Copy link
      </button>

      {/* {state.error ? (
        <p className={c("error")}>unable to copy link</p>
      ) : (
        <p className={c("success")}>copied! </p>
      )} */}
    </>
  );
}
