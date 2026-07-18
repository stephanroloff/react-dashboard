import { useGetUser } from "../supabase/useGetUser.tsx";

function Greeting() {
  const { data, isLoading, isError, error } = useGetUser(2);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error: {error?.message}</p>;

  return <div>Hello {data?.name}! Welcome to the dashboard.</div>;
}

export default Greeting;
