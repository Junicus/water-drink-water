import {ReactNode} from "react";

interface LoadingScreenProps {
    content?: ReactNode
}

const LoadingScreen = (props: LoadingScreenProps) => {
    return (
        <>
            <div>loading...</div>
            <h3>{props.content}</h3>
        </>
    );
}

export default LoadingScreen