import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent } from "react";
export default function LoginPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-white">
      <div className="w-[30%] h-[60%] bg-[#f5f4f4] rounded-xl p-6">
        <div className="border-[1px] border-slate-500 w-full h-full rounded-xl flex flex-col items-center justify-center bg-[#f5f4f4]">
          <div className="w-[60%] flex flex-col gap-y-6 ">
            <div className="flex flex-col gap-y-1">
              <span className="font-bold text-2xl">Sign In</span>
              <p className="text-sm">Hi there! Nice to see you again.</p>
            </div>

            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email" className="font-bold text-yellow-600">
                  Email
                </Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password" className="font-bold text-yellow-600">
                  Password
                </Label>
                <Input type="password" id="password" placeholder="*******" />
              </div>
              <Input
                type="submit"
                value={"Sign In"}
                className="bg-yellow-200 hover:bg-yellow-300 cursor-pointer"
              />
            </form>
            <div className="flex justify-between">
              <a href="#" className="text-slate-500">
                Forgot Password?
              </a>
              <a href="#" className="text-yellow-600">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
