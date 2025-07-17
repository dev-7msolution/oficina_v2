import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { RegisterForm } from "@/components/auth/register-form";
import { Toaster } from "sonner";
import { AuthLayout } from "@/components/auth/auth-layout";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>
            Enter your information to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
      <Toaster />
    </AuthLayout>
  );
} 