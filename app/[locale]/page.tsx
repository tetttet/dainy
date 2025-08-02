import { auth } from "@/auth";
import Chat from "@/components/Chat";

import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) redirect("/auth");

  return (
    <>
      <Chat />
    </>
  );
}
