import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserProfile } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <Button>Click me</Button>
      </SignedOut>
      <SignedIn>
        <UserProfile />
      </SignedIn>
    </div>
  );
}
