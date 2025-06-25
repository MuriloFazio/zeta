import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AIModel } from "@/types/model";

// GET
export const usePreferredModel = () => {
  return useQuery<AIModel>({
    queryKey: ["preferredModel"],
    queryFn: async () => {
      const res = await fetch("/api/settings/model");
      const data = await res.json();
      return data.preferredModel;
    },
  });
};

// POST
export const useUpdatePreferredModel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (model: AIModel) => {
      await fetch("/api/settings/model", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["preferredModel"] });
    },
  });
};
