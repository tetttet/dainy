import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth();
  const user = session?.user;

  if (user) {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-md text-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Sign in</h1>
        <p className="text-sm text-gray-500">
          Please use your Google account to continue.
        </p>
        <form
          action={async () => {
            "use server";
            await signIn("google");
            redirect("/");
          }}
        >
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
}
