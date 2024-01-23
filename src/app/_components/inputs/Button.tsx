"use client"
import Link from "next/link";
import { Button } from "primereact/button";
import { useIntl } from "react-intl";

export default function InputButton({ href }: { href: string }) {
    const intl = useIntl();
    return (
        <Button className="bg-[#00d6b6] text-[#0a1521] text-sm sm:text-base border-none px-2 py-3 sm:px-7 sm:py-4 font-medium hover:bg-[#00ac92] hover:text-white w-max shadow-[#00d6b6]">
            <Link href={href}>{intl.formatMessage({ id: "btn_label" })}</Link>
        </Button>
    )
}