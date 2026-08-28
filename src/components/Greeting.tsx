import { useGetPublicUser } from "@/supabase/user/useGetPublicUser";

function Greeting() {
  const { data, isLoading, isError } = useGetPublicUser();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <>
      <div>Hello {data?.name || data?.email}! Welcome to the dashboard.</div>
    </>
  );
}

export default Greeting;
