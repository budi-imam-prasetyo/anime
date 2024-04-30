import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

const UserActionButton = async () => {
  const user = await getServerSession(authOption);
  console.log(user);

  return (
    <div className="m-2">
      <Link href="/api/auth/signin" className="text-bold">
        Sign In
      </Link>
    </div>
  );
};

export default UserActionButton;
