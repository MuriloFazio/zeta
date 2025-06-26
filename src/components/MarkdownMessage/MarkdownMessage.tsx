import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  MarkdownWrapper,
  Paragraph,
  InlineCode,
  List,
  ListItem,
} from "./styles";
import { MarkdownMessageProps } from "./types";

export const MarkdownMessage: React.FC<MarkdownMessageProps> = ({ content, user }) => {
  return (
    <MarkdownWrapper user={user}>
      <ReactMarkdown
        components={{
          p: ({ children }) => <Paragraph>{children}</Paragraph>,
          strong: ({ children }) => <strong>{children}</strong>,
          ul: ({ children }) => <List>{children}</List>,
          li: ({ children }) => <ListItem>{children}</ListItem>,
          code({ className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <InlineCode>{children}</InlineCode>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </MarkdownWrapper>
  );
};

export default MarkdownMessage;
