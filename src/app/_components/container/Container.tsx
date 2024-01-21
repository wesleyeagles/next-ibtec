export default function Container({ children }: { children: React.ReactNode }) {
    return (<section className="px-10 mx-auto lg:px-0 lg:max-w-[876px] xl:max-w-[1124px] 2xl:max-w-[1220px] h-full">
        {children}
    </section>)
}