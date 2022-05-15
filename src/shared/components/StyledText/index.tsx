import colors from "@colors";
import fontSize from "@font-size";
import fonts from "@fonts";

import React from "react";
import { StyleSheet, Text as DefaultText } from "react-native";

type TextType = "title" | "subTitle" | "description" | "subDescription";

type StyledTextExtendProps = {
  text?: string;
  textType?: TextType;
};

export type TextProps = DefaultText["props"] & StyledTextExtendProps;

const StyledText = (props: TextProps) => {
  const { text, textType } = props;

  const styles = StyleSheet.create({
    title: {
      fontFamily: fonts.montserrat.bold,
      fontSize: fontSize.title,
    },
    subTitle: {
      fontFamily: fonts.montserrat.semiBold,
      fontSize: fontSize.subTitle,
    },
    description: {
      fontFamily: fonts.montserrat.regular,
      fontSize: fontSize.description,
    },
    subDescription: {
      fontFamily: fonts.montserrat.light,
      fontSize: fontSize.subDescription,
    },
  });

  const getStyle = (type?: TextType) => {
    switch (type) {
      case "title":
        return styles.title;
      case "subTitle":
        return styles.subTitle;
      case "description":
        return styles.description;
      case "subDescription":
        return styles.subDescription;
      default:
        return styles.title;
    }
  };

  return (
    <DefaultText
      {...props}
      style={[{ color: colors.text }, getStyle(textType), props.style]}
    >
      {text ?? ""}
    </DefaultText>
  );
};

export default StyledText;
