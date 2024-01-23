"use client"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.replace(`pt-BR/`);
  }, [])


  return (
    <main>
      <h1>Carregando...</h1>
    </main>
  )
}
