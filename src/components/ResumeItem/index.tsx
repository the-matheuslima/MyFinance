import React, { ReactElement } from "react";

import * as C from "./style"

type Props = {
    title: string,
    value: number,
    icons: ReactElement
}

function ResumeItem({ title, value, icons }: Props) {
    return (
        <>
            <C.Card>
                <C.CardContent>
                    <C.CardTitle>{title}</C.CardTitle>
                    <C.Arrow>{icons}</C.Arrow>
                </C.CardContent>

                <C.CardValue>R$ {value}.00</C.CardValue>
            </C.Card>
        </>
    );
}

export default ResumeItem;
