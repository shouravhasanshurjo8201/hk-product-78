"use client";

// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { Loader2 } from "lucide-react";

export default function ItemsPage() {
    // const { data: session, status } = useSession();
    // const router = useRouter();

    // যদি ইউজার লগইন না করে থাকে, redirect to /login
    // useEffect(() => {
    //     if (status === "unauthenticated") {
    //         router.push("/login");
    //     }
    // }, [status, router]);

    // if (status === "loading") {
    //     // session লোড হচ্ছে
    //     return (
    //         <div className="flex items-center justify-center min-h-screen">
    //             <Loader2 className="animate-spin w-8 h-8 text-blue-600" />
    //         </div>
    //     );
    // }

    // if (!session) {
    //     return null; // redirect হওয়ার আগে কিছু দেখাবে না
    // }

    return (
        <div className="min-h-screen p-8 bg-slate-50">
            <h1 className="text-3xl font-bold mb-4">
                Welcome,
            </h1>
            <p className="text-slate-600 mb-6">
                This is your protected Items page. Only logged-in users can see this.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                        key={item}
                        className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all"
                    >
                        <h2 className="font-semibold text-lg">Item {item}</h2>
                        <p className="text-sm text-slate-500 mt-1">Description for item {item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
