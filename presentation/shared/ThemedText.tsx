import React from "react";
import { Text, TextProps } from "react-native";

type TextType = "normal" | "h1" | "h2" | "semibold" | "link";

interface Props extends TextProps {
  className?: string;
  type?: TextType; //'normal' | 'h1' | 'h2' | 'semibold' | 'link'
}

const ThemedText = ({ className, type, ...rest }: Props) => {
  //className="mt-10 text-3xl text-light-text dark:text-dark-text"
  return (
    <Text
      className={[
        "text-light-text dark:text-dark-text",
        type === "normal" ? "font-normal" : undefined,
        type === "h1" ? "text-3xl" : undefined,
        type === "h2" ? "text-xl" : undefined,
        type === "semibold" ? "font-semibold" : undefined,
        type === "link" ? "font-normal underline" : undefined,
        className,
      ].join(" ")}
      {...rest} //* aquí se mostraría el resto de lo que haya entre el componente, incluido el texto
    />
  );
};

export default ThemedText;
