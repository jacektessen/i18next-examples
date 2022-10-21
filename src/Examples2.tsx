import i18n from "./i18n2";
import React, { FC, useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";

const CustomStrong: FC = ({ children }) => <strong>{children}</strong>;
const CustomUnderline: FC = ({ children }) => <u>{children}</u>;

// i18n.addResourceBundle("en", "namespace1", { newItemX: "The new item added after init XXX" });

export const Examples2 = () => {
  // const { t, i18n } = useTranslation();
  const [, force] = useState({});
  console.log({ langs: i18n.languages });
  // const name = "Marilyn"; 
  // const daysText = t("examples.daysArray", { returnObjects: true }) as string[];
  // const objItem = t("examples.objectItem", { returnObjects: true }) as Record<string, any>;

  // useEffect(() => {
  //   i18n.addResourceBundle("en2", "namespace2", { newItemX: "The new item added after init XXX" });
  //   force({});
  //   console.log({ hasResourceBundle: i18n.hasResourceBundle("en2", "namespace2") });
  //   console.log({ languages: i18n.languages });
  // }, [i18n]);

  // console.log({ languages: i18n.languages });

  return (
    <>
      <h2>Second instance examples:</h2>
      <h2> {i18n.t("first" as any)}</h2>
    </>
  );
};
