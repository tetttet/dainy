import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function SignOutPage() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/auth");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-md text-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Sign Out</h1>
        <p className="text-sm text-gray-500">
          Sign out of your account to continue.
        </p>
        <form
          action={async () => {
            "use server";
            await signOut();
            redirect("/");
          }}
        >
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}
