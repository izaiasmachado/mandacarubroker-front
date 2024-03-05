import GlobalStyles from "@/styles/global"

export function Providers({children}){
    return(
        <>
            <GlobalStyles />
            {children}
        </>
    )
}