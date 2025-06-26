import { MessageRole } from '@/types/model';

export type MarkdownMessageProps = {
  content: string;
  user: MessageRole;
};