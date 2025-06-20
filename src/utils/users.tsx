import { AIModel } from "@/types/model";

export const getPreferredModel = async (): Promise<AIModel> => {
  const res = await fetch("/api/settings/model");
  const data = await res.json();
  return data.preferredModel;
};
