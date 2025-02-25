import SignUpForm from "@/components/sign-page";


export default function SignUpPage() {
  return (
    <div className="container mx-auto flex h-screen items-center justify-center px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg border shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Create an account</h1>
          <p className="text-gray-600">
            Enter your information to create your SmartPack account
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}
