import styled from "styled-components";
import { MessageRole } from "@/types/model";

export const MarkdownWrapper = styled.div<{ user: MessageRole }>`
  font-family: "Roboto", sans-serif;
  color: ${({ user }) => (user === 'user' ? "#fff" : "#333")};
  line-height: 1.6;
  font-size: 0.95rem;
  white-space: pre-wrap;
  word-break: break-word;

  a {
    color: #4db8ff;
    text-decoration: underline;
  }

  strong {
    font-weight: 600;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 1em;
`;

export const InlineCode = styled.code`
  background-color: #333;
  color: #f8f8f2;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
  font-family: "Fira Code", monospace;
`;

export const List = styled.ul`
  margin-left: 1.2em;
  margin-bottom: 1em;
  list-style-type: disc;
`;

export const ListItem = styled.li``;
