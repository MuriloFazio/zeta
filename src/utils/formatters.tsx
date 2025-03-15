export const textFormatter = (text: string) => {
  return text.split("\n").map((line, i) => (
    <p key={i} style={{ margin: "5px 0" }}>
      {line}
    </p>
  ));
};
