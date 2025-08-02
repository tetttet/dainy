"use client";

import { signOutAndRedirect } from "@/services/signout";

const SignOutDropdown = () => {
  return (
    <form action={signOutAndRedirect}>
      <button
        type="submit"
        className="w-full mt-2 py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
      >
        Sign Out
      </button>
    </form>
  );
};

export default SignOutDropdown;
