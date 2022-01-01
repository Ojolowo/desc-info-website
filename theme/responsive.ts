const sizes = {
   $xsmall: "468px",
   $small: "768px",
   $medium: "992px",
   $large: "1200px",
   $xlarge: "1400px",
};

export const responsive = (key: keyof typeof sizes) => {
   return (style: TemplateStringsArray | String) =>
      `@media (max-width: ${sizes[key]}) { ${style} }`;
};
