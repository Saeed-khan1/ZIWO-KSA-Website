import React from "react";
import { useRouter } from "next/router";

const Common = () => {
  const { locale } = useRouter();
  const isArabicLanguage = locale === "ar" && true;

  const titleFontFamily = isArabicLanguage ? "font-cairo" : "font-openSans";
  const paragraphFontFamily = isArabicLanguage ? "font-cairo" : "font-nunito";

  return { titleFontFamily, paragraphFontFamily };
};

export default Common;
