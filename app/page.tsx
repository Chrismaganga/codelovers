import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect("/dashboard");
  }
  return (
    <section className="flex items-center justify-center bg-background h-[90vh]">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <span className="w-auto px-6 py-3 rounded-full bg-secondary">
              <span className="text-sm font-medium text-primary">
                Sort your notes easily
              </span>
            </span>

            <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
              Create Notes
            </h1>
            <p className="max-w-[900px] mx-auto mt-8  text-base lg:text-xl text-secondary-foreground ">
         
              Incremental Static Regeneration (ISR): Leverage ISR for dynamic content in statically generated pages, enabling faster builds and updates.
              API Routes: Continue using API routes for serverless functions and backend logic.
              Tailwind CSS:
              JIT (Just-In-Time) Compilation: If not already integrated, consider adopting Tailwind CSS with JIT for on-demand utility generation and smaller bundle sizes.
              Dark Mode: Explore and implement dark mode using Tailwind CSS.
              State Management:
              React Context API: Continue using React Context for state management, especially for smaller to medium-sized applications.
              Redux or Recoil: For larger applications, consider using state management libraries like Redux or Recoil.
              UI Libraries and Component Libraries:
              Service Workers: Implement service workers for offline support and improved performance.
              Web App Manifest: Include a web app manifest for a more app-like experience.
              Accessibility:
          
            </p>
          </div>
          <div className="flex justify-center max-w-sm mx-auto mt-10">
            <RegisterLink>
              <Button size="lg" className="w-full">
                Sign Up for free
              </Button>
            </RegisterLink>
          </div>
        </div>
      </div>
    </section>
  );
}