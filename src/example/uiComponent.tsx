import './sassFile.scss'

interface IuiComponentProps {
    test: string;
}

export const uiComponent = ({test}: IuiComponentProps) => {
    return (
        <div className="test">
            {test}
        </div>
    )
}

