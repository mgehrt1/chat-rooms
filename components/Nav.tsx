"use client";

import Link from "next/link";
import SignOut from "./SignOut";
import { useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";

export default function Nav() {
    const [user] = useAuthState(auth);
    const [visible, setVisible] = useState(false);
    const photoURL: string = user?.photoURL ?? "/default-user.png";

    const toggleVisible = () => {
        setVisible((prev) => !prev);
    };

    return (
        <nav className="sticky flex justify-between items-center z-50 bg-light-blue w-full py-2">
            <Link href="/" className="text-white-blue border-4 rounded-3xl p-2 text-3xl ml-12">
                Chat Rooms
            </Link>
            <img onClick={toggleVisible} src={photoURL} className="rounded-[28px] mr-12 w-14 h-14 cursor-pointer" alt="User's Profile Picture" />
            <SignOut visible={visible} />
        </nav>
    );
}
