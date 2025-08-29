import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addUser as addUserApi,
  deleteUser as deleteUserApi,
  fetchUsers,
  updateUser as updateUserApi,
} from "../services/usersApi";
import { useSearchParams } from "react-router-dom";
import { PAGESIZE } from "../helpers/constants";
import { toast } from "react-hot-toast";

export function useFetchUsers() {
  // Hooks
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // Variables needed for fetching and pagination
  const page = searchParams.get("page") ?? 1;
  const limit = PAGESIZE;
  const queryOptions = { page: +page, limit };

  // Fetch users with react query
  const { data: { data: interns, totalUsers } = {}, isPending } = useQuery({
    queryKey: ["users", queryOptions],
    queryFn: () => fetchUsers(queryOptions),
  });

  const possiblePages = totalUsers > 0 ? Math.ceil(totalUsers / limit) : null; // Assuming totalUsers is 10 as per the API
  const hasNextPage = possiblePages ? page < possiblePages : false;

  // Prefecth next/prev page
  if (hasNextPage) {
    prefetchUsers(queryClient, { page: +page + 1, limit });
  }
  if (!hasNextPage && page > 1) {
    prefetchUsers(queryClient, { page: +page - 1, limit });
  }

  return { interns, totalUsers, isPending };
}

function prefetchUsers(queryClient, queryOptions) {
  return queryClient.prefetchQuery({
    queryKey: ["users", queryOptions],
    queryFn: () => fetchUsers(queryOptions),
  });
}

// useAddUser Hook
export function useAddUser() {
  const queryClient = useQueryClient();

  const { mutate: addUser, isPending } = useMutation({
    mutationFn: addUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
      toast.success("successfully added user", { id: 1 });
    },
    onError: (err) =>
      toast.error(err?.message ?? "couldn't add user", { id: 1 }),
  });

  return { addUser, isPending };
}

// useUpdateUser Hook
export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
      toast.success("successfully update user", { id: 1 });
    },
    onError: (err) =>
      toast.error(err?.message ?? "couldn't add user", { id: 1 }),
  });

  return { updateUser, isPending };
}
// usedeleteUser Hook
export function useDeleteUser() {
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isPending } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
      toast.success("successfully deleted user", { id: 1 });
    },
    onError: (err) =>
      toast.error(err?.message ?? "couldn't delete user", { id: 1 }),
  });

  return { deleteUser, isPending };
}
