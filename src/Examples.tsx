import React, { FC } from "react";
import { useTranslation, Trans } from "react-i18next";

const CustomStrong: FC = ({ children }) => <strong>{children}</strong>;
const CustomUnderline: FC = ({ children }) => <u>{children}</u>;

export const Examples = () => {
  const { t } = useTranslation();
  const name = "Marilyn";
  const daysText = t("examples.daysArray", { returnObjects: true }) as string[];
  const objItem = t("examples.objectItem", { returnObjects: true }) as Record<string, any>;

  return (
    <>
      <h2>react-i18next examples:</h2>
      <ol>
        <li>{t("examples.item1")}</li>
        <li>
          <Trans i18nKey="examples.item2" components={{ underline: <CustomUnderline />, bold: <CustomStrong /> }} />
        </li>
        <li>{t("examples.item3")}</li>
        <li>
          <Trans i18nKey="examples.item4" />
        </li>
        <li>
          <Trans i18nKey="examples.item5" values={{ name }} components={{ b: <CustomStrong /> }} />
        </li>
        <li>
          <Trans i18nKey="examples.item6" count={1} />
        </li>
        <li>
          <Trans i18nKey="examples.item6" count={4} />
        </li>
        <li>{t("examples.nesting.nesting1")}</li>
        <li>{t("examples.context.friend")}</li>
        <li>{t("examples.context.friend", { context: "male" })}</li>
        <li>{t("examples.context.friend", { context: "female" })}</li>
        <li>
          {daysText.map((item, index) => (
            <span key={index}>{item + " "}</span>
          ))}
        </li>
        <li>{objItem.someKey.value}</li>
        <li>{t("newItem" as any)}</li>
      </ol>
    </>
  );
};
