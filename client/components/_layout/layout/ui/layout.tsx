import React, {FC, ReactNode} from 'react';
import {NavBar} from "../../../_common/nav-bar";
import Head from "next/head";
import {PageWrapper} from "../../../_common/page-wrapper";
import {useAuthenticateUser} from "../../../../hooks/use-authenticate-user";
import {useFetchDynamicInfo} from "../../../../pages/main-page/model/main-page.hooks";
import {Div} from "../../../_common/custom-image/ui/custom-div.styled";
import {useSelector} from "react-redux";
import {getModalWindowVisibility} from "../../../_common/modal-window/model/modal-window.selectors";
import {LoginForm} from "../../../_common/login-form";
import {ModalWindow} from "../../../_common/modal-window";
import {PageProgressBar} from "../../page-progress-bar";
import {useSession} from "next-auth/react";
import {systemVariables} from "../../../../system/system";
import {HStack} from "../../../_common/flex-stack";
import {useRouter} from "next/router";
import {definePageProgressBarColor} from "../model/layout.helpers";

interface LayoutProps {
    children: ReactNode
    passedColors: {
        backgroundColor: string
        nameColor1: string
        nameColor2: string
        linkHoverFontColor: string
        linkHoverBackground: string
        profileFontColor: string
    }
}

const Layout:FC<LayoutProps> = ({children, passedColors}) => {

    const {pathname} = useRouter();
    const progressBarColor = definePageProgressBarColor({pathname})
    const modalWindowVisibility = useSelector(getModalWindowVisibility);
    const zIndex = modalWindowVisibility ? 1000 : -1;

    console.log(useSession());
    console.log("client id", systemVariables.firebaseDevWebClientId);
    console.log("client secret", systemVariables.firebaseDevWebClientSecret);

    useAuthenticateUser();
    useFetchDynamicInfo();

    return (
        <>
            <PageWrapper
                isAnimated={true}
            >
                <Head>
                    <meta name="keywords" content="Tbilisi, Georgia, garbage, eco, cleanups"/>
                    <meta name="color-scheme" content="light only"/>
                    <title>Nogarba.ge</title>
                </Head>
                <PageProgressBar
                    progressBarColor={progressBarColor}
                />
                {/*<Div*/}
                {/*    zIndex={1000}*/}
                {/*    top={"0px"}*/}
                {/*    position={"absolute"}*/}
                {/*    width={"100%"}*/}
                {/*    height={"6px"}*/}
                {/*    background={"linear-gradient(45deg, #02AABD, #00CDAC)"}*/}
                {/*/>*/}
                <NavBar
                    backgroundColor={ passedColors?.backgroundColor }
                    nameColor1={ passedColors?.nameColor1 }
                    nameColor2={ passedColors?.nameColor2 }
                    linkHoverFontColor={ passedColors?.linkHoverFontColor}
                    linkHoverBackground={ passedColors?.linkHoverBackground }
                    profileFontColor={ passedColors?.profileFontColor }
                />
                {children}
            </PageWrapper>
            <Div
                zIndex={zIndex}
                position={"absolute"}
                height={"auto"}
                width={"auto"}
                top={"0"}
                left={"0"}
                className={"modal-portal"}
            ></Div>
            <ModalWindow>
                <LoginForm/>
            </ModalWindow>
        </>
    );
};

export {Layout};